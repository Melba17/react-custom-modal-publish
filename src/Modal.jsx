import './Modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faRocket } from '@fortawesome/free-solid-svg-icons'

/**
 * Composant de fenêtre modale accessible et stylisable.
 *
 * @param {boolean} isOpen - Affiche ou masque la modale
 * @param {function} onClose - Fonction appelée à la fermeture
 * @param {string} title - Titre de la modale
 * @param {React.ReactNode} children - Contenu dynamique de la modale
 */
function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
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

export default Modal
