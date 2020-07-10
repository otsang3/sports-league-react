import React from 'react';
import Request from '../helpers/Request.js'

class CreateResult extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      homeScore: 0,
      awayScore: 0
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    const request = new Request();

    const payload = {
      id: this.props.match.id,
      homeClub: {
        id: this.props.match.homeClub.id,
        name: this.props.match.homeClub.name
      },
      awayClub: {
        id: this.props.match.awayClub.id,
        name: this.props.match.awayClub.name
      },
      date: this.props.match.date
    }

    request.post(`/matches/createResult/${this.state.homeScore}/${this.state.awayScore}`, payload)
  }

  render() {
    return(
      <form style={{marginTop:10}} onSubmit={(event) => this.handleSubmit(event)}>
        <label style={{marginLeft: 110}}>Home Score: </label>
        <input
        required
        name="homeScore"
        type="number"
        value={this.state.homeScore}
        onChange={(event) => this.handleChange(event)}
        style={{width:50}}/>
        <label style={{marginLeft: 100}}>Away Score: </label>
        <input
        required
        name="awayScore"
        type="number"
        value={this.state.awayScore}
        onChange={(event) => this.handleChange(event)}
        style={{width:50}}/>

        <input style={{marginLeft:57}} type="submit" value="Submit result"/>
      </form>
    )
  }
}

export default CreateResult;
