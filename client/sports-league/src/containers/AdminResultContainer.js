import React from 'react';
import ApiDataRequest from '../helpers/ApiDataRequest';
import AdminResult from '../components/AdminResult.js';

class AdminResultContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    const request = new ApiDataRequest();

    request.getResults()
    .then(data => this.setState({
      results: data
    }))
  }

  render() {

    const adminResultComponent = this.state.results.map((results, index) => {
      return(
        <AdminResult key={index} results={results}/>
      )
    })
    return(
      <div>
        {adminResultComponent}
      </div>
    )
  }
}

export default AdminResultContainer;
