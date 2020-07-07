import Request from './Request.js'

class ApiDataRequest {

  objToArray(obj) {
    return Object.keys(obj).map(date => {
      return {
        date,
        matches: obj[date]
      }
    })
  }

  fetchClubData() {
    const request = new Request();
    return request.get("/clubs")
  }

  fetchData() {
    const request = new Request();
    return request.get("/matches")
  }

  formatClubs(data) {
    const arrangeClubs = data.sort(function(a, b) {

      if (a.points === b.points) {
        if (a.goalDifference > b.goalDifference) {
          return -1
        } else if (a.goalDifference < b.goalDifference) {
          return 1
        } else {
          return 0
        }
      } else if (a.points > b.points) {
        return -1
      } else if (a.points < b.points) {
        return 1
      } else {
        return 0
      }
    })
    return arrangeClubs
  }

  formatClubsByAlphabet(data) {
    const arrangeClubs = data.sort(function(a, b) {
      if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return 1;
      } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1;
      } else {
        return 0;
      }
    })
    return arrangeClubs
  }

  formatFixtures(data) {
    const arrangeFixtures = data.reduce((dayFixtures, fixture) => {
      const fixtureDate = fixture.date.split('T')[0];

      if(!dayFixtures[fixtureDate]) {
        dayFixtures[fixtureDate] = []
      }
      dayFixtures[fixtureDate].push(fixture);
      return dayFixtures
    }, {})

    return arrangeFixtures
  }

  getFixtures() {

    return this.fetchData()
    .then(data =>  {
      const fixturesWithNoResult = data.filter(data => data.result === null)
      this.sortByTime(fixturesWithNoResult)
      const arrangeFixtures = this.formatFixtures(fixturesWithNoResult)
      const fixturesArray = this.objToArray(arrangeFixtures)

      return fixturesArray.sort(function(a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
      })

    })
  }

  getResults() {

    return this.fetchData()
    .then(data => {
      const fixturesWithResult = data.filter(data => data.result !== null);
      this.sortByTime(fixturesWithResult)
      const arrangeFixtures = this.formatFixtures(fixturesWithResult);
      const fixturesArray = this.objToArray(arrangeFixtures)

      return fixturesArray.sort(function(a, b) {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
      })

    })
  }

  sortByTime(fixturesArray) {
    fixturesArray.sort(function(a, b) {
      const firstTime = a.date.split('T')[1].split(':').join('')
      const secondTime = b.date.split('T')[1].split(':').join('')
      if (firstTime > secondTime) {
        return 1;
      } else if (firstTime < secondTime) {
        return -1;
      } else {
        return 0
      }
    })
  }

}


export default ApiDataRequest;
