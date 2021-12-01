import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Collection } from "./components/Collection";
import { Produtos } from './components/Products';
import { Brands } from './components/Brands';
import { Newsletter } from "./components/Newsletter";
import { useEffect, useState } from "react";
import { Product } from "./@types";
import axios from "axios";


function App() {
  const brands = [
    {alt: 'brand1',source:'assets/images/brand1.png'},
    {alt: 'brand2',source:'assets/images/brand2.png'},
    {alt: 'brand3',source:'assets/images/brand3.png'},
    {alt: 'brand4',source:'assets/images/brand4.png'},
    {alt: 'brand5',source:'assets/images/brand5.png'}
  ]
  
  const [products, setProducts] = useState<Product[]>([] as Product[]);
  
  useEffect(() => {
    //Carrega do server os dados de produtos
    axios.get('http://localhost:3333/product')
    .then(result => {
      setProducts(result.data);
    })
    .catch(error => {
      console.log('puts', error);
    })
  },[])

  return (
    <div>
      <Header/>

      <main>
        <div className="container">
      
          <Collection />
          <Produtos items={products}/>
        </div>

        <Newsletter />

        <Brands items= {brands} />
      </main>

      <Footer/>
    </div>
  );
}

export default App;
