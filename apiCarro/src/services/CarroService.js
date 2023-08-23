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
    const query = 'SELECT * FROM carros WHERE codigo = ?';
    return new Promise((resolve, reject) => {
      db.query(query, [codigo], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        if (results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(false);
        }
      });
    });
  },

  inserir: (modelo, placa) => {
    const query = 'INSERT INTO carros (modelo, placa) VALUES (?, ?)';
    return new Promise((resolve, reject) => {
      db.query(query, [modelo, placa], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results.insertId);
      });
    });
  },

  alterar: (codigo, modelo, placa) => {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?',
        [modelo, placa, codigo],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(results);
        }
      );
    });
  },

  deletar: (codigo) => {
    const query = 'DELETE FROM carros WHERE codigo = ?';
    return new Promise((resolve, reject) => {
      db.query(query, [codigo], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  },
};
