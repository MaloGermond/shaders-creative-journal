---
title: 'Starting with shaders'
description: 'Les bases des shaders'
pubDate: 'Apr 26 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'
status: 'unpublish'
---


### 1. Le Pixel, Unité Fondamentale

Dans l'univers des shaders, **chaque pixel est une entité autonome**. Le shader ne s'intéresse qu'à un seul pixel à la fois : celui qu'il est en train de calculer. 

Cette approche est à la fois une contrainte et une force :

- **Ignorance des voisins** : Un pixel ne connaît pas l'état ou la couleur des pixels environnants. Il est isolé dans son propre contexte.
- **Absence d'amnésie** : Une fois calculé, le pixel conserve sa valeur jusqu'à ce qu'un nouveau calcul le remplace. Il n'a pas de mémoire des calculs précédents, mais sa valeur actuelle est figée jusqu'à mise à jour.


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

