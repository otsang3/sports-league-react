import React from 'react';
import Table from '../components/Table.js'
import ApiDataRequest from '../helpers/ApiDataRequest.js';

class TableContainer extends React.Component {

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
      clubs: request.formatClubs(data)
    }))

  }

  render() {

    const clubComponent = this.state.clubs.map((club,index) => {
      return(
        <Table arraySize={this.state.clubs.length} index={index} key={club.id} club={club}/>
      )
    })

    if (this.state.clubs.length === 0) {
      return(
        <p>Loading...</p>
      )
    }

    return(
      <table>
        <tbody>
          <tr className="table-headers">
            <th>Position</th>
            <th className="th-wide">Club</th>
            <th>Points</th>
            <th>Matches Played</th>
            <th>Wins</th>
            <th>Draws</th>
            <th>Losses</th>
            <th>Goals For</th>
            <th>Goals Against</th>
            <th>Goal Difference</th>
          </tr>
            {clubComponent}
        </tbody>
      </table>

    )
  }
}

export default TableContainer;
