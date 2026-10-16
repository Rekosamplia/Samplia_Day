/*
 * Un descuento por día: 15 oct 2026 → 14 nov 2026 (31 días).
 * Cada descuento está asignado a un día dentro de su periodo de vigencia publicado.
 *
 * Campos:
 *  date      Día en que se activa en la app (YYYY-MM-DD)
 *  channel   "tienda" = oferta drive-to-store: se canjea enseñando un QR en tienda física (si falta, es online)
 *  store     Dónde se canjea (solo ofertas en tienda)
 *  brand     Marca
 *  big       Cifra protagonista (lo que se ve gigante)
 *  tag       Línea corta bajo la marca (máx. ~30 caracteres)
 *  terms     Condiciones resumidas (se muestran al pulsar "i")
 *  code      Código a copiar, o null si se aplica sin código / se revela en la web
 *  url       Web oficial de la marca donde se canjea
 *  validUntil Fin de vigencia publicado
 *  source    Fuente donde se verificó la oferta (comprobado el 15/10/2026)
 *  color / ink  Color de fondo e ink del texto
 */
window.DEALS = [
  { date: "2026-10-15", brand: "Xiaomi", big: "-180€", tag: "Móviles y gadgets", terms: "Hasta 180 € de descuento en productos seleccionados de la tienda oficial.", code: null, url: "https://www.mi.com/es/", validUntil: "2026-10-16", source: "https://soydechollos.com/codigos-descuento/xiaomi", color: "#FF6900", ink: "#FFFFFF" },
  { date: "2026-10-16", brand: "Primor", big: "-15%", tag: "Extra en cosmética y maquillaje", terms: "15 % extra en cosmética y maquillaje. Solo productos de esas categorías.", code: null, url: "https://www.primor.eu/es_es/", validUntil: "2026-10-16", source: "https://www.cuponation.es/cupon-descuento-primor", color: "#E6007E", ink: "#FFFFFF" },
  { date: "2026-10-17", brand: "Levi's", big: "-50%", tag: "Vaqueros y accesorios", terms: "Hasta 50 % en prendas y accesorios seleccionados.", code: null, url: "https://www.levi.com/ES/es_ES/", validUntil: "2026-10-18", source: "https://www.discoup.com/es/mejores-codigos.html", color: "#C41230", ink: "#FFFFFF" },
  { date: "2026-10-18", brand: "Huawei", big: "-70€", tag: "Watch GT7 Pro + regalo", terms: "70 € de descuento en el Huawei Watch GT7 Pro, con regalo. En la tienda oficial.", code: null, url: "https://consumer.huawei.com/es/", validUntil: "2026-10-19", source: "https://www.cuponation.es/descuento-huawei", color: "#111111", ink: "#FFFFFF" },
  { date: "2026-10-19", brand: "SHEIN", big: "-20%", tag: "En toda la web", terms: "20 % de descuento con cupón. El código se muestra en la fuente / app de SHEIN.", code: null, url: "https://es.shein.com/", validUntil: "2026-10-19", source: "https://www.cuponation.es/cupon-shein", color: "#000000", ink: "#FFFFFF" },
  { date: "2026-10-20", channel: "tienda", brand: "Fiesta del Cine", big: "4 días", tag: "Entradas rebajadas · 19–22 oct", terms: "Fiesta del Cine del lunes 19 al jueves 22 de octubre en los cines adheridos (convenio publicado en el BOE el 4 de agosto de 2026). El precio de la entrada lo confirma cada cine; no acumulable con otros descuentos; 3D, VIP o IMAX pueden tener suplemento.", code: null, url: "https://www.fiestadelcine.com/", store: "Cines adheridos", validUntil: "2026-10-22", source: "https://diariodeavisos.elespanol.com/2026/08/fechas-fiesta-del-cine-2026-octubre/", color: "#8C0F1C", ink: "#FFFFFF" },
  { date: "2026-10-21", brand: "Eneba", big: "-13%", tag: "Juegos y tarjetas regalo", terms: "13 % extra en claves de juegos, tarjetas regalo y suscripciones.", code: null, url: "https://www.eneba.com/es/", validUntil: "2026-10-21", source: "https://www.cuponation.es/", color: "#1E0B4B", ink: "#FFD600" },
  { date: "2026-10-22", brand: "Yves Rocher", big: "-50%", tag: "Nuevos clientes", terms: "50 % en tu primera compra como cliente nuevo.", code: null, url: "https://www.yves-rocher.es/", validUntil: "2026-10-22", source: "https://www.cuponation.es/", color: "#00573F", ink: "#FFFFFF" },
  { date: "2026-10-23", channel: "tienda", brand: "Diesel", big: "-30%", tag: "House of Diesel Week", store: "Tiendas Diesel", terms: "30 % durante la House of Diesel Week. Requiere iniciar sesión o registrarse. Online y en tienda.", code: null, url: "https://es.diesel.com/", validUntil: "2026-10-25", source: "https://www.discoup.com/es/mejores-codigos.html", color: "#D2001F", ink: "#FFFFFF" },
  { date: "2026-10-24", brand: "Desigual", big: "-12€", tag: "Nueva colección", terms: "12 € de descuento en compras desde 95 € en nueva colección. No acumulable.", code: null, url: "https://www.desigual.com/es_ES/", validUntil: "2026-10-26", source: "https://www.discoup.com/es/mejores-codigos.html", color: "#F2C200", ink: "#111111" },
  { date: "2026-10-25", brand: "Panasonic", big: "-45%", tag: "Tecnología y hogar", terms: "Hasta 45 % en productos seleccionados de la tienda oficial.", code: null, url: "https://www.panasonic.com/es/", validUntil: "2026-10-29", source: "https://www.discoup.com/es/mejores-codigos.html", color: "#0041C0", ink: "#FFFFFF" },
  { date: "2026-10-26", brand: "Voghion", big: "-7€", tag: "Moda y hogar", terms: "7 € de descuento en compras desde 60 €. Acumulable.", code: null, url: "https://www.voghion.com/", validUntil: "2026-10-26", source: "https://www.discoup.com/es/mejores-codigos.html", color: "#FF4D4F", ink: "#FFFFFF" },
  { date: "2026-10-27", brand: "Temu", big: "-30%", tag: "Extra en tu primera compra", terms: "30 % extra en el primer pedido.", code: null, url: "https://www.temu.com/es", validUntil: "2026-10-27", source: "https://www.cuponation.es/cupon-temu", color: "#FB7701", ink: "#FFFFFF" },
  { date: "2026-10-28", brand: "InterMundial", big: "-10%", tag: "Seguros de viaje", terms: "10 % en seguros de viaje con código exclusivo.", code: null, url: "https://www.intermundial.es/", validUntil: "2026-10-28", source: "https://www.cuponation.es/", color: "#E30613", ink: "#FFFFFF" },
  { date: "2026-10-29", brand: "LG", big: "-10%", tag: "Electrónica y electrodomésticos", terms: "10 % de descuento. No acumulable con otros cupones.", code: null, url: "https://www.lg.com/es/", validUntil: "2026-10-29", source: "https://www.discoup.com/es/mejores-codigos.html", color: "#A50034", ink: "#FFFFFF" },
  { date: "2026-10-30", brand: "Samsung", big: "-250€", tag: "Galaxy Z Fold8", terms: "250 € de reembolso al comprar un Galaxy Z Fold8.", code: null, url: "https://www.samsung.com/es/", validUntil: "2026-10-30", source: "https://www.cuponation.es/descuento-samsung", color: "#1428A0", ink: "#FFFFFF" },
  { date: "2026-10-31", brand: "alfombra.es", big: "-50%", tag: "Alfombras para el otoño", terms: "Hasta 50 % en alfombras seleccionadas.", code: null, url: "https://www.alfombra.es/", validUntil: "2026-10-31", source: "https://soydechollos.com/codigos-descuento/alfombra-es", color: "#2B2B2B", ink: "#FF8A00" },
  { date: "2026-11-01", brand: "Uber", big: "-10€", tag: "En tus viajes", terms: "10 € de descuento con código exclusivo.", code: null, url: "https://www.uber.com/es/es/", validUntil: "2026-11-02", source: "https://www.cuponation.es/", color: "#000000", ink: "#FFFFFF" },
  { date: "2026-11-02", brand: "HP Store", big: "-600€", tag: "Portátiles y PCs", terms: "600 € de descuento en la HP Store con el código OCT600. Sujeto a disponibilidad.", code: "OCT600", url: "https://www.hp.com/es-es/shop/", validUntil: "2026-11-02", source: "https://soydechollos.com/codigos-descuento/hp-store", color: "#0096D6", ink: "#FFFFFF" },
  { date: "2026-11-03", channel: "tienda", brand: "Telepizza", big: "5,95€", tag: "Martes Locos · pizza mediana", terms: "Martes Locos: pizzas medianas (hasta 3 ingredientes, masa fina o clásica) a 5,95 € para recoger en tienda. No válido en vísperas ni festivos.", code: null, url: "https://www.telepizza.es/", store: "Tiendas Telepizza", validUntil: "2026-11-10", source: "https://www.discoup.com/es/ofertas-codigo-descuento-telepizza.html", color: "#D52B1E", ink: "#FFFFFF" },
  { date: "2026-11-04", brand: "zooplus", big: "-15%", tag: "Primera compra para tu mascota", terms: "15 % para nuevos clientes en compras desde 49 €. Antiparasitarios excluidos.", code: null, url: "https://www.zooplus.es/", validUntil: "2026-11-04", source: "https://www.discoup.com/es/mejores-codigos.html", color: "#3C9A2E", ink: "#FFFFFF" },
  { date: "2026-11-05", brand: "Iberostar", big: "-17%", tag: "Hoteles hasta mayo 2027", terms: "Hasta 17 % en reservas hasta el 14/11/2026 para estancias hasta el 31/05/2027. Mínimo 2 noches. No acumulable.", code: null, url: "https://www.iberostar.com/es/", validUntil: "2026-11-14", source: "https://www.discoup.com/es/mejores-codigos.html", color: "#003B5C", ink: "#E8C77E" },
  { date: "2026-11-06", brand: "Perfume's Club", big: "-20%", tag: "Perfumes y belleza", terms: "20 % de descuento en la web.", code: null, url: "https://www.perfumesclub.com/es/", validUntil: "2026-11-25", source: "https://www.cuponation.es/", color: "#111111", ink: "#F3D3C4" },
  { date: "2026-11-07", brand: "Myprotein", big: "-61%", tag: "Nutrición deportiva", terms: "Hasta 61 % en productos seleccionados.", code: null, url: "https://www.myprotein.es/", validUntil: "2026-12-31", source: "https://soydechollos.com/codigos-descuento/myprotein", color: "#00A0E1", ink: "#FFFFFF" },
  { date: "2026-11-08", channel: "tienda", brand: "El Corte Inglés", big: "10€", tag: "Súper Cheques: último día", store: "Supermercados El Corte Inglés", terms: "Canjea tus Súper Cheques: 10 € por cada compra de 50 € en alimentación, droguería y cuidado personal. No acumulables en un mismo ticket. Hasta el 8 de noviembre.", code: null, url: "https://www.elcorteingles.es/supermercado/", validUntil: "2026-11-08", source: "https://www.moncloa.com/2026/10/14/el-corte-ingles-supermercado-3447872", color: "#00843D", ink: "#FFFFFF" },
  { date: "2026-11-09", brand: "G-Star RAW", big: "-15%", tag: "Denim", terms: "15 % con código exclusivo.", code: null, url: "https://www.g-star.com/es_es", validUntil: "2027-01-04", source: "https://www.cuponation.es/codigo-promocional-g-star", color: "#1A1A1A", ink: "#FFFFFF" },
  { date: "2026-11-10", brand: "Singularu", big: "-10%", tag: "Extra en joyas", terms: "10 % extra con código exclusivo.", code: null, url: "https://www.singularu.com/", validUntil: "2027-01-04", source: "https://www.cuponation.es/codigo-descuento-singularu", color: "#E9D7C5", ink: "#2A1E14" },
  { date: "2026-11-11", brand: "AliExpress", big: "11.11", tag: "Singles Day", terms: "Campaña 11.11 de AliExpress: descuentos y cupones durante el Singles Day (11 nov). Comprueba los cupones del día en la app.", code: null, url: "https://es.aliexpress.com/", validUntil: "2026-11-11", source: "https://descuentocodigos.com/herramientas/calendario-rebajas-ofertas/", color: "#E62E04", ink: "#FFFFFF" },
  { date: "2026-11-12", brand: "NordVPN", big: "-36%", tag: "Plan de 3 meses", terms: "36 % en el plan de 3 meses.", code: null, url: "https://nordvpn.com/es/", validUntil: "2026-11-12", source: "https://www.cuponation.es/", color: "#4687FF", ink: "#FFFFFF" },
  { date: "2026-11-13", brand: "Ray-Ban", big: "-20%", tag: "Gafas", terms: "20 % en gafas. Algunos productos excluidos. No acumulable con otras promociones.", code: null, url: "https://www.ray-ban.com/spain", validUntil: "2026-11-15", source: "https://www.discoup.com/es/mejores-codigos.html", color: "#C8102E", ink: "#FFFFFF" },
  { date: "2026-11-14", brand: "Oakley", big: "-20%", tag: "Ropa y accesorios", terms: "20 % en ropa y accesorios. Excluye ediciones limitadas, colección NFL, rebajas y tarjetas regalo, entre otros.", code: null, url: "https://www.oakley.com/es-es", validUntil: "2026-11-15", source: "https://www.discoup.com/es/mejores-codigos.html", color: "#0B0B0B", ink: "#FFC72C" }
];

/*
 * Recursos visuales por marca.
 *  logo: assets/logos/  (logotipos oficiales: Wikimedia Commons o web de la marca)
 *  bg:   assets/bg/     (fotos CC0 de StockSnap.io, sin atribución obligatoria)
 *  dark: el logotipo es blanco y necesita placa oscura
 */
(() => {
  const A = {
    "Xiaomi": ["xiaomi", "svg"], "Primor": ["primor", "png"], "Levi's": ["levis", "svg"], "Huawei": ["huawei", "svg"],
    "SHEIN": ["shein", "svg"], "Wonderbox": ["wonderbox", "svg", true], "Eneba": ["eneba", "svg", true],
    "Yves Rocher": ["yvesrocher", "svg"], "Diesel": ["diesel", "png"], "Desigual": ["desigual", "svg"],
    "Panasonic": ["panasonic", "svg"], "Voghion": ["voghion", "png"], "Temu": ["temu", "svg"],
    "InterMundial": ["intermundial", "svg"], "LG": ["lg", "svg"], "Samsung": ["samsung", "png"],
    "alfombra.es": ["alfombra", "png"], "Uber": ["uber", "svg"], "HP Store": ["hp", "svg"], "Emma": ["emma", "svg"],
    "zooplus": ["zooplus", "png", true], "Iberostar": ["iberostar", "png"], "Perfume's Club": ["perfumesclub", "png"],
    "Myprotein": ["myprotein", "png"], "El Corte Inglés": ["elcorteingles", "svg"], "G-Star RAW": ["gstar", "svg"],
    "Singularu": ["singularu", "png"], "AliExpress": ["aliexpress", "svg"], "NordVPN": ["nordvpn", "png"],
    "Ray-Ban": ["rayban", "svg"], "Oakley": ["oakley", "svg"],
    "Fiesta del Cine": ["fiestadelcine", "svg"], "Telepizza": ["telepizza", "svg"]
  };
  window.DEALS.forEach(d => {
    const [key, ext, dark] = A[d.brand];
    d.logo = `assets/logos/${key}.${ext}`;
    d.logoDark = !!dark;
    d.bg = `assets/bg/${key}.jpg`;
  });
})();
