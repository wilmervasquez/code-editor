import sqlite from 'sqlite3';

sqlite.verbose()

const db = new sqlite.Database('db/db.sqlite', function(err) {
  if (err) {
    console.log('error al conectarse al db')
    return
  }
  console.log('SE CONECTO EXITOSAMENTE')
});

const DB = {
  async all(query: string) {
    return new Promise((resolve, reject) => {
      db.all(query, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  },
  async run(query: string, params: (string | number)[]) {
    return new Promise((resolve, reject) => {
      db.run(query, params, (err) => {
        if (err) reject(err);
        else resolve(null);
      });
    });
  },
}

export { db, DB }