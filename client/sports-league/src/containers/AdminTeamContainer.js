import React from 'react';
import AdminTeam from '../components/AdminTeam.js';
import ApiDataRequest from '../helpers/ApiDataRequest.js';

class AdminTeamContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clubs: []
    }
  }

  componentDidMount() {
    const request = new ApiDataRequest();

    request.fetchClubData()
    .then(data => this.setState({
      clubs: request.formatClubsByAlphabet(data)
    }))
  }

  handleClick(id) {
    console.log(id);
  }

  render() {

    const adminTeamComponent = this.state.clubs.map(club => {
      return (
        <AdminTeam handleClick={this.handleClick} key={club.id} club={club}/>
      )
    })

    return(
      <div>
        {adminTeamComponent}
      </div>
    )
  }
}

export default AdminTeamContainer;
