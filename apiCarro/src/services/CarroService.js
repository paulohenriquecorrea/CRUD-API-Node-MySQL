const db = require('../db');

module.exports = {
  buscarTodos: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM carros', (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  },
};
