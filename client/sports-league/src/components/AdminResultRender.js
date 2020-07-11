import React from 'react';
import Request from '../helpers/Request.js';

class AdminResultRender extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      editToggle: false,
      homeScore: this.props.match.homeScore,
      awayScore: this.props.match.awayScore
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: parseInt(event.target.value)
    })

  }

  handleEdit() {
    this.setState(prevState => ({
      editToggle: !prevState.editToggle
    }))
  }

  handleSave() {
    const request = new Request();
    let result = null;

    if (this.state.homeScore > this.state.awayScore) {
      result = this.props.match.homeClub.id
    } else if (this.state.homeScore < this.state.awayScore) {
      result = this.props.match.awayClub.id
    } else {
      result = 0
    }

    const payload = {
      id: this.props.match.id,
      homeClub: this.props.match.homeClub,
      awayClub: this.props.match.awayClub,
      date: this.props.match.date,
      result: result,
      homeScore: this.state.homeScore,
      awayScore: this.state.awayScore
    }

    request.patch("/matches/results", payload)
  }

  render() {

    let buttonDisplay = '';

    if (!this.state.editToggle) {
      buttonDisplay = 'Edit'
    } else {
      buttonDisplay = 'Cancel'
    }

    return(
      <div key={this.props.match.id}>
      <table className="fixtures-table-content">
        <tbody>
          <tr>
            <th className="fixtures-table-item">{this.props.match.homeClub.name}</th>
            {!this.state.editToggle &&
            <th style={{paddingLeft: 40}}>{this.props.match.homeScore}:{this.props.match.awayScore}</th>
            }
            {this.state.editToggle &&
              <input
              style={{width:40}}
              name="homeScore"
              value={this.state.homeScore}
              onChange={this.handleChange}
              min="0"
              type="number"/>
            }
            {this.state.editToggle &&
              <label style={{marginLeft: 10, marginRight: 10}}>:</label>
            }
            {this.state.editToggle &&
              <input
              style={{width:40}}
              name="awayScore"
              value={this.state.awayScore}
              onChange={this.handleChange}
              min="0"
              type="number"/>
            }
            <th className="fixtures-table-item">{this.props.match.awayClub.name}</th>
            <td>
              {this.state.editToggle &&
              <button onClick={this.handleSave}>Save</button>
              }
              <button name="editToggle" onClick={this.handleEdit}>{buttonDisplay}</button>
              <button onClick={() => this.handleDelete(this.props.match.id)}>Delete</button>
            </td>

          </tr>
        </tbody>
      </table>
      </div>
    )
  }

}

export default AdminResultRender
