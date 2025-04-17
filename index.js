/**
 * Point d'entrée principal du package `react-custom-modal-publish`.
 *
 * Ce fichier :
 * - Réexporte le composant `Modal` depuis le fichier source (`src/Modal.jsx`).
 * - Importe le fichier CSS (`src/Modal.css`) pour que les styles soient automatiquement appliqués
 *   dès que le composant est utilisé, **sans que l’utilisateur ait à l'importer manuellement**.
 *
 * Cette structure permet à ceux qui installent le package via npm
 * d'importer directement le composant comme ceci :
 *
 * ```js
 * import Modal from 'react-custom-modal-publish'
 * ```
 *
 * Et d’avoir immédiatement le style appliqué sans étape supplémentaire.
 */
import Modal from './src/Modal.jsx'
import './src/Modal.css'

export default Modal

