export default eventHandler(async (event) => {
  const { type, plan, user, url, size, lastsync, secrets, pageid, title, views, analytics } = await readBody(event);
  const id = getRouterParam(event, 'id');
  const db = hubDatabase();

  const result = await db
    .prepare('UPDATE par SET type = ?, plan = ?, user = ?, url = ?, size = ?, lastsync = ?, secrets = ?, pageid = ?, title = ?, views = ?, analytics = ? WHERE id = ?')
    .bind(type, plan, user, url, size, lastsync, secrets, pageid, title, views, analytics, id)
    .run();

  if (result.changes === 0) {
    return { error: 'Entry not found' };
  }

  return { message: 'Entry updated successfully' };
});