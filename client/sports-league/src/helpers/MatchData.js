import Request from './Request.js'

class MatchData {

  fetchData() {
    const request = new Request();
    return request.get("/matches")
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

      const arrangeFixtures = this.formatFixtures(fixturesWithNoResult)

      const fixturesArray = Object.keys(arrangeFixtures).map(date => {
        return {
          date,
          matches: arrangeFixtures[date]
        }
      })

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
      const arrangeFixtures = this.formatFixtures(fixturesWithResult);

      const fixturesArray = Object.keys(arrangeFixtures).map(date => {
        return {
          date,
          matches: arrangeFixtures[date]
        }
      })

      return fixturesArray.sort(function(a, b) {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
      })

    })
  }

}


export default MatchData;
