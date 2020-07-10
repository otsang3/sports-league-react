import React from 'react';
import TeamSelect from './TeamSelect.js';
import Request from '../helpers/Request.js';

class AdminFixtureRender extends React.Component {

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

    let buttonDisplay = '';

    if (!this.state.editToggle) {
      buttonDisplay = 'Edit'
    } else {
      buttonDisplay = 'Cancel'
    }

    return (
      <div key={this.props.match.id}>
      <table className="fixtures-table-content">
        <tbody>
          <tr>
            {this.state.editToggle &&
            <TeamSelect match={this.props.match}/>
            }
            {!this.state.editToggle &&
            <th className="fixtures-table-item">{this.props.match.homeClub.name}</th>
            }
            {!this.state.editToggle &&
            <th style={{paddingLeft: 40}}>vs</th>
            }
            {!this.state.editToggle &&
            <th className="fixtures-table-item">{this.props.match.awayClub.name}</th>
            }
            <td>
              <button onClick={() => this.handleEdit()}>{buttonDisplay}</button>
              <button onClick={() => this.handleDelete(this.props.match.id)}>Delete</button>
              <button>Create Result</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}

export default AdminFixtureRender;
