export default eventHandler(async (event) => {
  const email = getRouterParam(event, 'email')
  const db = hubDatabase()

  const message = await db.prepare('SELECT * FROM par WHERE email = ?', ).bind(email).all()

  return message
})