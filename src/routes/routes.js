const FixturesController = require('../controller/fixtures');

module.exports = (app) => {
    app.get(['/','/api'], FixturesController.greetingMessage);
    app.get('/api/fixtures', FixturesController.getAllFixtures);
    app.get('/api/fixtures/:fid', FixturesController.getSingleFixture);
}
