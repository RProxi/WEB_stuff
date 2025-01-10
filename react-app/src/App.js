import './App.css';
import useRevenueStore from "./store"

import star from "./assets/Star 1.png"
import example from "./assets/6014484247.jpg"

function Header() {
  return (
    <header>
        <div className="title">
            <img src={star} width="50px"/>
            <p className="title-text">Ink. House</p>
        </div>
        <div className="header-tabs">
            <button className="header-btn">Репродукции</button>
            <button className="header-btn">Новинки</button>
            <button className="header-btn">О нас</button>
            <button className="header-btn">Корзина</button>
        </div>
    </header>
  )
}

function Painting({ title, author, price, img, handler}) {
  return (
    <div className="product-item">
      <img className="product-img" src={img}/>
      <p className="product-text">{author}</p>
      <p className="product-text">{title}</p>
      <p className="product-text">{price} р.</p>
      <button className="product-btn" onClick={handler}>Купить</button>
    </div>
  );
}

function Products() {
  const { count, buyPainting } = useRevenueStore();
  return (
    <div className="products">
            <div className="products-header">
                <p className="title-text">Репродукции</p>
                <div className="products-tabs">
                    <button className="products-btn">Франция</button>
                    <button className="products-btn">Германия</button>
                    <button className="products-btn">Англия</button>
                </div>
            </div>
            <p className="title-text">Куплено: {count}</p>
            <div className="products-content">
              <Painting title="Вечер" author="Автор" price="2000" img={example} handler={buyPainting}/>
            </div>
        </div>
  );
}

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="footer-title">
                <div className="title">
                    <img src={star} width="40px"/>
                    <p className="title-text">Ink. House</p>
                </div>
            </div>
            <div className="reproducts"><p className="footer-title-text">Репродукции</p></div>
            <div className="news"><p className="footer-title-text">Репродукции</p></div>
            <div className="about-us-content">
                <p className="footer-text">Художники</p>
                <p className="footer-text">Менеджеры</p>
            </div>
            <div className="about-us"><p className="footer-title-text">Репродукции</p></div>
            <div className="news-content">
                <p className="footer-text">2022</p>
                <p className="footer-text">2023</p>
                <p className="footer-text">2024</p>
            </div>
            <div className="reproducts-content">
                <p className="footer-text">Франция</p>
                <p className="footer-text">Германия</p>
                <p className="footer-text">Англия</p>
            </div>
            <div className="contacts">
                <p className="footer-text">Менеджеры</p>
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
