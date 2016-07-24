var opsCtrl = require('./../controllers/opsCtrl');

module.exports = function(app) {
    app.get('/api/ops', opsCtrl.list);
    app.post('/api/ops/:opName', opsCtrl.create);

};