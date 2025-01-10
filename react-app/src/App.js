import './App.css';

import star from "./assets/Star 1.png"
import example from "./assets/6014484247.jpg"

function Header() {
  return (
    <header>
        <div class="title">
            <img src={star} width="50px"/>
            <p class="title-text">Ink. House</p>
        </div>
        <div class="header-tabs">
            <button class="header-btn">Репродукции</button>
            <button class="header-btn">Новинки</button>
            <button class="header-btn">О нас</button>
            <button class="header-btn">Корзина</button>
        </div>
    </header>
  )
}

function Painting({ title, author, price, img}) {
  return (
    <div class="product-item">
      <img class="product-img" src={img}/>
      <p class="product-text">{author}</p>
      <p class="product-text">{title}</p>
      <p class="product-text">{price} р.</p>
      <button class="product-btn">Купить</button>
    </div>
  );
}

function Products() {
  return (
    <div class="products">
            <div class="products-header">
                <p class="title-text">Репродукции</p>
                <div class="products-tabs">
                    <button class="products-btn">Франция</button>
                    <button class="products-btn">Германия</button>
                    <button class="products-btn">Англия</button>
                </div>
            </div>
            <div class="products-content">
              <Painting title="Вечер" author="Автор" price="2000" img={example}/>
            </div>
        </div>
  );
}

function Footer() {
  return (
    <footer>
        <div class="container">
            <div class="footer-title">
                <div class="title">
                    <img src={star} width="40px"/>
                    <p class="title-text">Ink. House</p>
                </div>
            </div>
            <div class="reproducts"><p class="footer-title-text">Репродукции</p></div>
            <div class="news"><p class="footer-title-text">Репродукции</p></div>
            <div class="about-us-content">
                <p class="footer-text">Художники</p>
                <p class="footer-text">Менеджеры</p>
            </div>
            <div class="about-us"><p class="footer-title-text">Репродукции</p></div>
            <div class="news-content">
                <p class="footer-text">2022</p>
                <p class="footer-text">2023</p>
                <p class="footer-text">2024</p>
            </div>
            <div class="reproducts-content">
                <p class="footer-text">Франция</p>
                <p class="footer-text">Германия</p>
                <p class="footer-text">Англия</p>
            </div>
            <div class="contacts">
                <p class="footer-text">Менеджеры</p>
            </div>
        </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header/>
      <Products/>
      <Footer/>
    </>
  );
}

export default App;
