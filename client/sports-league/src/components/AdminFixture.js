import React from 'react';

class AdminFixture extends React.Component{

  constructor(props) {
    super(props)
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
                <button>Delete</button>
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
