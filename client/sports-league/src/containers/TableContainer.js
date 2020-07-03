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

    const request = new Request();

    const largestToSmallest = function (a,b) {
      if (a.points === b.points) {
          return b.goalDifference - a.goalDifference
      }
      return b.points - a.points
    }

    request.get("/clubs")
    .then(data => {
      this.setState({
        clubs: data.sort(largestToSmallest)
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
