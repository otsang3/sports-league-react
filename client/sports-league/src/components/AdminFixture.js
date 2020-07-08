import React from 'react';
import Request from '../helpers/Request.js';
import TeamSelect from './TeamSelect.js';

class AdminFixture extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      editToggle: false
    }
  }

  handleDelete(id) {
    const request = new Request();
    request.delete("/matches/" + id)
    .then(window.location.reload())
  }

  handleEdit() {
    this.setState(prevState => ({
      editToggle: !prevState.editToggle
    }))
  }

  render() {

    const fixtureComponent = this.props.fixture.matches.map(match => {
      return(
        <div key={match.id}>
        <table className="fixtures-table-content">
          <tbody>
            <tr>
              {this.state.editToggle &&
              <TeamSelect match={match}/>
              }
              {!this.state.editToggle &&
              <th className="fixtures-table-item">{match.homeClub.name}</th>
              }
              {!this.state.editToggle &&
              <th style={{paddingLeft: 40}}>vs</th>
              }
              {!this.state.editToggle &&
              <th className="fixtures-table-item">{match.awayClub.name}</th>
              }
              <td>
                {!this.state.editToggle &&
                <button onClick={() => this.handleEdit()}>Edit</button>
                }
                {this.state.editToggle &&
                <button onClick={() => this.handleEdit()}>Save</button>
                }
                <button onClick={() => this.handleDelete(match.id)}>Delete</button>
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
