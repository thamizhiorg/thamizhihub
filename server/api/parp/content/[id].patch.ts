export default eventHandler(async (event) => {
  const { content, synctime, views } = await readBody(event);
  const id = getRouterParam(event, 'id');
  const db = hubDatabase();

  const result = await db
    .prepare(`
      UPDATE parp SET
        content = ?,
        synctime = ?,
        views = ?
      WHERE id = ?
    `)
    .bind(
      content,
      synctime,
      views,
      id
    )
    .run();

  if (result.changes === 0) {
    return { error: 'Record not found' };
  }

  return { message: 'Record updated successfully' };
});