import React from 'react';
import Match from '../components/Match.js'
import ApiDataRequest from '../helpers/ApiDataRequest.js'

class ResultContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidMount() {

    const dataRequest = new ApiDataRequest();

    dataRequest.getResults()
    .then(fetchData => this.setState({
      results: fetchData
    }))

  }

  render() {

    const matchComponent = this.state.results.map((match, index) => {
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
