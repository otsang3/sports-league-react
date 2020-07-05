import Request from './Request.js'

class MatchData {

  fetchData() {
    const request = new Request();
    return request.get("/matches")
  }

  getFixtures() {

    return this.fetchData()
    .then(data =>  {
      const fixturesWithNoResult = data.filter(data => data.result === null)

      const arrangeFixtures = fixturesWithNoResult.reduce((dayFixtures, fixture) => {
        const fixtureDate = fixture.date.split('T')[0];

        if(!dayFixtures[fixtureDate]) {
          dayFixtures[fixtureDate] = []
        }
        dayFixtures[fixtureDate].push(fixture);
        return dayFixtures
      }, {});

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
    // .then(data => {
    //
    //   const groups = data.reduce((groups, match) => {
    //     const date = match.date.split('T')[0];
    //       if (!groups[date]) {
    //         groups[date] = [];
    //       }
    //         groups[date].push(match);
    //         return groups
    //       }, {});
    //
    //     const groupArrays = Object.keys(groups).map((date) => {
    //       return {
    //         date,
    //         matches: groups[date]
    //       }
    //     })
    //
    //     return matchData =
    //     {
    //       matchData: groupArrays.sort(function(a, b) {
    //         if (a.date > b.date) return 1;
    //         if (a.date < b.date) return -1;
    //         return 0
    //       })
    //   }
    // })
    //
    // return {
    //   matchData
    // }
  }


export default MatchData;
