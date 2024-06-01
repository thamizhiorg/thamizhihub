export default eventHandler(async (event) => {
  const { title, createdtime, collid, databaseid, siteid, user, status } = await readBody(event)
  const db = hubDatabase()

  await db
    .prepare('INSERT INTO parc (title, createdtime, collid, databaseid, siteid, user, status) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)')
    .bind(title, createdtime, collid, databaseid, siteid, user, status)
    .run()

  return {}
})