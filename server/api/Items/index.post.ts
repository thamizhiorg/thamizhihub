export default eventHandler(async (event) => {
  const {
    reorder,
    stock,
    weight,
    lastupdate,
    lastsync,
    storeid,
    cprice,
    upc,
    isbn,
    sprice,
    ean,
    color,
    material,
    manufacturer,
    brand,
    mpn,
    imglist,
    name,
    category,
    type,
    sku,
    unit,
    location,
    menu,
    primaryimg,
    desc,
    grp,
    dimen,
  } = await readBody(event);
  const db = hubDatabase();

  await db
    .prepare(`
      INSERT INTO Items (
        reorder,
        stock,
        weight,
        lastupdate,
        lastsync,
        storeid,
        cprice,
        upc,
        isbn,
        sprice,
        ean,
        color,
        material,
        manufacturer,
        brand,
        mpn,
        imglist,
        name,
        category,
        type,
        sku,
        unit,
        location,
        menu,
        primaryimg,
        desc,
        grp,
        dimen
      ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?, ?, ?
      )
    `)
    .bind(
      reorder,
      stock,
      weight,
      lastupdate,
      lastsync,
      storeid,
      cprice,
      upc,
      isbn,
      sprice,
      ean,
      color,
      material,
      manufacturer,
      brand,
      mpn,
      imglist,
      name,
      category,
      type,
      sku,
      unit,
      location,
      menu,
      primaryimg,
      desc,
      grp,
      dimen
    )
    .run();

  return {};
});