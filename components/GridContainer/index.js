import styles from './gridContainer.module.css';

function GridContainer(props) {
  return (
    <div className={styles.gridContainer}>
      {props.children}
    </div>
  )
}

export default GridContainer;