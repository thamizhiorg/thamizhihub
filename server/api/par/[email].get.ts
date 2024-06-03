export default eventHandler(async (event) => {
  const email = getRouterParam(event, 'email');
  const db = hubDatabase();

  const result = await db.prepare('SELECT * FROM par WHERE email = ?', ).bind(email).all(); 

  // Extract only the row data
  const rowData = result.results; 

  return rowData;
});