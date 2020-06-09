module.exports = function(app) {
    let user = require('../controller/useController')

    app.route('/user').get(user.get)

    app.route('/user').post(user.post)

    app.route('/user').delete(user.delete)
}