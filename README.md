# SISCTM-Ixtlán
Sistema de Control de la Tesorería Municipal de Ixtlán de Juárez

## Estructura del proyecto
Este proyecto utiliza una estructura organizada y escalable para facilitar el desarrollo en equipo con React. A continuación se explica cada carpeta y archivo:

```
project-root/
├── public/                   # Archivos públicos como index.html, favicon, etc.
│   └── index.html            # Archivo principal de HTML
├── src/                      # Código fuente de la aplicación
│   ├── assets/               # Recursos estáticos como imágenes, estilos, etc.
│   ├── components/           # Componentes reutilizables
│   ├── hooks/                # Custom hooks
│   ├── layouts/              # Layouts generales de la app
│   ├── pages/                # Páginas o vistas principales
│   ├── services/             # Servicios para manejar API calls
│   ├── store/                # Configuración de estado global (e.g., Redux, Context)
│   ├── utils/                # Funciones y utilidades
│   ├── App.js                # Componente principal de la aplicación
|   ├── index.css             # CSS 
│   ├── index.js              # Punto de entrada de la aplicación
│   └── routes.js             # Configuración de rutas
├── .env                      # Variables de entorno
├── .gitignore                # Archivos a ignorar por Git
├── package.json              # Dependencias y scripts
└── README.md                 # Documentación del proyecto
```

### Descripción de cada carpeta

 

- **public/**:
Contiene archivos estáticos que se sirven directamente al navegador.

   - **index.html**: Archivo HTML principal donde React "inyecta" toda la aplicación. Solo hay uno y no se suele modificar mucho.


- **src/**: 
Aquí está todo el código fuente del proyecto.

  - **assets/**: Archivos estáticos como imágenes, íconos, fuentes, etc.

  - **components/**: Componentes reutilizables, como botones, tarjetas, formularios, etc.

  - **hooks/**: Custom Hooks de React que encapsulan lógica reutilizable (por ejemplo, para manejar datos, formularios o efectos).

  - **layouts/**: Estructuras de página compartidas (como encabezado, menú y pie de página).

  - **pages/**: Páginas principales de la app (ej. Inicio, Login, Dashboard). Cada archivo representa una vista completa.

  - **services/**: Funciones para manejar peticiones a APIs u otras operaciones externas.

  - **store/**: Manejo del estado global de la aplicación usando herramientas como Context API o Redux.

  - **utils/**: Funciones auxiliares reutilizables (formateo de fechas, validaciones, etc.).

- **App.js**: Componente principal que organiza rutas, layouts y otros elementos globales.

- **index.js**: Punto de entrada de la aplicación. Aquí React se monta en el DOM (en index.html).

- **routes.js**: Configuración de rutas de la aplicación usando react-router-dom.



