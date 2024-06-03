export default eventHandler(async (event) => {
    const email = getRouterParam(event, 'email')
    const db = hubDatabase()
  
    const message = await db.prepare('SELECT * FROM parf WHERE email = ?', ).bind(email).first()

    return message
  })