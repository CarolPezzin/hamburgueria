
import './styles.css'

const ShopCar = ({id,img,name,category,removeItem}) => {
    return(<>  
           <div className='Card-ShopCar'>
            <figure className='Card-Fig'>
                <img className='Card-img' src={img}/>
            </figure>
            <div className='Card-title-cat'>
            <h3 className='Card-title'>
                {name}
            </h3>
            <p className='Card-cat'>
                {category}
            </p>
            </div>
            <p className='Card-Shop-Btn' onClick={() => removeItem(id)}>
                Remover
            </p>
            </div>
                
        </>)
}
export default ShopCar