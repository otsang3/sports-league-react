import React from 'react';
import ApiDataRequest from '../helpers/ApiDataRequest.js';
import Request from '../helpers/Request.js';

class TeamSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clubs: [],
      homeTeam: '',
      homeTeamName: '',
      awayTeam: '',
      awayTeamName: '',
      date: '',
      time: '',
    }
    this.handleHomeChange = this.handleHomeChange.bind(this);
    this.handleAwayChange = this.handleAwayChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const dataRequest = new ApiDataRequest();

    dataRequest.fetchClubData()
    .then(data => this.setState({
      clubs: dataRequest.formatClubsByAlphabet(data)
    }))
    .then(() => {
      if (typeof this.props.match === 'object') {
        this.setState({
          homeTeam: this.props.match.homeClub,
          homeTeamName: this.props.match.homeClub.name,
          awayTeam: this.props.match.awayClub,
          awayTeamName: this.props.match.awayClub.name
        })} else {
        this.setState({
          homeTeamName: this.state.clubs[0].name,
          awayTeamName: this.state.clubs[0].name
        })
        }
      })
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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
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
    if (typeof this.props.match === 'object') {
      const patchPayload = {
        id: this.props.match.id,
        homeClub: this.state.homeTeam,
        awayClub: this.state.awayTeam,
        date: this.state.date + "T" + this.state.time
      }
      request.patch("/matches", patchPayload)
      console.log(patchPayload);
    } else {
      const postPayload = {
        homeClub: this.state.homeTeam,
        awayClub: this.state.awayTeam,
        date: this.state.date + "T" + this.state.time
      }
      request.post("/matches", postPayload)
    }

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
        <label>Date: </label>
        <input name="date" type="date" onChange={this.handleChange}/>
        <label>Time: </label>
        <input name="time" type="time" onChange={this.handleChange}/>
        <button onClick={this.handleSave}>Save</button>
        </td>
      </tr>
    )
  }

}

export default TeamSelect;
