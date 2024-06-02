export default eventHandler(async (event) => {
  const body = await readBody(event);
  const id = getRouterParam(event, 'id');
  const db = hubDatabase();

  const {
    title = null,
    createdtime = null,
    collid = null,
    databaseid = null,
    siteid = null,
    user = null,
    status = null,
  } = body;

  const updates = [];
  const values = [];

  if (title !== null) {
    updates.push('title = ?');
    values.push(title);
  }

  if (createdtime !== null) {
    updates.push('createdtime = ?');
    values.push(createdtime);
  }

  if (collid !== null) {
    updates.push('collid = ?');
    values.push(collid);
  }

  if (databaseid !== null) {
    updates.push('databaseid = ?');
    values.push(databaseid);
  }

  if (siteid !== null) {
    updates.push('siteid = ?');
    values.push(siteid);
  }

  if (user !== null) {
    updates.push('user = ?');
    values.push(user);
  }

  if (status !== null) {
    updates.push('status = ?');
    values.push(status);
  }

  values.push(id);

  const result = await db
    .prepare(`UPDATE parc SET ${updates.join(', ')} WHERE id = ?`)
    .run(values);

  if (result.changes === 0) {
    return { error: 'Record not found' };
  }

  return { message: 'Record updated successfully' };
});