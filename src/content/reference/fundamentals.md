---
title: Fundamentals
order: 2
create: 1778423268
update: 1778423268
---

### Vectors

### Coordinate Spaces

### Les variables
Le **GLSL** (OpenGL Shading Language) est un langage **typé statiquement**. Cela signifie que chaque variable doit être **déclarée avec un type précis** avant d’être utilisée. Cette rigueur permet au compilateur de vérifier la cohérence des opérations et d’optimiser les performances, ce qui est crucial pour les calculs graphiques en temps réel.

Voici les types de base les plus courants en GLSL, accompagnés de leur définition et d’un exemple d’utilisation :


| Type          |                                                       |                         |
| ------------- | --------------------------------------------------------------- | ------------------------------- |
| `float`       | Nombre à virgule flottante (32 bits).                           | `0.5`                           |
| `vec2`        | Vecteur de 2 `float` (x, y).                                    | `vec2(1.0, 0.5)`                |
| `vec3`        | Vecteur de 3 `float` (x, y, z).                                 | `vec3(1.0, 0.5, 0.0)`           |
| `vec4`        | Vecteur de 4 `float` (x, y, z, w).                              | `vec4(1.0, 0.5, 0.0, 1.0)`      |
| `mat2`        | Matrice 2x2 de `float`.                                         | `mat2(1.0, 0.0, 0.0, 1.0)`      |
| `mat3`        | Matrice 3x3 de `float`.                                         | `mat3(1.0)` (matrice identité)  |
| `mat4`        | Matrice 4x4 de `float`.                                         | `mat4(1.0)` (matrice identité)  |
| `sampler2D`   | Texture 2D (accès aux pixels via coordonnées UV).               | `uniform sampler2D u_texture;`  |
| `samplerCube` | Texture cubemap (accès aux pixels via vecteur 3D de direction). | `uniform samplerCube u_skybox;` |

```gsls
uniform float uTime;
float red = 0.5;

vec3 color = vec3(red, sin(uTime), 0.8);

```


### Uniforms

### Textures et Samplers

### Mathematical Functions

### Vertex/Fragment Structure

### Loops and Conditions
