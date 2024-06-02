export default eventHandler(async (event) => {
  const user = getRouterParam(event, 'user');
  console.log("User from request:", user); 

  const db = hubDatabase();

  const message = await db.prepare('SELECT * FROM parc WHERE user = ?').bind(user).first();

  if (message) {
      return message; 
  } else {
      return { 
          statusCode: 404, 
          body: JSON.stringify({ error: "No data found for this user" }) 
      };
  }
});
