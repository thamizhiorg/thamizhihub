export default eventHandler(async () => {
  const db = hubDatabase()

  const { results } = await db.prepare('SELECT * FROM par ORDER BY createdat DESC').all()

  return results
})
