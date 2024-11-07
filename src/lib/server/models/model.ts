import { DB, db } from "../db/db";

type Query = {

}

class Models {
  tableName: string;
  query: Query;
  constructor(table: string) {
    this.tableName = table
    this.query = {

    }
  }
  run() {

  }
  find(id: string) {
    return DB.all(`SELECT * FROM snippets WHERE id = ${id};`)
  }
  all() {
    return DB.all(`SELECT * FROM snippets;`)
  }
  insert(o: Record<string, string | number>) {
    // const query = `INSERT INTO ${this.tableName} (${Object.keys(o).join(',')}) VALUES (${Object.values(o).map(m=>{
    //   if (typeof m == 'number') {
    //     return m
    //   }
    //   return `'${m}'`
    // }).join(',')})`
    const keys = Object.keys(o)
    const values = Object.values(o)

    const query = `INSERT INTO ${this.tableName} (${keys.join(',')}) VALUES (${values.map(()=> '?').join(',')});`
    console.log(query)
    return DB.run(query,[...values])
  }
  delete(id: number) {
    return DB.run(`DELETE FROM ${this.tableName} WHERE id = ${id}`,[])
  }
}



export { Models }