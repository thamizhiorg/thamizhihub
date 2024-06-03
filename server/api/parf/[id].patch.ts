export default eventHandler(async (event) => {
  const { title, currentdb, siteid, email, posts } = await readBody(event);
  const id = getRouterParam(event, 'id');
  const db = hubDatabase();

  const result = await db
    .prepare(`
      UPDATE parf SET
        title = ?,
        currentdb = ?,
        siteid = ?,
        email = ?,
        posts = ?
      WHERE id = ?
    `)
    .bind(
      title,
      currentdb,
      siteid,
      email,
      posts,
      id
    )
    .run();

  if (result.changes === 0) {
    return { error: 'Record not found' };
  }

  return { message: 'Record updated successfully' };
});