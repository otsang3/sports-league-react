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
    const name = event.target.name
    this.setState((prevState) => ({
      [name]: !prevState[name]
    }))


  }

  render() {
    return(
      <div>
        <button name="fixtureComponent" onClick={this.handleClick}>Manage Fixtures</button>
        {this.state.fixtureComponent &&
        <AdminFixtureContainer/>}

        <button name="resultComponent" onClick={this.handleClick}>Manage Results</button>
        {this.state.resultComponent &&
        <AdminResultContainer/>}
        
        <button name="teamComponent" onClick={this.handleClick}>Manage Teams</button>
        {this.state.teamComponent &&
        <AdminTeamContainer/>}
      </div>
    )
  }
}

export default AdminContainer;
