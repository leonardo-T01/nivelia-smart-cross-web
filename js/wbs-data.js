// js/wbs-data.js - Estructura de Desglose del Trabajo (WBS/EDT)
// Fuente: Documento del Proyecto HIDROVÍA - Sección 15

const WBS_DATA = [
  {
    codigo: "1.0",
    titulo: "Gestión Integral del Proyecto",
    descripcion: "Dirección, planificación y control del proyecto.",
    items: [
      { codigo: "1.1", nombre: "Inicio, alcance y acta de constitución" },
      { codigo: "1.2", nombre: "Planificación, cronograma y presupuesto" },
      { codigo: "1.3", nombre: "Gestión documental y control de cambios" }
    ]
  },
  {
    codigo: "2.0",
    titulo: "Diagnóstico y Estudios",
    descripcion: "Caracterización del sitio y condiciones existentes.",
    items: [
      { codigo: "2.1", nombre: "Levantamiento topográfico" },
      { codigo: "2.2", nombre: "Diagnóstico hidráulico" },
      { codigo: "2.3", nombre: "Inventario de redes e interferencias" },
      { codigo: "2.4", nombre: "Diagnóstico de movilidad y accesibilidad" }
    ]
  },
  {
    codigo: "3.0",
    titulo: "Diseño de la Solución",
    descripcion: "Diseño multidisciplinario de la plataforma.",
    items: [
      { codigo: "3.1", nombre: "Diseño geométrico y arquitectónico" },
      { codigo: "3.2", nombre: "Diseño civil y estructural" },
      { codigo: "3.3", nombre: "Diseño mecánico" },
      { codigo: "3.4", nombre: "Diseño eléctrico" },
      { codigo: "3.5", nombre: "Automatización y control" }
    ]
  },
  {
    codigo: "4.0",
    titulo: "Ingeniería de Detalle",
    descripcion: "Documentación técnica para construcción.",
    items: [
      { codigo: "4.1", nombre: "Planos constructivos" },
      { codigo: "4.2", nombre: "Memorias de cálculo" },
      { codigo: "4.3", nombre: "Especificaciones técnicas" },
      { codigo: "4.4", nombre: "Protocolos de prueba" }
    ]
  },
  {
    codigo: "5.0",
    titulo: "Compras y Fabricación",
    descripcion: "Adquisición y fabricación de componentes.",
    items: [
      { codigo: "5.1", nombre: "Compras" },
      { codigo: "5.2", nombre: "Fabricación estructural" },
      { codigo: "5.3", nombre: "Fabricación mecánica" },
      { codigo: "5.4", nombre: "Tablero y automatización" },
      { codigo: "5.5", nombre: "Inspección de calidad" }
    ]
  },
  {
    codigo: "6.0",
    titulo: "Instalación",
    descripcion: "Montaje en sitio de la plataforma.",
    items: [
      { codigo: "6.1", nombre: "Adecuaciones" },
      { codigo: "6.2", nombre: "Anclajes y apoyos" },
      { codigo: "6.3", nombre: "Montaje de plataforma" },
      { codigo: "6.4", nombre: "Montaje mecánico" },
      { codigo: "6.5", nombre: "Instalación eléctrica y control" }
    ]
  },
  {
    codigo: "7.0",
    titulo: "Pruebas y Puesta en Servicio",
    descripcion: "Validación funcional y de seguridad del sistema.",
    items: [
      { codigo: "7.1", nombre: "Pruebas en vacío" },
      { codigo: "7.2", nombre: "Pruebas de carga" },
      { codigo: "7.3", nombre: "Pruebas de seguridad" },
      { codigo: "7.4", nombre: "Pruebas de activación" },
      { codigo: "7.5", nombre: "Correcciones y aceptación" }
    ]
  },
  {
    codigo: "8.0",
    titulo: "Entrega y Operación",
    descripcion: "Capacitación, manuales y cierre del proyecto.",
    items: [
      { codigo: "8.1", nombre: "Capacitación" },
      { codigo: "8.2", nombre: "Manual de operación" },
      { codigo: "8.3", nombre: "Manual de mantenimiento" },
      { codigo: "8.4", nombre: "Acta de entrega" },
      { codigo: "8.5", nombre: "Cierre y lecciones aprendidas" }
    ]
  }
];

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.WBS_DATA = WBS_DATA;
}