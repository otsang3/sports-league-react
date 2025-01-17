import React from 'react';
import ApiDataRequest from '../helpers/ApiDataRequest.js';
import AdminFixture from '../components/AdminFixture.js';
import TeamSelect from '../components/TeamSelect.js';

class AdminFixtureContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fixtures: [],
      fixtureToggle: false
    };
  }

  componentDidMount() {

    const dataRequest = new ApiDataRequest();

    dataRequest.getFixtures()
    .then(fetchData => this.setState({
      fixtures: fetchData
    }))
  }

  handleClick() {
    this.setState(prevState => ({
      fixtureToggle: !prevState.fixtureToggle
    }))
  }

  render() {
    const fixtureComponent = this.state.fixtures.map(fixture => {
      return(
        <AdminFixture fixture={fixture} key={fixture.id}/>
      )
    })

    let buttonDisplay = '';

    if (!this.state.fixtureToggle) {
      buttonDisplay = 'Create a new fixture'
    } else {
      buttonDisplay = 'Hide'
    }

    return(
      <div style={{paddingLeft: 300, paddingTop: 30}}>
        <button onClick={() => this.handleClick()}>{buttonDisplay}</button>
        {this.state.fixtureToggle &&
        <TeamSelect/>
        }
        {fixtureComponent}
      </div>
    )
  }
}

export default AdminFixtureContainer;
