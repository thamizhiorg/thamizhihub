export default eventHandler(async () => {
  const db = hubDatabase();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS Items (
      id INTEGER PRIMARY KEY,
      reorder INTEGER,
      stock INTEGER,
      weight INTEGER,
      lastupdate TEXT,
      lastsync TEXT,
      storeid INTEGER,
      cprice INTEGER,
      upc INTEGER,
      isbn INTEGER,
      sprice INTEGER,
      ean INTEGER,
      color TEXT,
      material TEXT,
      manufacturer TEXT,
      brand TEXT,
      mpn TEXT,
      imglist TEXT,
      name TEXT,
      category TEXT,
      type TEXT,
      sku TEXT,
      unit TEXT,
      location TEXT,
      menu TEXT,
      primaryimg TEXT,
      desc TEXT,
      grp TEXT,
      dimen TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const { results } = await db.prepare('SELECT * FROM Items ORDER BY created_at DESC').all();

  return results;
});
