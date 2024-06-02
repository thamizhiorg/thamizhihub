export default eventHandler(async (event) => {
  const { title, collection, page_id, content, date, tags, author, status, synctime, views = 0 } = await readBody(event)
  const db = hubDatabase()

  await db
    .prepare('INSERT INTO parp (title, collection, page_id, content, date, tags, author, status, synctime, views) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10)')
    .bind(title, collection, page_id, content, date, tags, author, status, synctime, views)
    .run()

  return {}
})