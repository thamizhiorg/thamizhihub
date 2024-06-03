export default eventHandler(async (event) => {
  const {
    type,
    plan,
    email,
    url,
    size,
    lastsync,
    secrets,
    siteid,
    title,
    views,
    analytics,
    thumbnail,
  } = await readBody(event);
  const id = getRouterParam(event, 'id');
  const db = hubDatabase();

  const result = await db
    .prepare(`
      UPDATE par SET
        type = ?,
        plan = ?,
        email = ?,
        url = ?,
        size = ?,
        lastsync = ?,
        secrets = ?,
        siteid = ?,
        title = ?,
        views = ?,
        analytics = ?,
        thumbnail = ?
      WHERE id = ?
    `)
    .bind(
      type,
      plan,
      email,
      url,
      size,
      lastsync,
      secrets,
      siteid,
      title,
      views,
      analytics,
      thumbnail,
      id
    )
    .run();

  if (result.changes === 0) {
    return { error: 'Record not found' };
  }

  return { message: 'Record updated successfully' };
});