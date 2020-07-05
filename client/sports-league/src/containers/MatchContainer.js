import React from 'react';
import Match from '../components/Match.js'
import MatchData from '../helpers/MatchData.js'

class MatchContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      matchData: []
    }
  }

  componentDidMount() {

    const dataRequest = new MatchData();

    dataRequest.getFixtures()
    .then(fetchData => this.setState({
      matchData: fetchData
    }))




    // const request = new Request();
    //
    // request.get("/matches")
    // .then(data => {
    //   const groups = data.reduce((groups, match) => {
    //
    //     const date = match.date.split('T')[0];
    //       if (!groups[date]) {
    //         groups[date] = [];
    //       }
    //         groups[date].push(match);
    //         return groups
    //       }, {});
    //
    //     const groupArrays = Object.keys(groups).map((date) => {
    //       return {
    //         date,
    //         matches: groups[date]
    //       }
    //     })
    //
    //     this.setState({
    //       matchData: groupArrays.sort(function(a, b) {
    //         if (a.date > b.date) return 1;
    //         if (a.date < b.date) return -1;
    //         return 0
    //       })
    //   })
    // })
  }

  render() {

    const matchComponent = this.state.matchData.map((match, index) => {
      return (
        <Match match={match} key={index}/>
      )
    })

    return(
      <div className="fixtures-table">
        {matchComponent}
      </div>

    )
  }
}

export default MatchContainer;
