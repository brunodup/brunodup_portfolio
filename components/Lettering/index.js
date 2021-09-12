import styles from './Lettering.module.css';


function Lettering(props) {
  return (
    <h2 className={styles.lettering}>
      {props.children}
    </h2>
  )
}

export default Lettering;