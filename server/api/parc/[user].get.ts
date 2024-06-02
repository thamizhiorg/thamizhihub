export default eventHandler(async (event) => {
    const id = getRouterParam(event, 'user')
    const db = hubDatabase()
  
    const message = await db.prepare('SELECT * FROM parc WHERE user = ?', ).bind(user).first()

    return message
  })