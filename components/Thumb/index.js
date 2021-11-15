import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './thumb.module.css';

import Icon from '../Icon';

function Thumb(props) {

  return (
    <div className={`${styles.thumb} ${props.gridItem} ${styles[props.gridItem]}`}>
      {/* <Link href={`/project/${props.link}`}> */}
        <div className={styles.thumbItem}>
          <h3>
            {props.name}
            <small className={styles.thumbSmall}>(em breve)</small>
          </h3>
        {/* {
          props.icon? <Icon path={props.icon} /> : <h3>props.name</h3>
        } */}
        </div>
      {/* </Link> */}
    </div>
  )
}

export default Thumb;