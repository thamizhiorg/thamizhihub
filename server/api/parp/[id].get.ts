  export default eventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const db = hubDatabase();
  
    const result = await db.prepare('SELECT * FROM parp WHERE id = ?', ).bind(id).all(); 
  
    // Extract only the row data
    const rowData = result.results; 
  
    return rowData;
  });