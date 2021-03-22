import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Squad = () => {
  const [squad, setSquad] = useState([]);

  useEffect(() => {
    UserService.getSquadData()
      .then((data) => {
        console.log(data);
        setSquad(data.data.data);
      })
      .catch((error) => {
        const _squad =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setSquad(_squad);
      });
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        Squad
      </header>
      <table className="table">
          <thead className="thead-dark">
              <tr>
              <th>Nama Squad</th>
              </tr>
          </thead>
          <tbody>
          {squad.map((data) => {
              return (
                <tr>
                    <td>{data.squads_name}</td>
                </tr>
              )
          })}
          </tbody>
      </table>
    </div>
  );
};

export default Squad;
