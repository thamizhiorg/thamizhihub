export default eventHandler(async () => {
  const db = hubDatabase()

await db.exec('CREATE TABLE IF NOT EXISTS contents (id INTEGER PRIMARY KEY, category TEXT, title TEXT, post TEXT, notes TEXT, url TEXT, links TEXT, date TEXT, thumbnail TEXT, type TEXT, video TEXT, audio TEXT, doc TEXT, email TEXT, profile TEXT, cardtitle TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)')

  const { results } = await db.prepare('SELECT * FROM contents ORDER BY created_at DESC').all()

  return results
})
