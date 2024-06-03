export default eventHandler(async (event) => {
  const { id,title, currentdb, siteid, email, posts } = await readBody(event);
  const db = hubDatabase();

  await db
    .prepare('INSERT INTO parf (id, title, currentdb, siteid, email, posts) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(id, title, currentdb, siteid, email, posts)
    .run();

  return {};
});