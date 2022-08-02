import ProductsList from './components/ProductsList/index.productslist';
import CarProduct from './components/Buy/index.buy';
import logo from './BurguerKenzie.png'

import './App.css';
import { useEffect, useState } from 'react';




function App() {
  const [isProduct, setisProduct] = useState([])
  const [filteredProducts, setFilteredProducts] = useState(isProduct);
  const [currentSale, setCurrentSale] = useState([])
  const [inputSearch, setinputSearch] = useState("")
  

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(response => response.json())
    .then(json => {setisProduct(json); setFilteredProducts(json)})
    .catch((err) => console.log(err))
    
  }, [])

  function handleClick(productId) {
      const found = isProduct.find((elem) => elem.id === productId)
      setCurrentSale([...currentSale, found])
      
  }

  function showProducts(event){
    event.preventDefault()

    if(inputSearch === ""){
    setFilteredProducts(isProduct)
    
   }
    if(inputSearch !== ""){
  
      const itens = isProduct.filter((elem) => {
      const find = inputSearch.toUpperCase()
      const element = elem.category.toUpperCase()
      const elementName = elem.name.toUpperCase()
        if (element.includes(find) || elementName.includes(find) ){
          return elem
        }

      })
      if(itens.length > 0){
        setFilteredProducts(itens)
      }
    }
   }
 
 console.log(filteredProducts)


  return (<>
    <header>
        <img src={logo} alt={"BurguerKenzie"}/>
        <div className='Input'>
        <form onSubmit={showProducts}>
        <input 
        onChange={(event) => setinputSearch(event.target.value)}
        type='text' 
        placeholder="Digite sua pesquisa"
        ></input>
        <button className='Button-Search' type='submit'>Pesquisar</button>
        </form>
        </div>
      </header>
    <div className="App">
           
      <ProductsList isProduct={filteredProducts} setisProduct={setisProduct} handleClick={handleClick}/>
      <CarProduct currentSale={currentSale} setCurrentSale={setCurrentSale}/>
      
    </div>
    </>);
}

export default App;
