export default eventHandler(async (event) => {
  const { category, title, links, date, thumbnail, type, video, audio, doc, email, profile, cardtitle, post, notes, url } = await readBody(event)
  const db = hubDatabase()

await db
    .prepare('INSERT INTO contents (category, title, links, date, thumbnail, type, video, audio, doc, email, profile, cardtitle, post, notes, url) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15)')
    .bind(category, title, links, date, thumbnail, type, video, audio, doc, email, profile, cardtitle, post, notes, url)
    .run()


  return {}
})