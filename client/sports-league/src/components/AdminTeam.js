import React from 'react';
import Request from '../helpers/Request.js';


class AdminTeam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editToggle: false,
      input: this.props.club.name
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  handleDelete(id) {
    const request = new Request();
    request.delete("/clubs/" + this.props.club.id)
    window.location.reload();
  }

  handleEdit() {
    this.setState(prevState => ({
      editToggle: !prevState.editToggle
    }))
  }

  handleSave() {
    const request = new Request();
    const payload = {
      id: this.props.club.id,
      name: this.state.input,
      matchesPlayed: this.props.club.matchesPlayed,
      points: this.props.club.points,
      wins: this.props.club.wins,
      draws: this.props.club.draws,
      losses: this.props.club.losses,
      goalsFor: this.props.club.goalsFor,
      goalsAgainst: this.props.club.goalsAgainst,
      goalDifference: this.props.club.goalDifference
    }
    request.patch("/clubs", payload)
    .then(this.handleEdit())
    .then(window.location.reload());
  }

  render() {
    return(
      <div>
        <button onClick={() => this.handleDelete(this.props.club.id)}>Delete</button>
        {!this.state.editToggle &&
        <button onClick={() => this.handleEdit()}>Edit</button>
        }
        {this.state.editToggle &&
        <button onClick={() => this.handleSave()}>Save</button>
        }
        {!this.state.editToggle &&
        <label>{this.props.club.name}</label>
        }
        {this.state.editToggle &&
        <input
        name="input"
        onChange={this.handleChange}
        value={this.state.input}
        type="text"/>
        }
      </div>
    )
  }

}

export default AdminTeam;
