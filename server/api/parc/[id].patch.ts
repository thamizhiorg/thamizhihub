export default eventHandler(async (event) => {
  const { title, createdtime, collid, databaseid, siteid, user, status } = await readBody(event);
  const id = getRouterParam(event, 'id');
  const db = hubDatabase();

  const result = await db
    .prepare(`
      UPDATE parc SET
        title = ?,
        createdtime = ?,
        collid = ?,
        databaseid = ?,
        siteid = ?,
        user = ?,
        status = ?
      WHERE id = ?
    `)
    .bind(
      title,
      createdtime,
      collid,
      databaseid,
      siteid,
      user,
      status,
      id
    )
    .run();

  if (result.changes === 0) {
    return { error: 'Record not found' };
  }

  return { message: 'Record updated successfully' };
});
