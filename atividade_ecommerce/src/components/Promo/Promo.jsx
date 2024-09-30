import styles from './Promo.module.css';

function Promo() {
    return (
        <div className={styles.fundo}>
            <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <a href=""> Shop Now</a>
            </p>
            <select className={styles.dropdown} name="" id="">
                <option className={styles.opcao}value="eng">English</option>
                <option value="">Spanish</option>
            </select>
        </div>
    )
}

export default Promo;