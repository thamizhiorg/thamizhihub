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
    created_at
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
        dimen,
        created_at
      ) VALUES (
        ?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10,
        ?11, ?12, ?13, ?14, ?15, ?16, ?17, ?18, ?19, ?20,
        ?21, ?22, ?23, ?24, ?25, ?26, ?27, ?28, ?29, ?30
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
      dimen,
      created_at
    )
    .run();

  return {};
});
