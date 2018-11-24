const db = require('../connection');

module.exports.getPlayers = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM players", function(err, result, fields) {
            if (err) {
                reject(err);
            }
            resolve(result);
          });
    });
}