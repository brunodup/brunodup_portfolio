import styles from './quote.module.css';


function Quote(props) {
  return (
    <div className={styles.quote}>
      {props.children}
      <strong className={styles.quoteAuthor}>{props.author}</strong>
    </div>
  )
}

export default Quote;