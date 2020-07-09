import React from 'react';
import AdminTeam from '../components/AdminTeam.js';
import ApiDataRequest from '../helpers/ApiDataRequest.js';
import Request from '../helpers/Request.js'

class AdminTeamContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clubs: [],
      formInput: '',
      createToggle: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const request = new ApiDataRequest();

    request.fetchClubData()
    .then(data => this.setState({
      clubs: request.formatClubsByAlphabet(data)
    }))
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick() {
    this.setState(prevState => ({
      createToggle: !prevState.createToggle
    }))
  }

  handleSubmit(event) {
    event.preventDefault();
    const request = new Request();
    const payload = {
      name: this.state.formInput
    }
    request.post("/clubs", payload)
    // .then(window.location.reload());
  }

  render() {

    const adminTeamComponent = this.state.clubs.map(club => {
      return (
        <AdminTeam key={club.id} club={club}/>
      )
    })

    return(
      <div style={{paddingLeft: 550, paddingTop: 30}}>
        <button onClick={this.handleClick}>Create a new Team</button>
        {this.state.createToggle &&
        <form onSubmit={this.handleSubmit}>
          <input
            name="formInput"
            onChange={this.handleChange}
            type="text"
            value={this.state.formInput}
          />
          <input type="submit" value="Save team"/>
        </form>
        }
        {adminTeamComponent}
      </div>
    )
  }
}

export default AdminTeamContainer;
