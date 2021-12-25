import styles from './Lettering.module.css';


function Lettering(props) {
  return (
    <div className={styles.lettering}>
      {props.children}
    </div>
  )
}

export default Lettering;