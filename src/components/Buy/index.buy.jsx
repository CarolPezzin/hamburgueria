import ShopCar from "../Shop/index.shop"
import './styles.css'
import Cart from "../Cart/index.cart"
const CarProduct = ({currentSale, setCurrentSale}) => {

    function removeItem(id) {
        const removeItem = currentSale.filter((elem) => elem.id !== id)
        setCurrentSale(removeItem)
    }

    return(
        <div>
        <div className='Head-CarProducts'>
            <h4 className="Title-CarProducts">Carrinho de Compras</h4>
        </div>
        <div className='CarProducts'>
        
            {
                currentSale.length > 0 ?
                (currentSale.map(product =>
                <ShopCar 
                    id={product.id}
                    key={product.id}
                    img={product.img}
                    name={product.name}
                    category={product.category} 
                    removeItem={removeItem} 
                    
                />
                
                ))
                :
                (<div className='CarProducts-empity'>
                <p className="empity-p">Sua sacola está vazia</p>
                <p className="empity-p-p">Adicione itens</p>
                </div>)
            }
           
        </div>
        {
            currentSale.length > 0 ?
            (<Cart currentSale={currentSale} setCurrentSale={setCurrentSale}/>)
            :
            (<></>)
        }
        </div>          
        )
}
export default CarProduct