import React from 'react';
import Match from '../components/Match.js'
import ApiDataRequest from '../helpers/ApiDataRequest.js'

class FixtureContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fixtures: []
    }
  }

  componentDidMount() {

    const dataRequest = new ApiDataRequest();

    dataRequest.getFixtures()
    .then(fetchData => this.setState({
      fixtures: fetchData
    }))

  }

  render() {

    const matchComponent = this.state.fixtures.map((match, index) => {
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

export default FixtureContainer;
