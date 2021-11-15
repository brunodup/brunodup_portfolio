import styles from './TextBlock.module.css';


function TextBlock(props) {
  return (
    <p className={styles.textBlock}>
      {props.children}
    </p>
  )
}

export default TextBlock;