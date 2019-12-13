import React from "react";
import Team from "./Team";
import { connect } from "react-redux";
import { getPlayer } from "../actions";

const Player = props => {
  return (
    <div>
      <h1>Dota 2 Pro Teams</h1>
      {!props.teams && !props.isFetching && <p> Click to show Dota teams </p>}
      {props.isFetching && <p>Scanning...</p>}
      {props.teams && props.teams.map(team => <Team team={team} />)}
      <button onClick={props.getPlayer}>Search Teams</button>
      {console.log(props.teams, "teams")}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    teams: state.teams,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getPlayer })(Player);
