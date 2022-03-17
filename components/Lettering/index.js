import styles from './Lettering.module.css';


function Lettering(props) {
  return (
    <div className={styles.lettering}>
      <h2>Oi, Bruno Dup aqui 😁</h2>
      <h3>
        <strong>Nômade digital</strong>,  <strong> designer digital</strong> e <strong> desenvolvedor web</strong>  com cerca de  12 anos de experiência, especialista em desenvolvimento para lojas virtuais e e-commerce, trabalhando hoje especialmente com <a href="https://vtex.com/br-pt/" target="_blank">Vtex</a> e <a href="https://www.shopify.com.br/" target="_blank">Shopify</a>. <br /> Meu foco é trazer qualidade e performance para sua loja e entregar com agilidade para que você possa começar a vender mais o mais breve possível.</h3>
    </div>
    // <div className={styles.lettering}>
    //   <h2>E-COMMERCE</h2>
    //   <h2>DESIGN</h2>
    //   <h2>DESENVOLVIMENTO WEB</h2>
    //   <h2>NOMADISMO DIGITAL</h2>
    //   <h2>MINIMALISMO</h2>
    // </div>
  )
}

export default Lettering;