const Query  ={
  createTable(name: string) {
    return `CREATE TABLE ${name} (
      "microd" TEXT
    )`
  },
  viewTables: () => "SELECT name FROM sqlite_master WHERE type='table';"
}

export { Query }