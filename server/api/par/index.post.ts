export default eventHandler(async (event) => {
  const { type, plan, user, url, size, lastsync, secrets, pageid, title, views, analytics } = await readBody(event);
  const db = hubDatabase();

  await db
    .prepare('INSERT INTO par (type, plan, user, url, size, lastsync, secrets, pageid, title, views, analytics) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(type, plan, user, url, size, lastsync, secrets, pageid, title, views, analytics)
    .run();

  return {};
});