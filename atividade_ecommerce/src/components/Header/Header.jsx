import styles from "./Header.module.css";
import cart from "../../assets/cart.png";
import heart from "../../assets/heart.png";
import search from "../../assets/search.png";

function Header() {
  return (
    <>
      <header className={styles.cabecalho}>
        <h1>Exclusive</h1>
        <nav>
            <ul className={styles.menu}>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign Up</li>
            </ul>
        </nav>
        <div className={styles.shop}>
            <div className={styles.busca}>
                <input 
                    className={styles.search}
                    type="text" 
                    placeholder="What are you looking for?"
                />
                <img className={styles.lupa} src={search}/>
            </div>
            <img src={heart} className={styles.icone}/>
            <img src={cart} className={styles.icone}/>
        </div>
      </header>
    </>
  );
}

export default Header;
