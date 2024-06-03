export default eventHandler(async () => {
  const db = hubDatabase()

  const { results } = await db.prepare('SELECT * FROM parf').all()

  return results
})
