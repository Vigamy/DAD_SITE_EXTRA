import styles from './SectionBar.module.css';
import relogio from '../../assets/relogio.png';
import seta from '../../assets/seta.png';

const SectionBar = ({titulo}) => {
    return (
        <div className={styles.containerHeader}>
            <h2>{titulo}</h2>
            <div className={styles.relogio}>
                <img src={relogio} alt="" />
            </div>
            <div className={styles.containerSetas}>
                <div className={styles.circle}>
                    <img src={seta} alt="" />
                </div>
                <div className={styles.circle}>
                    <img className={styles.rotate} src={seta} alt="" />
                </div>
            </div>
        </div>
    )
}


export default SectionBar;