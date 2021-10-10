import Link from 'next/link';
import styles from './thumb.module.css';

import Icon from '../Icon';

function Thumb(props) {
  return (
    <div className={`${styles.thumb} ${props.gridItem} ${styles[props.gridItem]}`}>
      <Link href={`/project/${props.link}`}>
        <div className={styles.thumbItem}>
        <h3>{props.name}</h3>
        {/* <Icon path={props.icon} /> */}
        </div>
      </Link>
    </div>
  )
}

export default Thumb;