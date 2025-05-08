# SISCTM-Ixtlán
Sistema de Control de la Tesorería Municipal de Ixtlán de Juárez

Estructura del Proyecto
Este proyecto utiliza una estructura organizada y escalable para facilitar el desarrollo en equipo con React. A continuación se explica cada carpeta y archivo:

project-root/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── services/
│   ├── store/
│   ├── utils/
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── routes.js
├── .env
├── .gitignore
├── package.json
└── README.md


 
public/
Contiene archivos estáticos que se sirven directamente al navegador.

index.html: Archivo HTML principal donde React "inyecta" toda la aplicación. Solo hay uno y no se suele modificar mucho.

src/
Aquí está todo el código fuente del proyecto.

assets/: Archivos estáticos como imágenes, íconos, fuentes, etc.

components/: Componentes reutilizables, como botones, tarjetas, formularios, etc.

hooks/: Custom Hooks de React que encapsulan lógica reutilizable (por ejemplo, para manejar datos, formularios o efectos).

layouts/: Estructuras de página compartidas (como encabezado, menú y pie de página).

pages/: Páginas principales de la app (ej. Inicio, Login, Dashboard). Cada archivo representa una vista completa.

services/: Funciones para manejar peticiones a APIs u otras operaciones externas.

store/: Manejo del estado global de la aplicación usando herramientas como Context API o Redux.

utils/: Funciones auxiliares reutilizables (formateo de fechas, validaciones, etc.).

App.js: Componente principal que organiza rutas, layouts y otros elementos globales.

index.js: Punto de entrada de la aplicación. Aquí React se monta en el DOM (en index.html).

index.css: Estilos globales aplicados en toda la aplicación.

routes.js: Configuración de rutas de la aplicación usando react-router-dom.

Archivos raíz
.env: Variables de entorno (por ejemplo, URLs de APIs). No se deben incluir contraseñas ni datos sensibles si el repositorio es público.

.gitignore: Archivos y carpetas que Git debe ignorar, como node_modules/ o .env.

package.json: Contiene las dependencias, scripts (npm start, npm run build, etc.) y la configuración básica del proyecto.

README.md: Este documento. Sirve para orientar a nuevos colaboradores sobre el uso, estructura y propósito del proyecto.


