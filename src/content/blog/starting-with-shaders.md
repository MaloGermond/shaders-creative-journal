---
title: 'Starting with shaders'
description: 'Les bases des shaders'
pubDate: 'Apr 26 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'
status: 'unpublish'
---


# Le Pixel, Unité Fondamentale

Dans l'univers des shaders, **chaque pixel est une entité autonome**. Le shader ne s'intéresse qu'à un seul pixel à la fois : celui qu'il est en train de calculer. 

Cette approche est à la fois une contrainte et une force :

- **Ignorance des voisins** : Un pixel ne connaît pas l'état ou la couleur des pixels environnants. Il est isolé dans son propre contexte.
- **Absence d'amnésie** : Une fois calculé, le pixel conserve sa valeur jusqu'à ce qu'un nouveau calcul le remplace. Il n'a pas de mémoire des calculs précédents, mais sa valeur actuelle est figée jusqu'à mise à jour.

# Les variables

Le **GLSL** (OpenGL Shading Language) est un langage **typé statiquement**. Cela signifie que chaque variable doit être **déclarée avec un type précis** avant d’être utilisée. Cette rigueur permet au compilateur de vérifier la cohérence des opérations et d’optimiser les performances, ce qui est crucial pour les calculs graphiques en temps réel.

Voici les types de base les plus courants en GLSL, accompagnés de leur définition et d’un exemple d’utilisation :


| Type          |                                                       |                          |
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


**Remarque** : En GLSL, les variables peuvent être déclarées comme `uniform` (valeur constante pour tous les sommets/fragments d’un dessin), `attribute` (valeur par sommet, obsolète en GLSL moderne), ou `varying` (valeur interpolée entre les étapes du pipeline). Ces qualificateurs influencent la manière dont les données sont transmises entre les shaders.




### `gl_FragColor` : La Variable Clé du Fragment Shader**

Dans le langage GLSL (OpenGL Shading Language), `gl_FragColor` est une variable prédéfinie de type `vec4` qui représente **la couleur finale du pixel courant** dans un fragment shader. Voici ses caractéristiques essentielles :

- **Type** : `vec4` (4 composantes : R, G, B, A)
- **Rôle** : Détermine la couleur qui sera affichée à l'écran pour le pixel en cours de traitement.
- **Exemple minimal** :
  ```glsl
  void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Pixel rouge opaque
  }
  ```

#### **Pourquoi ce nom ?**

- `gl_` : Préfixe standard pour les variables globales OpenGL.
- `Frag` : Abréviation de *fragment*, car le fragment shader traite chaque fragment (pixel potentiel).
- `Color` : Indique que cette variable définit la couleur.

# Les formes

## Cercle


```glsl

float circle(vec2 p, float radius) {
  return length(p) - radius;
}

```

