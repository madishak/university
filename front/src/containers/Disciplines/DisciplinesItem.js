import { useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { ADD_TASK_REQUEST } from "../../constants";

const mapStateToProps = (state) => ({
  disciplines: state.disciplines.request?.data.studies.filter(
    ({ id }) => id === state.disitemID
  ),
  files: state.tasks,
});

const DisciplinesItem = (props) => {
  const fileInput = useRef(null);
  const dispatch = useDispatch();
  const { disciplines, files } = props;
  const [disciplinesValues] = disciplines;

  const handleSubmit = (e) => {
    e.preventDefault();

    const files = Object.values(fileInput.current.files).map((file) => ({
      name: file.name.slice(0, 10).split(".")[0],
      file: URL.createObjectURL(file),
    }));
    dispatch({ type: ADD_TASK_REQUEST, files });
  };

  return (
    <div className="wrapper discipline__item">
      <div>Название дисциплины: {disciplinesValues.discipline}</div>

      <form className="form" onSubmit={handleSubmit}>
        <input
          ref={fileInput}
          type="file"
          multiple
          className="input__file"
          placeholder="Прикрепить ответ"
        />
        <button type="submit">Отправить</button>
      </form>
      {files.files
        ? files.files.map(({ name, file }, i) => (
            <a
              key={i}
              href={file}
              target="_blank"
              rel="noreferrer"
              className="task__item"
            >
              {name}
            </a>
          ))
        : null}
    </div>
  );
};

export default connect(mapStateToProps)(DisciplinesItem);
