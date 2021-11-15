import styles from './modal.module.css';

function Modal(props) {

  return (
    <div className={`${styles.modal}`}>
      {props.children}
    </div>
  )
}

export default Modal;