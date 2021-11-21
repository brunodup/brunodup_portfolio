import styles from './verticalGrid.module.css';


function VerticalGrid(props) {
  return (
    <div className={styles.verticalGridContainer}>
      {props.children}
    </div>
  )
}

export default VerticalGrid;