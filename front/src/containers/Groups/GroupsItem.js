import "./styles.css";
import { useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { ADD_TASK_REQUEST } from "../../constants";

const mapStateToProps = (state) => ({
  group: state.groups.request?.data.groups.filter(
    ({ task_id }) => task_id === state.taskItemID
  ),
  files: state.tasks,
});

const GroupsItem = (props) => {
  const fileInput = useRef(null);
  const dispatch = useDispatch();
  const { group, files } = props;
  const [groupValues] = group;

  const handleSubmit = (e) => {
    e.preventDefault();

    const files = Object.values(fileInput.current.files).map((file) => ({
      name: file.name.slice(0, 10).split(".")[0],
      file: URL.createObjectURL(file),
    }));
    dispatch({ type: ADD_TASK_REQUEST, files });
  };

  return (
    <div className="wrapper group__item">
      <div>Название дисциплины: {groupValues.discipline}</div>
      <div>Группа: {groupValues.group_name}</div>

      <form className="form" onSubmit={handleSubmit}>
        <input
          ref={fileInput}
          type="file"
          multiple
          className="input__file"
          placeholder="Прикрепить задание"
        />
        <button type="submit">Добавить</button>
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

export default connect(mapStateToProps)(GroupsItem);
