import CardProduto from "../CardProduto/CardProduto";
import styles from "./CardContainer.module.css"
import imageControle from "../../assets/controle_image.png"

function CardContainer() {
    return (
        <div style="display: flex">
            <CardProduto img={imageControle}/>
            <CardProduto />
            <CardProduto />
        </div>
    )
}

export default CardContainer;