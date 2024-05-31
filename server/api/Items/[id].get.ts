export default eventHandler(async (event) => {
    const email = getRouterParam(event, 'id')
    const db = hubDatabase()
  
    const message = await db.prepare('SELECT * FROM aa WHERE id = ?', ).bind(id).first()

    return message
  })