module.exports = function(app){
    var controller = require('../controllers/mainController');

    app.route('/')
        .get(controller.testGet);
}