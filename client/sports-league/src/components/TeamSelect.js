import React from 'react';
import ApiDataRequest from '../helpers/ApiDataRequest.js';
import Request from '../helpers/Request.js';

class TeamSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clubs: [],
      homeTeam: '',
      homeTeamName: this.props.match.homeClub.name,
      awayTeam: '',
      awayTeamName: this.props.match.awayClub.name
    }
    this.handleHomeChange = this.handleHomeChange.bind(this);
    this.handleAwayChange = this.handleAwayChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    const dataRequest = new ApiDataRequest();

    dataRequest.fetchClubData()
    .then(data => this.setState({
      clubs: dataRequest.formatClubsByAlphabet(data)
    }))
  }

  handleAwayChange(event) {
    const teamName = event.target.value;
    const foundTeam = this.state.clubs.find(club => club.name === teamName);
    const foundTeamRetain = {
      id: foundTeam.id,
      name: foundTeam.name
    }
    this.setState({
      awayTeamName: teamName,
      awayTeam: foundTeamRetain
    })
  }

  handleHomeChange(event) {
    const teamName = event.target.value;
    const foundTeam = this.state.clubs.find(club => club.name === teamName);
    const foundTeamRetain = {
      id: foundTeam.id,
      name: foundTeam.name
    }
    this.setState({
      homeTeamName: teamName,
      homeTeam: foundTeamRetain
    })
  }

  handleSave(event) {
    event.preventDefault();
    const request = new Request();
    const payload = {
      id: this.props.match.id,
      homeClub: this.state.homeTeam,
      awayClub: this.state.awayTeam,
      date: this.props.match.date
    }
    request.patch("/matches", payload)
  }

  render() {

    const teamComponent = this.state.clubs.map(club => {
      return(
          <option key={club.id} value={club.name}>{club.name}</option>
      )

    })
    return(
      <tr>
        <td>
        <select value={this.state.homeTeamName} onChange={this.handleHomeChange}>
          {teamComponent}
        </select>
        <p>vs</p>
        <select value={this.state.awayTeamName} onChange={this.handleAwayChange}>
          {teamComponent}
        </select>
        <button onClick={this.handleSave}>Save</button>
        </td>
      </tr>
    )
  }

}

export default TeamSelect;
