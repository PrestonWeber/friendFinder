module.exports = function(app) {
    app.get('/friends', function(req, res) {
        res.render('friends', {
            title: 'friends'

        });
    });
}