import React from "react";



const Dashboard = () => {

  const handleLogout = () => {
    localStorage.removeItem('auth-token')
    window.location = "/"
  }
  return (
    <>
      Dashboard
      <button onClick={handleLogout}> Log Out</button>
    </>
  );
};

export default Dashboard;
