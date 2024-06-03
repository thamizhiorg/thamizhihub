export default eventHandler(async (event) => {
  const { type, plan, email, url, size, lastsync, secrets, siteid, title, views, analytics, thumbnail } = await readBody(event)
  const db = hubDatabase()

  await db
    .prepare('INSERT INTO par (type, plan, email, url, size, lastsync, secrets, siteid, title, views, analytics, thumbnail) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12)')
    .bind(type, plan, email, url, size, lastsync, secrets, siteid, title, views, analytics, thumbnail)
    .run()

  return {}
})