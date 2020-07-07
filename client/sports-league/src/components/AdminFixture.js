import React from 'react';
import Request from '../helpers/Request.js';

class AdminFixture extends React.Component{

  constructor(props) {
    super(props);
  }

  handleDelete(id) {
    const request = new Request();
    request.delete("/matches/" + id)
    .then(window.location.reload())
  }

  render() {

    const fixtureComponent = this.props.fixture.matches.map(match => {
      return(
        <div key={match.id}>
        <table className="fixtures-table-content">
          <tbody>
            <tr>
              <th className="fixtures-table-item">{match.homeClub.name}</th>
              <th style={{paddingLeft: 40}}>vs</th>
              <th className="fixtures-table-item">{match.awayClub.name}</th>
              <td>
                <button onClick={() => this.handleDelete(match.id)}>Delete</button>
                <button>Edit</button>
                <button>Create Result</button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      )
    })

    return(
      <div>
        <h2>{this.props.fixture.date}</h2>
        {fixtureComponent}
      </div>
    )
  }
}

export default AdminFixture
