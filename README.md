# Shaders creative journal

## **À propos**

Ce dépôt documente mon parcours d’apprentissage des **shaders** (GLSL/WebGL), en liant **mathématiques**, **code** et **design visuel**.  
L’objectif : **comprendre les principes fondamentaux**, expérimenter avec des effets avancés, et créer une **boîte à outils réutilisable** pour des projets créatifs (animations, jeux, visualisations).

🔗 **Inspirations** :

- [The Book of Shaders](https://thebookofshaders.com/) (Ressource incontournable)
- [Shadertoy](https://www.shadertoy.com/) (Communauté et exemples)
- [GLSL Sandbox](https://glslsandbox.com/)
- [Three.js](https://threejs.org/) / [P5.js](https://p5js.org/)

---

## **Programme d'apprentissage**

### **Fondamentaux des shaders**

Ma première étape a consisté à maîtriser les concepts de base qui constituent le socle de la programmation de shaders :

- **Vertex / Fragment / Geometry** : Les différentes étapes du pipeline graphique.
- **Uniform / Attribute / Varying** : Les types de variables en GLSL.
- **Texture / Sampler / UV mapping** : L'application d'images sur des surfaces 3D.
- **Buffer / Framebuffer** : Le stockage temporaire de données graphiques.
- **Shader program** : La compilation et le lien entre les shaders vertex et fragment.

### **Les mathématiques au cœur des shaders**

Les shaders reposent sur des **concepts mathématiques** essentiels :

- **Vecteurs et matrices** : `vec2`, `vec3`, `vec4`, `mat2`, `mat3`, `mat4`.
- **Opérations vectorielles** : Produit scalaire (`dot`), produit vectoriel (`cross`), normalisation (`normalize`).
- **Interpolation et bruit** : Techniques pour créer des transitions fluides et des textures procédurales, comme le bruit de Perlin ou Simplex.

### **Effets techniques avancés**

Pour aller plus loin, j'ai exploré des **effets techniques** qui permettent de créer des rendus réalistes ou stylisés :

- **Éclairage** : Modèles d'éclairage comme Phong, Gouraud et Blinn-Phong.
- **Shadow mapping** : Création d'ombres dynamiques.
- **Bump mapping / Normal mapping** : Simulation de détails de surface.
- **Raymarching** : Technique de rendu basée sur les champs de distance signés (SDF).
- **Anti-aliasing** : Lissage des bords pour un rendu plus propre.

### **Optimisation des performances**

L'optimisation est cruciale pour garantir des shaders performants :

- **Précision** : Utilisation de `lowp`, `mediump` et `highp` selon les besoins.
- **Discard** : Éviter les calculs inutiles pour les pixels transparents.
- **Loop unrolling** : Déroulement manuel des boucles pour le GPU.
- **Texture atlas** : Regrouper plusieurs textures en une seule pour réduire les appels de texture.

## **Exploration des effets visuels**

Les shaders offrent une palette infinie pour créer des **effets visuels** captivants.

### **Couleurs et lumière**

Les techniques de rendu des couleurs et de la lumière incluent :

- **Gradient et rampe de couleurs** : Transitions fluides entre les teintes.
- **HDR et Tone mapping** : Gestion des hautes lumières pour un rendu réaliste.
- **Glow et Bloom** : Effets de lueur pour simuler des sources de lumière intenses.
- **Réflexion et réfraction** : Simulation des interactions de la lumière avec différentes surfaces.
- **Ambient occlusion** : Ajout de réalisme en simulant les ombres douces dans les crevasses.

### **Distorsions et déformations**

Pour créer des effets dynamiques et artistiques :

- **Warping et Morphing** : Déformation des textures ou géométries.
- **Displacement** : Déplacement des pixels en fonction d'une texture de hauteur.
- **Ripple et Wave** : Simulation d'ondes à la surface de l'eau.
- **Swirl et Vortex** : Création de tourbillons.
- **Fisheye et Barrel distortion** : Déformations optiques pour des effets stylisés.

### **Motifs et textures**

Les motifs procéduraux permettent de créer des textures complexes :

- **Noise** : Bruit blanc, Perlin, Worley pour des textures organiques.
- **Voronoi et Cellular** : Partitionnement de l'espace en cellules.
- **Fractales** : Structures auto-similaires pour des motifs infiniment détaillés.

### **Mouvement et temps**

L'animation et la simulation sont au cœur des effets dynamiques :

- **Animation et Keyframes** : Utilisation de `u_time` pour animer les shaders.
- **Easing** : Fonctions de lissage pour des transitions naturelles.
- **Systèmes de particules** : Simulation de milliers de particules.
- **Simulation de fluides** : Techniques simplifiées pour simuler des liquides.

### **Abstraction et style**

Enfin, les shaders permettent d'explorer des styles artistiques uniques :

- **Glitch et Datamoshing** : Artefacts numériques pour un style rétro.
- **Pixel art et Voxel** : Esthétique rétro ou 3D basse résolution.
- **Low-poly et High-poly** : Styles géométriques contrastés.
- **Wireframe et Outline** : Mise en avant des contours.
- **Cel-shading et Toon shading** : Rendu stylisé inspiré des dessins animés.

---

# Styling documentation

## Reference graphique
https://developer.sketch.com/reference/api/#library

## Libraries

https://codemirror.net/docs/