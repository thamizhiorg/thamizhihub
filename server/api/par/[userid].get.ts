export default eventHandler(async (event) => {
    const userid = getRouterParam(event, 'userid')
    const db = hubDatabase()
  
    const message = await db.prepare('SELECT * FROM par WHERE userid = ?', ).bind(userid).first()

    return message
  })