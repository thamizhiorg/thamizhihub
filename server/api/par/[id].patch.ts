export default eventHandler(async (event) => {
  const body = await readBody(event);
  const id = getRouterParam(event, 'id');
  const db = hubDatabase();

  const updateFields = Object.entries(body)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => `${key} = ?`)
    .join(', ');

  const bindParams = Object.values(body).filter(value => value !== undefined);
  bindParams.push(id);

  const result = await db
    .prepare(
      `
      UPDATE par SET
        ${updateFields}
      WHERE id = ?
    `
    )
    .run(...bindParams);

  if (result.changes === 0) {
    return { error: 'Record not found' };
  }

  return { message: 'Record updated successfully' };
});