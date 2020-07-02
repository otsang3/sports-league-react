import React from 'react';
import Table from '../components/Table.js'

class TableContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      clubs: []
    }
  }

  componentDidMount() {
    fetch("/clubs")
    .then(response => response.json())
    .then(data => this.setState({
      clubs: data
    }))
  }

  render() {

    const clubComponent = this.state.clubs.map(club => {
      return(
        <Table key={club.id} club={club}/>
      )
    })

    return(
      <div>
        {clubComponent}
      </div>

    )
  }
}

export default TableContainer;
