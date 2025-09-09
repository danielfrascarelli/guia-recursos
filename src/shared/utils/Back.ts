

export default function getBackUrl(curr: string) {
    const PRIMEROS_MOMENTOS_DE_LA_DETENCION = /^\/preguntas-frecuentes\/primeros-momentos-de-la-detencion\/(\d+)$/;
    const VISITAS_Y_CONTACTO = /^\/preguntas-frecuentes\/visitas-y-contacto\/(\d+)$/;
    const TRASLADOS = /^\/preguntas-frecuentes\/traslados\/(\d+)$/;
    const SALUD_Y_SANCIONES = /^\/preguntas-frecuentes\/salud-y-sanciones\/(\d+)$/;
    const ACCESO_A_DERECHOS = /^\/preguntas-frecuentes\/acceso-a-derechos-y-actividades\/(\d+)$/;
    const LIBERACION_Y_EGRESO = /^\/preguntas-frecuentes\/liberacion-y-egreso\/(\d+)$/;
    const CONTACTOS_UTILES = /^\/preguntas-frecuentes\/contactos-utiles\/(\d+)$/;

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
        case "/preguntas-frecuentes": {
            return '/tips';
        }
        case '/preguntas-frecuentes/primeros-momentos-de-la-detencion': {
            return '/preguntas-frecuentes';
        }
        case '/preguntas-frecuentes/visitas-y-contacto': {
            return '/preguntas-frecuentes';
        }
        case '/preguntas-frecuentes/traslados': {
            return '/preguntas-frecuentes';
        }
        case '/preguntas-frecuentes/salud-y-sanciones': {
            return '/preguntas-frecuentes';
        }
        case '/preguntas-frecuentes/acceso-a-derechos-y-actividades': {
            return '/preguntas-frecuentes';
        }
        case '/preguntas-frecuentes/liberacion-y-egreso': {
            return '/preguntas-frecuentes';
        }
        case '/preguntas-frecuentes/contactos-utiles': {
            return '/preguntas-frecuentes';
        }
        default:
            if (PRIMEROS_MOMENTOS_DE_LA_DETENCION.test(curr)) return "/preguntas-frecuentes/primeros-momentos-de-la-detencion";
            if (VISITAS_Y_CONTACTO.test(curr)) return "/preguntas-frecuentes/visitas-y-contacto";
            if (TRASLADOS.test(curr)) return "/preguntas-frecuentes/traslados";
            if (SALUD_Y_SANCIONES.test(curr)) return "/preguntas-frecuentes/salud-y-sanciones";
            if (ACCESO_A_DERECHOS.test(curr)) return "/preguntas-frecuentes/acceso-a-derechos-y-actividades";
            if (LIBERACION_Y_EGRESO.test(curr)) return "/preguntas-frecuentes/liberacion-y-egreso";
            if (CONTACTOS_UTILES.test(curr)) return "/preguntas-frecuentes/contactos-utiles";

            if (curr.startsWith('/preguntas-frecuentes/contactos-utiles/instituto-nacional-de-rehabilitacion/') && (curr.match(/\//g) || []).length == 4) return '/preguntas-frecuentes/contactos-utiles/instituto-nacional-de-rehabilitacion';
            if (curr.startsWith('/preguntas-frecuentes/contactos-utiles/') && (curr.match(/\//g) || []).length == 3) return '/preguntas-frecuentes/contactos-utiles';
            if (curr.startsWith('/preguntas-frecuentes/') && (curr.match(/\//g) || []).length == 2) return '/preguntas-frecuentes';


            return "/";
    }
}  