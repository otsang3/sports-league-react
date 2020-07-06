import React from 'react';
import AdminFixtureContainer from './AdminFixtureContainer.js';
import AdminResultContainer from './AdminResultContainer.js';
import AdminTeamContainer from './AdminTeamContainer.js';

class AdminContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      teamComponent: false,
      fixtureComponent: false,
      resultComponent: false
    };
  }

  render() {
    return(
      <div>
        <AdminFixtureContainer/>
        <AdminResultContainer/>
        <AdminTeamContainer/>
      </div>
    )
  }
}

export default AdminContainer;
