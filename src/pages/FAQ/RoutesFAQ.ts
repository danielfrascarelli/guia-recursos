export abstract class RoutesFAQ {
  private constructor() { } // evita instancias

  // PrimerosPasos
  static readonly PrimerosPasos = class {
    private constructor() { }
    static readonly URL = "primeros-momentos-de-la-detencion";
 
  };

  // VisitasYContactos
  static readonly VisitasYContactos = class {
    private constructor() { }
    static readonly URL = "visitas-y-contacto";
  };

  // Traslados
  static readonly Traslados = class {
    private constructor() { }
    static readonly URL = "traslados";
  };

  // Salud y sanciones
  static readonly SaludYSanciones = class {
    private constructor() { }
    static readonly URL = "salud";
  };

  // Salud y sanciones
  static readonly AccesoDerechosActividades = class {
    private constructor() { }
    static readonly URL = "acceso-a-derechos-y-actividades";
  };

  // Salud y sanciones
  static readonly Salida = class {
    private constructor() { }
    static readonly URL = "salida";
  };

  // Salud y sanciones
  static readonly ContactosUtiles = class {
    private constructor() { }
    static readonly URL = "contactos-utiles";
  };
}
