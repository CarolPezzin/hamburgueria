import React from "react"
import "./styles.css"

const Product = ({img,name,category,price, id, handleClick}) => {

    return(
        
        <li className="Card">
            <figure className="Card-li-fig">
                <img className="Card-Img" src={img} />
            </figure>
            <h3 className="Card-li-name">
                {name}
            </h3>
            <p className="Card-li-cat">
                {category}
            </p>
            <p className="Card-li-price">
                {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}    
            </p>
            <button className="Card-li-btn" onClick={() => handleClick(id)}>Adicionar</button>
        </li> 
       
    )
}
export default Product