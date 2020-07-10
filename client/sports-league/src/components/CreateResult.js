import React from 'react';

class CreateResult extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      homeScore: null,
      awayScore: null
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const payload = {

    }
  }

  render() {
    return(
      <form onSubmit={() => this.handleSubmit}>
        <label>Home Score: </label>
        <input
        required
        name="homeScore"
        type="number"
        value={this.state.homeScore}
        onChange={() => this.handleChange}/>
        <label>Away Score: </label>
        <input
        required
        name="awayScore"
        type="number"
        value={this.state.awayScore}
        onChange={() => this.handleChange}/>
        <input type="submit" value="Submit result"/>
      </form>
    )
  }
}

export default CreateResult;
