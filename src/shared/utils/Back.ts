function getBackUtil(path: string): string | null {
    const parts = path.split("/").filter(Boolean);

    if (parts.length < 3) return null;

    const tipo = parts[1];
    const categoria = parts[2];

    const tiposValidos = ["adulto", "adolescente"];
    if (!tiposValidos.includes(tipo)) return null;

    const categoriasValidas = ["visitas-y-contacto", "traslados", "salud", "acceso-a-derechos", "salida"];

    if (!tiposValidos.includes(tipo)) return null;
    if (!categoriasValidas.includes(categoria)) return null;

    return `/mapa-de-ruta/${tipo}/${categoria}`;
}

export default function getBackUrl(curr: string) {
    switch (curr) {
        case "/": {
            return '';
        }
        case "/introduccion": {
            return '/';
        }
        case "/rol-de-la-familia": {
            return '/introduccion';
        }
        case "/tips": {
            return '/rol-de-la-familia';
        }
        case "/mapa-de-ruta": {
            return '/tips';
        }
        case '/mapa-de-ruta/primeros-momentos': {
            return '/mapa-de-ruta';
        }
        case '/mapa-de-ruta/seleccionar-familiar': {
            return '/mapa-de-ruta';
        }
        case '/mapa-de-ruta/adulto': {
            return '/mapa-de-ruta/seleccionar-familiar';
        }
        case '/mapa-de-ruta/adolescente': {
            return '/mapa-de-ruta/seleccionar-familiar';
        }
        case '/mapa-de-ruta/contactos-utiles': {
            return '/mapa-de-ruta';
        }
        default:
            if (curr.startsWith('/mapa-de-ruta/primeros-momentos/') && (curr.match(/\//g) || []).length == 3) return '/mapa-de-ruta/primeros-momentos';

            if ((curr.startsWith('/mapa-de-ruta/adulto/') || curr.startsWith('/mapa-de-ruta/adolescente/'))
                && (curr.match(/\//g) || []).length > 3) {
                return getBackUtil(curr);
            }
            if (curr.startsWith('/mapa-de-ruta/adulto/') && (curr.match(/\//g) || []).length == 3) return '/mapa-de-ruta/adulto';
            if (curr.startsWith('/mapa-de-ruta/adolescente/') && (curr.match(/\//g) || []).length == 3) return '/mapa-de-ruta/adolescente';

            return "/";
    }
}  