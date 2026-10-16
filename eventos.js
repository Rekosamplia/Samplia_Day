/*
 * Calendario de días mundiales y momentos de marca: 16 oct → 15 nov 2026.
 * Un evento por día, elegido por su encaje con marcas (se evitan fechas sensibles).
 * Fuentes: calendarr.com (España, oct y nov 2026); cambio de hora: BOE / prensa (25 oct 2026).
 *
 *  date   YYYY-MM-DD      name   nombre del día      fit   sectores que encajan
 *  motif  animación (ver MOTIFS en eventos.html)     c1/c2 degradado de fondo   ink color del texto
 */
window.EVENTS = [
  { date: "2026-10-16", name: "Día Mundial de la Alimentación", fit: "Supermercados · alimentación", motif: "food", c1: "#F2A93B", c2: "#D9661F", ink: "#FFF8EE" },
  { date: "2026-10-17", name: "Día de Usar Algo Llamativo", fit: "Moda · complementos", motif: "sparkle", c1: "#FF4FA3", c2: "#7B2FF7", ink: "#FFFFFF" },
  { date: "2026-10-18", name: "Día Mundial de Protección de la Naturaleza", fit: "Cosmética natural · outdoor", motif: "leaf", c1: "#3FA34D", c2: "#1E5E3A", ink: "#F3FFF4" },
  { date: "2026-10-19", name: "Día Mundial contra el Cáncer de Mama", fit: "Belleza · causa solidaria", motif: "ribbon", c1: "#F7A1C4", c2: "#D9467F", ink: "#FFFFFF" },
  { date: "2026-10-20", name: "Día Internacional del Chef", fit: "Cocina · electrodomésticos", motif: "chef", c1: "#2B2B2B", c2: "#111111", ink: "#FFFFFF" },
  { date: "2026-10-21", name: "Día Mundial del Ahorro de Energía", fit: "Hogar · electrodomésticos eficientes", motif: "bulb", c1: "#FFD43B", c2: "#F08C00", ink: "#2A1A00" },
  { date: "2026-10-22", name: "Día Mundial de la Medicina Tradicional", fit: "Parafarmacia · bienestar", motif: "herb", c1: "#8FBF7F", c2: "#4E7D4A", ink: "#FBFFF8" },
  { date: "2026-10-23", name: "Día Internacional del Champagne", fit: "Gourmet · celebraciones", motif: "bubbles", c1: "#E9D8A6", c2: "#B08D3C", ink: "#2B1F05" },
  { date: "2026-10-24", name: "Día Internacional contra el Cambio Climático", fit: "Sostenibilidad · movilidad", motif: "earth", c1: "#4DABF7", c2: "#1864AB", ink: "#FFFFFF" },
  { date: "2026-10-25", name: "Cambio de hora: una hora más", fit: "Ocio · descanso · relojes", motif: "clock", c1: "#3B5BDB", c2: "#1C2A6B", ink: "#FFFFFF" },
  { date: "2026-10-26", name: "Día Mundial de la Suegra", fit: "Regalos · flores · experiencias", motif: "gift", c1: "#FF8787", c2: "#C92A2A", ink: "#FFFFFF" },
  { date: "2026-10-27", name: "Día Internacional del Gato Negro", fit: "Mascotas · previa de Halloween", motif: "cat", c1: "#3A2F5B", c2: "#130E24", ink: "#FFE066" },
  { date: "2026-10-28", name: "Día Mundial de la Animación", fit: "Entretenimiento · gaming", motif: "play", c1: "#FF6B6B", c2: "#5F3DC4", ink: "#FFFFFF" },
  { date: "2026-10-29", name: "Día Mundial de la Psoriasis", fit: "Dermocosmética · cuidado de la piel", motif: "drop", c1: "#A5D8FF", c2: "#4C9BE8", ink: "#082A4D" },
  { date: "2026-10-30", name: "Día Mundial del Fisicoculturismo", fit: "Nutrición deportiva · fitness", motif: "dumbbell", c1: "#20C997", c2: "#087F5B", ink: "#FFFFFF" },
  { date: "2026-10-31", name: "Halloween", fit: "Disfraces · dulces · ocio", motif: "pumpkin", c1: "#FF7A00", c2: "#2B0A3D", ink: "#FFFFFF" },
  { date: "2026-11-01", name: "Todos los Santos · Día Mundial del Veganismo", fit: "Alimentación vegana · tradición", motif: "sprout", c1: "#94D82D", c2: "#2F9E44", ink: "#FFFFFF" },
  { date: "2026-11-02", name: "Día de los Fieles Difuntos", fit: "Floristerías · repostería tradicional", motif: "candle", c1: "#5C3D2E", c2: "#1F120C", ink: "#FFE8CC" },
  { date: "2026-11-03", name: "Día Mundial del Sándwich", fit: "Delivery · alimentación", motif: "sandwich", c1: "#FFC078", c2: "#E8590C", ink: "#2B1200" },
  { date: "2026-11-04", name: "Día Mundial del Caramelo", fit: "Dulces · regalos", motif: "candy", c1: "#F783AC", c2: "#AE3EC9", ink: "#FFFFFF" },
  { date: "2026-11-05", name: "Día Internacional de las Personas Cuidadoras", fit: "Salud · seguros · hogar", motif: "hands", c1: "#FFA8A8", c2: "#E03131", ink: "#FFFFFF" },
  { date: "2026-11-06", name: "Día Mundial del Saxofón", fit: "Música · audio · auriculares", motif: "notes", c1: "#FCC419", c2: "#E67700", ink: "#2B1A00" },
  { date: "2026-11-07", name: "Cuenta atrás: 11.11 en 4 días", fit: "E-commerce · tecnología", motif: "countdown", c1: "#E62E04", c2: "#7A0F00", ink: "#FFFFFF" },
  { date: "2026-11-08", name: "Día Mundial sin Wi-Fi", fit: "Viajes · libros · desconexión", motif: "wifi", c1: "#63E6BE", c2: "#0B7285", ink: "#FFFFFF" },
  { date: "2026-11-09", name: "Día del Inventor", fit: "Tecnología · gadgets", motif: "idea", c1: "#748FFC", c2: "#364FC7", ink: "#FFFFFF" },
  { date: "2026-11-10", name: "Día Mundial de la Ciencia para la Paz", fit: "Educación · tecnología", motif: "atom", c1: "#22B8CF", c2: "#0B4F6C", ink: "#FFFFFF" },
  { date: "2026-11-11", name: "Singles Day 11.11", fit: "E-commerce · todo", motif: "neon", c1: "#1A0B2E", c2: "#0A0414", ink: "#FF4FD8" },
  { date: "2026-11-12", name: "Día Internacional del Tempranillo", fit: "Vino · gourmet", motif: "wine", c1: "#9C1C3C", c2: "#4A0A1C", ink: "#FFE3EA" },
  { date: "2026-11-13", name: "Día Mundial de la Bondad", fit: "Marcas con propósito · regalos", motif: "heart", c1: "#FF6B9A", c2: "#E8364F", ink: "#FFFFFF" },
  { date: "2026-11-14", name: "Día Mundial de la Diabetes", fit: "Salud · alimentación sin azúcar", motif: "circle", c1: "#E7F5FF", c2: "#A5D8FF", ink: "#0B3D91" },
  { date: "2026-11-15", name: "Día Mundial sin Alcohol", fit: "Bebidas 0,0 · bienestar", motif: "zero", c1: "#96F2D7", c2: "#12B886", ink: "#04332A" }
];

// Temporadas que cubren todo el periodo
window.SEASONS = [
  { name: "Octubre Rosa", range: "Todo octubre", fit: "Belleza · moda · causa solidaria" },
  { name: "Movember", range: "Todo noviembre", fit: "Cuidado masculino · salud" }
];
