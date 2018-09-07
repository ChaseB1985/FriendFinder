// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
console.log('html rout connected');
var path = require('path');

module.exports = function(app) {

    // GET route for /survey returns survey.html.
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    // USE route returns home.html for any undefined GET routes.
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

};