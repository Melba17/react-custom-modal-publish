# React Custom Modal

Une **fenêtre modale accessible et stylisable** développée en React pour remplacer le plugin jQuery [`jquery.modal`](https://github.com/kylefox/jquery-modal).

Ce composant React est pensé pour être **léger**, **accessible au clavier**, **facile à personnaliser** via CSS, et parfaitement réutilisable dans vos projets.

---

## ✨ Fonctionnalités

- ⚛️ Composant React réutilisable  
- ♿ Accessibilité (`role="dialog"`, `aria-modal`, navigation clavier)  
- 🎨 Design personnalisable (taille, couleurs, typographie…)  
- 🚀 Icônes modernes via [Font Awesome](https://fontawesome.com/)  
- 🌈 Animation fluide à l’ouverture (`fadeInScale`)  
- 💻 Apparence inspirée de la charte graphique HRnet  

---

## ⚠️ Pré-requis

Ce composant nécessite :

- React 17 ou supérieur
- react-dom

---

## 📦 Installation

```bash
npm install react-custom-modal-publish
```

> Ce package suppose que vous avez déjà installé `react` et `react-dom` dans votre projet.

### Dépendances externes

Si ce n’est pas déjà fait, installez également les icônes FontAwesome utilisées dans la modale :

```bash
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
```

---

## 🚀 Intégration dans un projet React

```jsx
import Modal from 'react-custom-modal-publish'
import { useState } from 'react'

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Great news !"
      >
        <p>The new employee has been successfully created.</p>
      </Modal>
    </>
  )
}
```

---

## 📋 Props disponibles

| Prop        | Type         | Requis | Description                                                |
|-------------|--------------|--------|------------------------------------------------------------|
| `isOpen`    | `boolean`    | ✅     | Affiche ou masque la modale                                |
| `onClose`   | `function`   | ✅     | Fonction exécutée lors de la fermeture                     |
| `title`     | `string`     | ✅     | Titre affiché dans l’en-tête, accompagné d'une icône fusée |
| `children`  | `ReactNode`  | ✅     | Contenu dynamique (texte, balises ou composants React)     |

---

## 🎨 Personnalisation du style

Le style de la modale est géré via un fichier `Modal.css` intégré.

Vous pouvez le modifier selon vos besoins :

- **Police par défaut** : `'Segoe UI', sans-serif`
- **Couleurs** cohérentes avec l’interface HRnet
- **Animation** d’entrée fluide (zoom/fade)
- **Boutons stylisés**, icônes FontAwesome (fusée et croix)
- **Responsive** : marges prévues sur petits écrans

---

## 📁 Exemple de structure

```plaintext
src/
├── components/
│   ├── Modal.jsx
│   └── Modal.css
```

---

## 📝 Licence

MIT – libre d’utilisation et de modification.

## 🔗 Liens utiles

📦 [Package sur npm](https://www.npmjs.com/package/react-custom-modal-publish)  
💻 [Code source sur GitHub](https://github.com/Melba17/react-custom-modal-publish)
