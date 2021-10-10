// https://brunodup-portfolio-brunodup.vercel.app/


function Icon(props) {
  return (
    <div className="container">
      <div className={`Item-${props.key}`}>
        <a href={props.link}>
         <Icon path={props.path} />
        </a>
      </div>
    </div>
  )
}

export default Icon;