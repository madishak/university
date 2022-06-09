import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    loggedIn: state.users.loggedIn,
  })
  
const ProtectedRotes = (props) => {
    const { loggedIn } = props;
    const location = useLocation();
    // console.log(loggedIn === 's')
    // const l = loggedIn === 's' ? true : false
    return  loggedIn ? (<Outlet />) : (<Navigate to="/" replace state={{ from: '/'}} />)
};

export default connect(mapStateToProps)(ProtectedRotes);