# Animal Gym 2 - Guía de Git y GitHub

> Documentación del flujo de trabajo Git para el proyecto Animal Gym 2

---

## Tabla de Contenidos

1. [Configuración Inicial](#configuración-inicial)
2. [Nomenclatura de Ramas](#nomenclatura-de-ramas)
3. [Conventional Commits](#conventional-commits)
4. [Flujo de GitFlow](#flujo-de-gitflow)
5. [Proceso para Subir a GitHub](#proceso-para-subir-a-github)
6. [Crear un Pull Request](#crear-un-pull-request)

---

## Configuración Inicial

### 1. Configurar Git globalmente

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### 2. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/animal-gym.git
cd animal-gym
```

### 3. Instalar dependencias

```bash
npm install
```

---

## Nomenclatura de Ramas

### Estructura de Ramas

| Tipo       | Prefijo     | Descripción                         | Ejemplo                       |
| ---------- | ----------- | ----------------------------------- | ----------------------------- |
| `feature`  | `feature/`  | Nuevas funcionalidades              | `feature/agregar-login`       |
| `fix`      | `fix/`      | Corrección de bugs                  | `fix/corregir-navbar`         |
| `hotfix`   | `hotfix/`   | Correcciones urgentes en producción | `hotfix/arreglar-error-pago`  |
| `release`  | `release/`  | Preparación de versiones            | `release/v1.0.0`              |
| `docs`     | `docs/`     | Documentación                       | `docs/actualizar-readme`      |
| `refactor` | `refactor/` | Refactorización de código           | `refactor/simplificar-logica` |
| `test`     | `test/`     | Agregar o corregir pruebas          | `test/agregar-pruebas-login`  |

### Reglas

- Usar **kebab-case** (guiones bajos separating palabras)
- Máximo 50 caracteres
- Ser descriptivo pero conciso
- No usar caracteres especiales ni espacios

### Ejemplos

```bash
# Correcto
feature/agregar-sistema-membresias
fix/corregir-error-carrito-compras
hotfix/arreglar-fallo-pago-stripe

# Incorrecto
Feature/Agregar Login
fix/bug navbar
Feature_Nueva_Funcionalidad
```

---

## Conventional Commits

### Formato

```
<tipo>(<alcance>): <descripción>

[ cuerpo opcional ]

[ pie opcional ]
```

### Tipos de Commits

| Tipo       | Descripción                     |
| ---------- | ------------------------------- |
| `feat`     | Nueva funcionalidad             |
| `fix`      | Corrección de bug               |
| `docs`     | Cambios en documentación        |
| `style`    | Cambios de formato (sin lógica) |
| `refactor` | Refactorización de código       |
| `test`     | Agregar o actualizar pruebas    |
| `chore`    | Tareas de mantenimiento         |
| `perf`     | Mejoras de rendimiento          |
| `ci`       | Cambios en configuración de CI  |

### Ejemplos

```bash
# Correcto
git commit -m "feat: agregar sistema de login con Google"
git commit -m "fix: corregir cálculo de total con descuento"
git commit -m "docs: actualizar guía de contribución"
git commit -m "refactor: simplificar clase MaquinaRepository"
git commit -m "test: agregar pruebas unitarias para PlanService"

# Incorrecto
git commit -m "fix"
git commit -m "arreglé un error"
git commit -m "Cambios varios"
```

---

## Proceso para Subir a GitHub

### 1. Actualizar tu repositorio local

```bash
git pull origin main
```

### 2. Crear una nueva rama

```bash
# Para nueva funcionalidad
git checkout -b feature/nombre-descriptivo

# Para corrección de bug
git checkout -b fix/nombre-del-bug
```

### 3. Trabajar y hacer commits

```bash
# Ver estado de cambios
git status

# Agregar archivos específicos
git add archivo1.js archivo2.css

# O agregar todos los cambios
git add .

# Hacer commit con mensaje convencional
git commit -m "feat(area): descripción clara de cambios"
```

### 4. Subir la rama a GitHub

```bash
# Primera vez que subes la rama
git push -u origin feature/nombre-descriptivo

# Commits posteriores
git push
```

### 5. Sincronizar con main (si hay cambios)

```bash
# Traer cambios de develop
git pull main

# Resolver conflictos si los hay
# Luego continuar con el commit
git add .
git commit -m "merge: resolver conflictos con develop"
git push
```

---

## Crear un Pull Request

### Desde GitHub Web

1. **Navegar a tu repositorio** en GitHub
2. **Comparar ramas**: hacer clic en "Compare & pull request"
3. **Completar el PR**:
   - Título claro y descriptivo
   - Descripción siguiendo la plantilla:
     - ¿Qué cambia?
     - ¿Por qué es necesario?
     - ¿Cómo se probó?
   - Seleccionar reviewers
   - Asignar labels relevantes

### Revisión de PR

1. **El autor**:
   - Solicita review a otros miembros
   - Responde comentarios

2. **El reviewer**:
   - Revisa el código
   - Aprobar o solicitar cambios
   - Comenta líneas específicas

### Mergear el PR

```bash
# Una vez aprobado, desde GitHub:
# 1. Hacer clic en "Squash and merge"
# 2. Eliminar la rama feature
```

---

## Comandos Útiles

```bash
# Ver historial de commits
git log --oneline --graph -10

# Ver diferencias
git diff
git diff develop

# Ver estado actual
git status

# Listar ramas locales
git branch

# Listar ramas remotas
git branch -r

# Eliminar rama local
git branch -d nombre-rama

# Eliminar rama remota
git push origin --delete nombre-rama

# Deshacer último commit (sin perder cambios)
git reset --soft HEAD~1

# Guardar cambios temporalmente
git stash
git stash pop
```

---
