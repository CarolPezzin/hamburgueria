import Product from "../Product/index.product";

import "./styles.css"

const ProductsList = ({isProduct,handleClick}) => {

    return(
        <ul>
            {
                isProduct.map(product =>
                    <Product 
                    id={product.id}
                    key={product.id}
                    img={product.img} 
                    name={product.name} 
                    category={product.category} 
                    price={product.price}
                    handleClick={handleClick}
                    />)
            }
        </ul>
    )
}
export default ProductsList