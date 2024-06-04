  export default eventHandler(async (event) => {
    const collection = getRouterParam(event, 'collection');
    const db = hubDatabase();
  
    const result = await db.prepare('SELECT * FROM parp WHERE collection = ?', ).bind(collection).all(); 
  
    // Extract only the row data
    const rowData = result.results; 
  
    return rowData;
  });