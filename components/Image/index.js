import styles from './Image.module.css';


function Image(props) {
  return (
    <picture>
        <source srcset={props.srcDesktop} media="(min-width: 960px)" /> 
        <source srcset={props.srcMobile} />
        <img loading="lazy" data-src={props.srcDesktop} alt={props.title}  />
    </picture>
  )
}

export default Image;