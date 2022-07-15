import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import Cart from './containers/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<h1>This is Home Component</h1>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' exact element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route path='/*' element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;