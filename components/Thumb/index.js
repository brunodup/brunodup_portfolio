import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './thumb.module.css';

import Icon from '../Icon';

function Thumb(props) {

  const thumbContent =  <div className={styles.thumbItem}>
                          {
                            (
                              props.type === 'photo' ?
                                <img src="" />
                              :
                                props.type === 'icon' ? 
                                  <>
                                    <Icon path={props.icon} /> 
                                    <h3>{props.name}</h3>
                                  </>
                                : 
                                  <h4>
                                    {props.name}
                                    {/* <small className={styles.thumbSmall}>(em breve)</small> */}
                                  </h4>
                            )
                          }
                          </div>

  return (
    <div className={`${styles.thumb} ${props.gridItem} ${styles[props.gridItem]}`}>
        
      {
        props.target != "external" ?
        <Link href={`${props.link}`}>
          {thumbContent}           
        </Link>
        :
        <a href={`${props.link}`} target="_blank" className={styles.thumbLink}>
          {thumbContent}
        </a>

      }
    </div>
  )
}

export default Thumb;