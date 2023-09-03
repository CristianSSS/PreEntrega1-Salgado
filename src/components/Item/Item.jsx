import Button from "../Button/Button"
import ItemCount from "../ItemCount/ItemCount"
import "./Item.css";

export default function Item({data}){
    return(
        <article className="card-product">

            <img className="card-product__img" src={data.pictureUrl} alt="imagen" />
            <h3 className="card-product__title">{data.name}</h3>
            <span className="card-product__price">${data.price}</span>
            <p className="card-product__description">{data.description}</p>
            {/* <ItemCount initial={1} stock={10}/> */}
            <Button />

        </article>
    )
}