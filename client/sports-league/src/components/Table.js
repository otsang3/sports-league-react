import React from 'react';

function Table(props) {

  let goalsDiffSign = ''
  if (props.club.goalDifference > 0) {
    goalsDiffSign = '+'
  }
  return(
    <tr className={props.arraySize !== props.index+1 ? 'table-content' : 'table-content-last-child'}>
      <th>{props.index+1}</th>
      <th className="th-wide">{props.club.name}</th>
      <th>{props.club.points}</th>
      <th>{props.club.matchesPlayed}</th>
      <th>{props.club.wins}</th>
      <th>{props.club.draws}</th>
      <th>{props.club.losses}</th>
      <th>{props.club.goalsFor}</th>
      <th>{props.club.goalsAgainst}</th>
      <th>{goalsDiffSign}{props.club.goalDifference}</th>
    </tr>
  )
}

export default Table;
