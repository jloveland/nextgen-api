const data = require("../inc/fixtures.json");

module.exports = {
  greetingMessage(req, res) {
    res.status(200).json({
      hi: 'Welcome to Next gen Sports Api'
    })
  },
  getAllFixtures(req, res) {
    res.status(200).json({
      data
    });
  },
  getSingleFixture(req, res) {
    const fixturesarr = data.fixtures;
    const {fid} = req.params;

    //Find through the array of fixture objects
    const fixture = fixturesarr.find((fixture) => {
      return fixture.id == parseInt(fid);
    });

    if (fixture) {
      res.status(200).json({
        fixture
      });
    } else {
      res.status(500).json({
        error: 'Sorry! No fixtures found'
      });
    }
  }
}
