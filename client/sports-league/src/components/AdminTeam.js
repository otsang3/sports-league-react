import React from 'react';
import Request from '../helpers/Request.js';


class AdminTeam extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {

    const request = new Request();
    request.delete("/clubs/" + this.props.club.id)
    console.log(id)
  }

  render() {
    return(
      <div>
        <button onClick={() => this.handleDelete(this.props.club.id)}>Delete</button>
        <button>Edit</button>
        <label> {this.props.club.name}</label>
      </div>
    )
  }

}

export default AdminTeam;
