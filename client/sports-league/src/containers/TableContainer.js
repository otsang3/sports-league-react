import React from 'react';
import Table from '../components/Table.js'
import Request from '../helpers/Request.js'

class TableContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clubs: []
    }
  }

  componentDidMount() {

    const request = new Request;

    request.get("/clubs")
    .then(data => {
      function compare(a, b) {
        if (a.points > b.points) return -1;
        if (b.points > a.points) return 1;

        return 0;
      }
      this.setState({
        clubs: data.sort(compare)
      })
    })
  }

  render() {

    const clubComponent = this.state.clubs.map((club,index) => {
      return(
        <Table arraySize={this.state.clubs.length} index={index} key={club.id} club={club}/>
      )
    })

    return(
      <table>
        <tr className="table-headers">
          <th>Position</th>
          <th className="th-wide">Club</th>
          <th>Matches Played</th>
          <th>Wins</th>
          <th>Draws</th>
          <th>Losses</th>
          <th>Goals For</th>
          <th>Goals Against</th>
          <th>Goal Difference</th>
          <th>Points</th>
        </tr>
            {clubComponent}
      </table>

    )
  }
}

export default TableContainer;
