import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        open
        className="modal"
        variants={{ hidden: { opacity: 0, y: 30 }, visiable: { opacity: 1, y: 0 } }}
        initial="hidden"
        animate="visiable"
        exit="hidden"

      >
        <h2>{title}</h2>
        {children}
      </motion.dialog >

    </>,
    document.getElementById('modal')
  );
}
