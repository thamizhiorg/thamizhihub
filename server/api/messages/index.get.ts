export default eventHandler(async () => {
  const db = hubDatabase()

await db.exec('CREATE TABLE IF NOT EXISTS Items (id INTEGER PRIMARY KEY, email TEXT, username TEXT, name TEXT, description TEXT, status TEXT, about TEXT, skills TEXT, works TEXT, social TEXT, store TEXT, video TEXT, doc TEXT, image TEXT, phone TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)')

  const { results } = await db.prepare('SELECT * FROM Items ORDER BY created_at DESC').all()

  return results
})
