export default eventHandler(async (event) => {
    const collection = getRouterParam(event, 'collection')
    const db = hubDatabase()
  
    const message = await db.prepare('SELECT * FROM parp WHERE collection = ?', ).bind(collection).all()

    return message
  })