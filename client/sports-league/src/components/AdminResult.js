import React from 'react';
import AdminResultRender from './AdminResultRender.js'

function AdminResult(props) {

  const resultComponent = props.results.matches.map(result => {
    return(
      <AdminResultRender key={result.id} match={result}/>
    )
  })

  return(
    <div>
      <h2>{props.results.date}</h2>
      {resultComponent}
    </div>
  )
}

export default AdminResult;
