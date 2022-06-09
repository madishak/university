import "./styles.css";
import { connect, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { TASK_ITEM_ID } from "../../constants";

const mapStateToProps = (state) => ({
  groups: state.groups.request?.data,
});

const Groups = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { groups } = props;

  const handleItem = (task_id) => () => {
    dispatch({ type: TASK_ITEM_ID, task_id });
    navigate(`/groups${task_id}`);
  };

  return (
    <div className="wrapper">
      <h2>Список ваших групп:</h2>
      <div className="groups_items groups_header">
        <div>Преподаватель</div>
        <div>Группа</div>
        <div>Дисциплина</div>
      </div>
      {groups
        ? groups.groups.map(({ task_id, teacher, group_name, discipline }) => (
            <div key={task_id}>
              <Link
                to={task_id}
                onClick={handleItem(task_id)}
                className="groups_items"
              >
                <div>{teacher}</div>
                <div>{group_name}</div>
                <div>{discipline}</div>
              </Link>
            </div>
          ))
        : null}
    </div>
  );
};

export default connect(mapStateToProps)(Groups);
