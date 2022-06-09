import "./styles.css";
import { connect, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { DIS_ITEM_ID } from "../../constants";

const mapStateToProps = (state) => ({
  disciplines: state.disciplines.request?.data,
});

const Disciplines = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { disciplines } = props;

  const handleItem = (id) => () => {
    dispatch({ type: DIS_ITEM_ID, id });
    navigate(`/disciplines${id}`);
  };

  return (
    <div className="wrapper">
      <h2>Список ваших дисциплин:</h2>
      <div className="disciplines_items disciplines_header">
        <div>Студент</div>
        <div>Преподаватель</div>
        <div>Дисциплина</div>
        <div>Балы</div>
      </div>
      {disciplines
        ? disciplines.studies.map(({ id, student, teacher, discipline, score}) => (
            <div key={id}>
              <Link
                to={id}
                onClick={handleItem(id)}
                className="disciplines_items"
              >
                <div>{student}</div>
                <div>{teacher}</div>
                <div>{discipline}</div>
                <div>{score}</div>
              </Link>
            </div>
          ))
        : null}
    </div>
  );
};

export default connect(mapStateToProps)(Disciplines);
