
export default eventHandler(async (event) => {
  const { category, title, links, date, thumbnail, type, video, audio, doc, email, profile, cardtitle, post, notes, url } = await readBody(event);
  const id = getRouterParam(event, 'id'); // Extract the id from the request URL
  const db = hubDatabase();

  const result = await db
    
.prepare('UPDATE contents SET category = ?1, title = ?2, links = ?3, date = ?4, thumbnail = ?5, type = ?6, video = ?7, audio = ?8, doc = ?9, email = ?10, profile = ?11, cardtitle = ?12, post = ?13, notes = ?14, url = ?15 WHERE id = ?16')
    .bind(category, title, links, date, thumbnail, type, video, audio, doc, email, profile, cardtitle, post, notes, url, id)
    .run();


  if (result.changes === 0) {
    return { error: 'sendNoContent(event, 204)' };
  }

  return { message: 'Message updated successfully' };
});
