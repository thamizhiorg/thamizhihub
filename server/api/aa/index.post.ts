export default eventHandler(async (event) => {
  const { email, username, name, description, status, about, skills, works, social, store, video, doc, image, phone } = await readBody(event)
  const db = hubDatabase()

await db
    .prepare('INSERT INTO aa (email, username, name, description, status, about, skills, works, social, store, video, doc, image, phone) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14)')
    .bind(email, username, name, description, status, about, skills, works, social, store, video, doc, image, phone)
    .run()


  return {}
})