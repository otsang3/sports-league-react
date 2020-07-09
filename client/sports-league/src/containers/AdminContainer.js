import React from 'react';
import AdminFixtureContainer from './AdminFixtureContainer.js';
import AdminResultContainer from './AdminResultContainer.js';
import AdminTeamContainer from './AdminTeamContainer.js';

class AdminContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      fixtureComponent: false,
      resultComponent: false,
      teamComponent: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      fixtureComponent: false,
      resultComponent: false,
      teamComponent: false,
    })
    const name = event.target.name
    this.setState((prevState) => ({
      [name]: !prevState[name]
    }))
  }


  render() {

    return(
      <div>
        <button style={{marginLeft: 530, marginTop: 25}} name="fixtureComponent" onClick={this.handleClick}>Manage Fixtures</button>
        <button name="resultComponent" onClick={this.handleClick}>Manage Results</button>
        <button name="teamComponent" onClick={this.handleClick}>Manage Teams</button>
        {this.state.fixtureComponent &&
        <AdminFixtureContainer/>}
        {this.state.resultComponent &&
        <AdminResultContainer/>}
        {this.state.teamComponent &&
        <AdminTeamContainer/>}
      </div>
    )
  }
}

export default AdminContainer;
