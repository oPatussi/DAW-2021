import imgBrand1 from "./assets/images/brand1.png";
import imgBrand2 from "./assets/images/brand2.png";
import imgBrand3 from "./assets/images/brand3.png";
import imgBrand4 from "./assets/images/brand4.png";
import imgBrand5 from "./assets/images/brand5.png";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Collection } from "./components/Collection";
import { Produtos } from './components/Products';
import { Brands } from './components/Brands';
import { Newsletter } from "./components/Newsletter";


function App() {
  const brands = [
    {alt: 'brand1',source:'assets/images/brand1.png'},
    {alt: 'brand2',source:'assets/images/brand2.png'},
    {alt: 'brand3',source:'assets/images/brand3.png'},
    {alt: 'brand4',source:'assets/images/brand4.png'},
    {alt: 'brand5',source:'assets/images/brand5.png'}

  ]
  return (
    <div>
      <Header/>

      <main>
        <div className="container">
          <div className="carousel">
            <div className="carousel-item">
              <div className="carousel-caption">
                <h5>Coleção</h5>
                <h4>Feminina <span>2021</span></h4>
                <p>Um texto aqui para falar um pouco sobre a coleção Feminina de 2021</p>
                <button>Conheça nossa coleção</button>
              </div>
            </div>

          </div>
          <Collection />
          <Produtos />
        </div>

        <Newsletter />

        <Brands items= {brands} />
      </main>

      <Footer/>
    </div>
  );
}

export default App;
