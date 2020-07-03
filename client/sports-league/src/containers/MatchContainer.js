import React from 'react';
import Request from '../helpers/Request.js'

class MatchContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      matchData: []
    }
  }

  componentDidMount() {
    const request = new Request;

    request.get("/matches")
    .then(data => {
      this.setState({
        matchData: data
      })
    })
  }

  render() {
    return(
      <p>This is the Matches page</p>
    )
  }
}

export default MatchContainer;
