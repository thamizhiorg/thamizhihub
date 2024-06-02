export default eventHandler(async (event) => {
  const { title, collection, page_id, content, date, tags, author, status, synctime, views } = await readBody(event);
  const id = getRouterParam(event, 'id');
  const db = hubDatabase();

  const result = await db
    .prepare(`
      UPDATE parp SET
        title = ?,
        collection = ?,
        page_id = ?,
        content = ?,
        date = ?,
        tags = ?,
        author = ?,
        status = ?,
        synctime = ?,
        views = ?
      WHERE id = ?
    `)
    .bind(
      title,
      collection,
      page_id,
      content,
      date,
      tags,
      author,
      status,
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