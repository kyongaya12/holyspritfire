import './App.css';
import Header from './components/Header';
// import Headers from './components/Headers';
import Footer from './components/Footer'
import Book from './components/Book'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import Video from './components/Video'
import Youtube from './components/buttons/Youtube'
import Website from './components/buttons/Website'
import Market from './components/buttons/Market'
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <>
  
      {/* <Header/> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/book" component={Book} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/about" component={About} />    
        <Route exact path="/youtube" component={Youtube} />
        <Route exact path="/website" component={Website} />
        <Route exact path="/market" component={Market} /> 
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
