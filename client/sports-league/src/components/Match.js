import React from 'react';

function Match(props) {

  const matchComponent = props.match.matches.map((match, index) => {
    return (
      <div key={index}>
        <p>{match.homeClub.name} vs {match.awayClub.name}</p>
      </div>
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
