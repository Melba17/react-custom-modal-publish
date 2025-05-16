import './Modal.css'
// Importe le composant React officiel de FontAwesome pour afficher des icônes en JSX
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Importe deux icônes spécifiques depuis la bibliothèque "free-solid" (style du pack d'icônes : solid, regular, light, duotone etc.. ) de FontAwesome (ici, croix et fusée)
import { faTimes, faRocket } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';


/**
 * Composant de fenêtre modale accessible et stylisable.
 *
 * @component
 * @param {boolean} isOpen - Affiche ou masque la modale.
 * @param {function} onClose - Fonction appelée à la fermeture (croix ou bouton).
 * @param {string} title - Titre de la modale.
 * @param {React.ReactNode} children - Contenu dynamique de la modale (texte, JSX, etc.).
 * @returns {JSX.Element|null} Modale rendue ou `null` si masquée.
 */
function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    // Modale en superposition qui couvre tout l'écran et désactive l'interaction avec l'arrière-plan
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="modal-header">
          <FontAwesomeIcon icon={faRocket} className="modal-icon" />
          <h2>{title}</h2>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}

// Définition des propTypes pour documenter l’interface du composant et en valider l’usage
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  onClose: PropTypes.func.isRequired, 
  title: PropTypes.string.isRequired, 
  children: PropTypes.node.isRequired, 
};

export default Modal
