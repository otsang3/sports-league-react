import React from 'react';
import ApiDataRequest from '../helpers/ApiDataRequest.js';
import AdminFixture from '../components/AdminFixture.js';

class AdminFixtureContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fixtures: []
    };
  }

  componentDidMount() {

    const dataRequest = new ApiDataRequest();

    dataRequest.getFixtures()
    .then(fetchData => this.setState({
      fixtures: fetchData
    }))
  }

  render() {
    const fixtureComponent = this.state.fixtures.map(fixture => {
      return(
        <AdminFixture fixture={fixture} key={fixture.id}/>
      )
    })

    return(
      <div>
        {fixtureComponent}
      </div>
    )
  }
}

export default AdminFixtureContainer;
