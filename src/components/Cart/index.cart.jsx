
import './styles.css'

const Cart = ({currentSale, setCurrentSale}) => {
  
  
    const total = currentSale.reduce((oldePrice, actualPrice) => {
        console.log(actualPrice)
        console.log(oldePrice)
      return actualPrice.price + oldePrice
    },0)
    
  

  function removeShop(){
    setCurrentSale([])
  }
  
    return(
        <div className='Total'>
            <div className='Total-p-sec'>
            <p>Total</p>
            <section>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</section>
            </div>
            <button className='Total-btn' onClick={removeShop}>Remover Todos</button>
        </div>
    )

}
export default Cart