import "./styles.css";
import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET_USERS_REQUEST, LOGGED_IN, STUDENT_ID_REQUEST, TEACHER_ID_REQUEST } from "../../constants";

const mapStateToProps = (state) => ({
  users: state.users.users,
});

const defaultInputs = {
  login: "",
  password: "",
  status: "student",
};

const LogIn = (props) => {
  const [inputs, setInputs] = useState(defaultInputs);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = props;
  let loggedIn = false;

  useEffect(() => {
    dispatch({ type: GET_USERS_REQUEST });
  }, []);

  const handleChange = (key, value) => {
    setInputs((values) => ({ ...values, [key]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (inputs.status === "student") {
      const { students } = users;
      const filteredList = students.filter(
        ({ id, login, password }) => {
          if (login === inputs.login && password === inputs.password) {
            dispatch({ type: STUDENT_ID_REQUEST, 'studId': id });
          }
  
          return login === inputs.login && password === inputs.password
        }
      );
      loggedIn = filteredList.length > 0 ? true : false;
      dispatch({ type: LOGGED_IN, loggedIn });
      loggedIn ? navigate("/disciplines") : navigate("/");
    } else if (inputs.status === "teacher") {
      const { staff } = users;
      const filteredList = staff.filter(
        ({ id, login, password }) => {
          if (login === inputs.login && password === inputs.password) {
            dispatch({ type: TEACHER_ID_REQUEST, 'teacherId': id });
          }
  
          return login === inputs.login && password === inputs.password
        } 
      );
      loggedIn = filteredList.length > 0 ? true : false;
      dispatch({ type: LOGGED_IN, loggedIn });
      loggedIn ? navigate("/groups") : navigate("/");
    } else {
      dispatch({ type: LOGGED_IN, loggedIn });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        onChange={(evt) => handleChange("login", evt.currentTarget.value)}
        type="text"
        className="form__input"
        placeholder="Логин"
        name="login"
        value={inputs?.login || ""}
      />
      <input
        onChange={(evt) => handleChange("password", evt.currentTarget.value)}
        type="password"
        className="form__input"
        placeholder="Пароль"
        name="password"
        value={inputs?.password || ""}
      />
      <select
        onChange={(evt) => handleChange("status", evt.currentTarget.value)}
        value={inputs?.status || "student"}
        className="form__input"
      >
        <option value="student">Студент</option>
        <option value="teacher">Преподаватель</option>
        <option value="admin">Сотрудник</option>
      </select>
      <button type="submit" className="form__btn">
        Войти
      </button>
    </form>
  );
};

export default connect(mapStateToProps)(LogIn);
