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

  buscarUm: (codigo) => {
    return new Promise((resolve, reject) => {
      db.query(
        'SELECT * FROM carros WHERE codigo = ?',
        [codigo],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          if (results.length > 0) {
            resolve(results[0]);
          } else {
            resolve(false);
          }
        }
      );
    });
  },
};
