import React from 'react';
import { useAppContext } from "../../libs/contextLib";

function Dashboard() {
  const { globals } = useAppContext();
  return (
      <div className="container">
        <h1>Token is: { globals.token } </h1>
      </div>
  );
}

export default Dashboard;