module.exports = function(app){
    var controller = require('../controllers/mainController');

    app.route('/test')
        .get(controller.testGet);
}