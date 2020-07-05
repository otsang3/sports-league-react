import React from 'react';
import Match from '../components/Match.js'
import MatchData from '../helpers/MatchData.js'

class ResultContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      matchData: []
    }
  }

  componentDidMount() {

    const dataRequest = new MatchData();

    dataRequest.getResults()
    .then(fetchData => this.setState({
      matchData: fetchData
    }))

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

export default ResultContainer;
