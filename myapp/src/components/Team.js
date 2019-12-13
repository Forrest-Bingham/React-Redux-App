import React from "react";

import { connect } from "react-redux";

const Team = props => {
  return (
    <div className="team">
      {props.team.wins > 100}
      {console.log("team", props.team)}
      <img src={props.team.logo_url} alt="logo" height="40" width="40" />
      <h4>{props.team.name}</h4>
      <h5>Wins: {props.team.wins}</h5>
      <h5>Losses: {props.team.losses}</h5>
    </div>
  );
};

export default Team;
