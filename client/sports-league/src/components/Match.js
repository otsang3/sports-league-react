import React from 'react';

function Match(props) {

  const matchComponent = props.match.matches.map((match, index) => {

    const getTime = match.date.split('T')[1].substring(0,5)

    return (
      <table key={index} className="fixtures-table-content">
        <tbody>
          <tr key={index}>
            <th>{getTime}</th>
            <th className="fixtures-table-item">{match.homeClub.name}</th>
            {!match.result &&
              <th style={{paddingLeft: 40}}>vs</th>
            }
            {match.result &&
              <th style={{paddingLeft: 40}}>5:0</th>
            }
            <th className="fixtures-table-item">{match.awayClub.name}</th>
          </tr>
        </tbody>
      </table>
    )
  })

  return(
    <div>
      <h2>{props.match.date}</h2>
      {matchComponent}
    </div>

  )
}

export default Match;
