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
  const id = getRouterParam(event, 'id');
  const db = hubDatabase();

  const result = await db
    .prepare(`
      UPDATE Items SET
        reorder = ?,
        stock = ?,
        weight = ?,
        lastupdate = ?,
        lastsync = ?,
        storeid = ?,
        cprice = ?,
        upc = ?,
        isbn = ?,
        sprice = ?,
        ean = ?,
        color = ?,
        material = ?,
        manufacturer = ?,
        brand = ?,
        mpn = ?,
        imglist = ?,
        name = ?,
        category = ?,
        type = ?,
        sku = ?,
        unit = ?,
        location = ?,
        menu = ?,
        primaryimg = ?,
        desc = ?,
        grp = ?,
        dimen = ?
      WHERE id = ?
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
      dimen,
      id
    )
    .run();

  if (result.changes === 0) {
    return { error: 'Item not found' };
  }

  return { message: 'Item updated successfully' };
});