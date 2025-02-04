[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18023930&assignment_repo_type=AssignmentRepo)

# **Universidad Autónoma de Chihuahua**
## **Facultad de Ingeniería**
## Ingeniería en Ciencias de la Computación
## OPC02 - Web Platforms
## Práctica| Mi primera aplicación con NPM

Este proyecto consiste en una aplicación básica creada con **Node.js**, en la que se gestionan dependencias utilizando **npm**. El proyecto incluye configuración de control de versiones con **Git** y ha sido subido al repositorio de **GitHub Classroom**.

---

## Características

- **Gestión de Logs**: Implementación de **log4js** para gestionar y almacenar registros de la aplicación.
- **Hot Reloading**: Uso de **supervisor** para reiniciar automáticamente la aplicación al realizar cambios en el código.
- **Pruebas Unitarias**: Configuración de pruebas unitarias con **Mocha** y **Chai**.
- **Linting**: Integración de **ESLint** para asegurar el cumplimiento de estándares de código limpio y buenas prácticas.

---

## Estructura del Proyecto

```
package_manager/
├── node_modules/       # Dependencias instaladas (no incluidas en el repositorio)
├── src/                # Código fuente de la aplicación
│   ├── index.js        # Archivo principal de la aplicación
│   ├── logger.js       # Configuración de log4js
│   └── utils/          # Utilidades y funciones auxiliares
├── tests/              # Archivos de pruebas unitarias con Mocha y Chai
├── .gitignore          # Archivos y directorios ignorados por Git
├── package.json        # Configuración del proyecto y dependencias
├── package-lock.json   # Registro de dependencias exactas
└── README.md           # Documentación del proyecto
```

---

## Instalación y Uso

### 1. Clonar el Repositorio
Clona el repositorio desde GitHub Classroom:
```bash
git clone <URL_DEL_REPOSITORIO>
cd package_manager
```

### 2. Instalar Dependencias
Ejecuta el siguiente comando para instalar las dependencias:
```bash
npm install
```

### 3. Ejecutar la Aplicación
Para iniciar la aplicación con **supervisor**:
```bash
npx supervisor src/index.js
```

### 4. Ejecutar Pruebas
Para ejecutar las pruebas unitarias con **Mocha** y **Chai**:
```bash
npm test
```

### 5. Verificar Linting
Para comprobar que el código sigue las mejores prácticas con **ESLint**:
```bash
npm run lint
```

---

## Dependencias Principales

Las siguientes dependencias se han utilizado en el proyecto:

1. **Manejador de Logs**: [log4js](https://www.npmjs.com/package/log4js)  
   Gestor avanzado de logs que permite configurar distintos niveles de registro y salidas.

2. **Hot Reloading**: [supervisor](https://www.npmjs.com/package/supervisor)  
   Permite la recarga automática de la aplicación cuando se detectan cambios en el código.

3. **Pruebas Unitarias**: [Mocha](https://mochajs.org/) y [Chai](https://www.chaijs.com/)  
   - **Mocha**: Framework de pruebas para JavaScript.
   - **Chai**: Librería de aserciones para validar los resultados de las pruebas.

4. **Linting**: [ESLint](https://eslint.org/)  
   Analiza el código para encontrar errores y mejorar la calidad.

---

## Buenas Prácticas

- **Control de Versiones**: Se configuró un repositorio Git con un archivo `.gitignore` para evitar subir archivos innecesarios como `node_modules`.
- **Estructura Clara**: El proyecto sigue una estructura ordenada y modular para facilitar la comprensión y mantenimiento.
- **Commits Descriptivos**: Se realizaron commits con mensajes claros que reflejan los cambios realizados.

---

## Repositorio

Este proyecto se encuentra alojado en **GitHub Classroom**. Puedes acceder al repositorio [aquí](<URL_DEL_REPOSITORIO>).

---
## Autor

<Coloca aquí tu nombre y mátricula>

