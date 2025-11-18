function getBackUtil(path: string): string {
    const parts = path.split("/").filter(Boolean);

    if (parts.length < 3) return "/";

    const tipo = parts[1];
    const categoria = parts[2];

    const tiposValidos = ["adulto", "adolescente"];
    if (!tiposValidos.includes(tipo)) return "/";

    const categoriasValidas = ["visitas-y-comunicacion", "traslados", "salud", "acceso-a-derechos", "salida"];

    if (!tiposValidos.includes(tipo)) return "/";
    if (!categoriasValidas.includes(categoria)) return "/";

    return `/mapa-de-ruta/${tipo}/${categoria}`;
}

export default function getBackUrl(curr: string): string {
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
        case '/mapa-de-ruta/proceso-judicial': {
            return '/mapa-de-ruta';
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

            if (curr.startsWith('/mapa-de-ruta/contactos-utiles/instituto-nacional-de-rehabilitacion/') && (curr.match(/\//g) || []).length == 4
                || curr.startsWith('/mapa-de-ruta/contactos-utiles/instituto-nacional-de-rehabilitacion/oficinas/')
                || curr.startsWith('/mapa-de-ruta/contactos-utiles/instituto-nacional-de-rehabilitacion/unidades/')
            )
                return '/mapa-de-ruta/contactos-utiles/instituto-nacional-de-rehabilitacion';

            if (curr.startsWith('/mapa-de-ruta/contactos-utiles/') && (curr.match(/\//g) || []).length == 3)
                return '/mapa-de-ruta/contactos-utiles';

            if (curr.startsWith('/mapa-de-ruta/proceso-judicial/') && (curr.match(/\//g) || []).length == 3)
                return '/mapa-de-ruta/proceso-judicial';


            return "/";
    }
}  