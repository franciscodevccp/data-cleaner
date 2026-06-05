/**
 * Lista de referencia de comunas chilenas (formato normalizado sin tildes).
 * Usada para fuzzy matching con distancia Levenshtein.
 */

export const COMUNAS_REFERENCIA: string[] = [
  'Algarrobo', 'Alhue', 'Alto Biobio', 'Alto Del Carmen', 'Alto Hospicio',
  'Ancud', 'Andacollo', 'Angol', 'Antofagasta', 'Antuco', 'Arauco', 'Arica',
  'Aysen', 'Buin', 'Bulnes', 'Cabildo', 'Cabo De Hornos', 'Cabrero', 'Calama',
  'Calbuco', 'Caldera', 'Calera De Tango', 'Calle Larga', 'Camarones',
  'Camina', 'Canela', 'Canete', 'Carahue', 'Cartagena', 'Casablanca', 'Castro',
  'Catemu', 'Cauquenes', 'Cerrillos', 'Cerro Navia', 'Chaiten', 'Chanaral',
  'Chanco', 'Chepica', 'Chiguayante', 'Chillan', 'Chillan Viejo', 'Chimbarongo',
  'Cholchol', 'Chonchi', 'Cisnes', 'Cobquecura', 'Cochamo', 'Cochrane',
  'Codegua', 'Coelemu', 'Coihueco', 'Coinco', 'Colbun', 'Colchane', 'Colina',
  'Collipulli', 'Coltauco', 'Combarbala', 'Concepcion', 'Conchali', 'Concon',
  'Constitucion', 'Contulmo', 'Copiapo', 'Coquimbo', 'Coronel', 'Corral',
  'Coyhaique', 'Cunco', 'Curacautin', 'Curacavi', 'Curaco De Velez',
  'Curanilahue', 'Curarrehue', 'Curepto', 'Curico', 'Dalcahue', 'Diego De Almagro',
  'Donihue', 'El Bosque', 'El Carmen', 'El Monte', 'El Quisco', 'El Tabo',
  'Empedrado', 'Ercilla', 'Estacion Central', 'Florida', 'Freire', 'Freirina',
  'Fresia', 'Frutillar', 'Futaleufu', 'Futrono', 'Galvarino', 'General Lagos',
  'Gorbea', 'Graneros', 'Guaitecas', 'Hijuelas', 'Hualaihue', 'Hualane',
  'Hualpen', 'Hualqui', 'Huara', 'Huasco', 'Huechuraba', 'Illapel', 'Independencia',
  'Iquique', 'Isla De Maipo', 'Isla De Pascua', 'Juan Fernandez', 'La Cisterna',
  'La Cruz', 'La Estrella', 'La Florida', 'La Granja', 'La Higuera', 'La Ligua',
  'La Pintana', 'La Reina', 'La Serena', 'La Union', 'Lago Ranco', 'Lago Verde',
  'Laguna Blanca', 'Laja', 'Lampa', 'Lanco', 'Las Cabras', 'Las Condes',
  'Lautaro', 'Lebu', 'Licanten', 'Limache', 'Linares', 'Litueche', 'Llaillay',
  'Llanquihue', 'Llay Llay', 'Lo Barnechea', 'Lo Espejo', 'Lo Prado', 'Lolol',
  'Loncoche', 'Longavi', 'Lonquimay', 'Los Alamos', 'Los Andes', 'Los Angeles',
  'Los Lagos', 'Los Muermos', 'Los Sauces', 'Los Vilos', 'Lota', 'Lumaco',
  'Machali', 'Macul', 'Mafil', 'Maipu', 'Malloa', 'Marchihue', 'Maria Elena',
  'Maria Pinto', 'Mariquina', 'Maule', 'Maullin', 'Mejillones', 'Melipeuco',
  'Melipilla', 'Molina', 'Monte Patria', 'Mostazal', 'Mulchen', 'Nacimiento',
  'Nancagua', 'Natales', 'Negrete', 'Ninhue', 'Niquen', 'Nogales', 'Nueva Imperial',
  'Nunoa', 'O Higgins', 'Olivar', 'Ollague', 'Olmue', 'Osorno', 'Ovalle',
  'Padre Hurtado', 'Padre Las Casas', 'Paihuano', 'Paillaco', 'Paine', 'Palena',
  'Palmilla', 'Panguipulli', 'Panquehue', 'Papudo', 'Paredones', 'Parral',
  'Pedro Aguirre Cerda', 'Pelarco', 'Pelluhue', 'Pemuco', 'Penaflor', 'Penalolen',
  'Pencahue', 'Penco', 'Peralillo', 'Perquenco', 'Petorca', 'Peumo', 'Pica',
  'Pichidegua', 'Pichilemu', 'Pinto', 'Pirque', 'Pitrufquen', 'Placilla',
  'Portezuelo', 'Porvenir', 'Pozo Almonte', 'Primavera', 'Providencia', 'Puchuncavi',
  'Pucon', 'Pudahuel', 'Puente Alto', 'Puerto Montt', 'Puerto Octay', 'Puerto Varas',
  'Pumanque', 'Punitaqui', 'Punta Arenas', 'Puqueldon', 'Puren', 'Purranque',
  'Putaendo', 'Putre', 'Puyehue', 'Queilen', 'Quellon', 'Quemchi', 'Quilaco',
  'Quilicura', 'Quilleco', 'Quillon', 'Quillota', 'Quilpue', 'Quinchao', 'Quinta De Tilcoco',
  'Quinta Normal', 'Quintero', 'Quirihue', 'Rancagua', 'Ranquil', 'Rauco',
  'Recoleta', 'Renaico', 'Renca', 'Rengo', 'Requinoa', 'Retiro', 'Rinconada',
  'Rio Bueno', 'Rio Claro', 'Rio Hurtado', 'Rio Ibanez', 'Rio Negro', 'Rio Verde',
  'Romeral', 'Saavedra', 'Sagrada Familia', 'Salamanca', 'San Antonio', 'San Bernardo',
  'San Carlos', 'San Clemente', 'San Esteban', 'San Fabian', 'San Fernando',
  'San Francisco De Mostazal', 'San Gregorio', 'San Ignacio', 'San Javier',
  'San Joaquin', 'San Jose De Maipo', 'San Juan De La Costa', 'San Miguel',
  'San Nicolas', 'San Pablo', 'San Pedro', 'San Pedro De Atacama', 'San Pedro De La Paz',
  'San Rafael', 'San Ramon', 'San Rosendo', 'San Vicente', 'Santa Barbara',
  'Santa Cruz', 'Santa Juana', 'Santa Maria', 'Santiago', 'Santo Domingo',
  'Sierra Gorda', 'Talagante', 'Talca', 'Talcahuano', 'Taltal', 'Temuco',
  'Teno', 'Teodoro Schmidt', 'Tierra Amarilla', 'Tiltil', 'Timaukel', 'Tirua',
  'Tocopilla', 'Tolten', 'Tome', 'Torres Del Paine', 'Tortel', 'Traiguen',
  'Trehuaco', 'Tucapel', 'Valdivia', 'Vallenar', 'Valparaiso', 'Vichuquen',
  'Victoria', 'Vicuna', 'Vilcun', 'Villa Alegre', 'Villa Alemana', 'Villarrica',
  'Vina Del Mar', 'Vitacura', 'Yerbas Buenas', 'Yumbel', 'Yungay', 'Zapallar',
]

// Índice pre-computado: key lowercase, compact sin espacios, y display original
const normalizedIndex = COMUNAS_REFERENCIA.map((name) => ({
  display:  name,
  key:      name.toLowerCase(),
  compact:  name.toLowerCase().replace(/\s+/g, ''),
}))

// Lookup O(1) para coincidencia exacta (caso más frecuente con datos ya normalizados)
const exactLookup = new Map<string, string>(
  normalizedIndex.map((e) => [e.key, e.display])
)

/**
 * Distancia de edición Damerau-Levenshtein (variante OSA) con terminación
 * temprana. A diferencia de Levenshtein puro, una transposición de caracteres
 * ADYACENTES cuenta como UNA sola edición. Esto es clave porque el typo más
 * común al teclear es justamente intercambiar dos letras seguidas:
 *   "Arauoc"→"Arauco", "Victorai"→"Victoria", "cuirco"→"Curico"
 * (Levenshtein los considera distancia 2 y se escapaban del umbral; con OSA
 * son distancia 1 y se corrigen.)
 *
 * Si la distancia mínima posible de la fila ya supera `maxDist`, aborta antes.
 * Se conserva el nombre `levenshtein` por compatibilidad con los llamadores.
 */
export function levenshtein(a: string, b: string, maxDist = Infinity): number {
  const m = a.length
  const n = b.length

  // Diferencia de longitud ya supera el umbral → imposible estar dentro del límite
  if (Math.abs(m - n) > maxDist) return maxDist + 1
  if (m === 0) return n
  if (n === 0) return m

  // Tres filas rotativas: i-2 (para transposición), i-1 y la actual.
  let prevPrev: number[] = new Array(n + 1).fill(0)
  let prev:     number[] = Array.from({ length: n + 1 }, (_, j) => j)
  let curr:     number[] = new Array(n + 1).fill(0)

  for (let i = 1; i <= m; i++) {
    curr[0] = i
    let rowMin = i // mínimo de la fila actual (para terminación temprana)

    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      let v = Math.min(
        prev[j] + 1,         // deleción
        curr[j - 1] + 1,     // inserción
        prev[j - 1] + cost,  // sustitución
      )
      // Transposición de caracteres adyacentes (Damerau-OSA)
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        v = Math.min(v, prevPrev[j - 2] + 1)
      }
      curr[j] = v
      if (v < rowMin) rowMin = v
    }

    if (rowMin > maxDist) return maxDist + 1

    // Rotar filas: prevPrev ← prev ← curr ← (buffer reutilizado)
    const tmp = prevPrev
    prevPrev = prev
    prev = curr
    curr = tmp
  }

  return prev[n]
}

/**
 * Corrige una comuna usando coincidencia exacta (O(1)) primero,
 * luego Levenshtein con pre-filtros de longitud y terminación temprana.
 *
 * Nota: esta función es pura. El cache de resultados se gestiona en
 * normalizer.ts para evitar estado global entre requests.
 */
export function fuzzyCorrectComuna(value: string): { corrected: string; matched: boolean } {
  const key = value.toLowerCase()

  // 1. Coincidencia exacta: O(1), cubre la mayoría de datos ya limpios
  const exactDisplay = exactLookup.get(key)
  if (exactDisplay !== undefined) {
    return { corrected: exactDisplay, matched: exactDisplay !== value }
  }

  const compact   = key.replace(/\s+/g, '')
  const threshold = Math.min(2, Math.floor(Math.max(key.length, 1) * 0.2))

  let best: { display: string; distance: number } | null = null

  for (const entry of normalizedIndex) {
    // Pre-filtro de longitud: descarta entradas que no pueden estar dentro del umbral
    if (Math.abs(key.length - entry.key.length) > threshold) {
      // Intenta igualmente con compact (sin espacios puede tener distinta longitud)
      if (Math.abs(compact.length - entry.compact.length) > threshold) continue
      const d2 = levenshtein(compact, entry.compact, threshold)
      if (d2 <= threshold && (!best || d2 < best.distance)) {
        best = { display: entry.display, distance: d2 }
        if (d2 === 0) break
      }
      continue
    }

    // Comparación con key completo (con espacios)
    const d1 = levenshtein(key, entry.key, threshold)
    if (d1 <= threshold) {
      if (!best || d1 < best.distance) {
        best = { display: entry.display, distance: d1 }
        if (d1 === 0) break // distancia 0 → coincidencia perfecta, no puede mejorar
      }
      continue
    }

    // Si key no coincide, intenta compact (maneja diferencias de espaciado)
    if (Math.abs(compact.length - entry.compact.length) <= threshold) {
      const d2 = levenshtein(compact, entry.compact, threshold)
      if (d2 <= threshold && (!best || d2 < best.distance)) {
        best = { display: entry.display, distance: d2 }
      }
    }
  }

  if (best && best.display !== value) {
    return { corrected: best.display, matched: true }
  }

  return { corrected: value, matched: false }
}

/**
 * Sugiere comunas por similitud para el buscador individual (Parte I, criterio 7).
 * Combina coincidencia por prefijo, subcadena y distancia Levenshtein.
 * Ej: "florida" → ["Florida", "La Florida"]; "temuko" → ["Temuco"].
 */
export function sugerirComunas(query: string, limit = 6): string[] {
  const q = query
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
  if (!q) return []

  const scored: { display: string; score: number }[] = []

  for (const entry of normalizedIndex) {
    const key = entry.key
    let score: number
    if (key === q)              score = 0          // coincidencia exacta
    else if (key.startsWith(q)) score = 1          // empieza con la consulta
    else if (key.includes(q))   score = 2          // contiene la consulta
    else {
      const d = levenshtein(q, key, 3)             // typo cercano
      if (d <= 3) score = 3 + d
      else continue
    }
    scored.push({ display: entry.display, score })
  }

  scored.sort((a, b) => a.score - b.score || a.display.localeCompare(b.display, 'es'))
  return scored.slice(0, limit).map((s) => s.display)
}
