# Listado de Imagenes

## Resumen

Este proyecto muestra un listado de imagenes junto con una cesta de la compra.
El esqueleto de este programa parte del código ubicado en el github de lemoncode
_https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/04-frameworks/01-react/02-base/02-webpack-boiler_

## Paso a Paso

- Lanzamos el comando _npm install_

```bash
npm install
```

- Una vez instalado los paquetes por defecto de este proyecto, procedemos a crear la api así como la interfaz de las imagenes a mostrar. Para ello crearemos dentro de src una carpeta components que contendrá los components del proyecto separados por carpetas y dentro de cada component una carpeta api en caso de ser necesario una llamada para obtener los datos a mostrar.

```bash
mkdir components
cd components

mkdir listImages
cd listImages

mkdir api
cd api

└───components
    └───listImages
        └───api
```

- Siguiente Paso.

  - Crear la interfaz Image.
  - Crear el fichero con los datos de prueba.
  - crear la llamada al api.

- Después de esto procedemos a crear el complemento para mostrar los datos de prueba.
  - Este complemento mostrará las imagenes en una tabla con el estilo material-ui, para ello vamos a instalar material-ui en el proyecto como dependencia de desarrollo.

```bash
npm install @material-ui/core --save-dev
```
