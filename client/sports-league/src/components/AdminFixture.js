import React from 'react';
import AdminFixtureRender from './AdminFixtureRender';

class AdminFixture extends React.Component{

  render() {

    const fixtureComponent = this.props.fixture.matches.map(match => {
      return(
        <AdminFixtureRender key={match.id} match={match}/>
      )
    })

    return(
      <div>
        <h2>{this.props.fixture.date}</h2>
        {fixtureComponent}
      </div>
    )
  }
}

export default AdminFixture
