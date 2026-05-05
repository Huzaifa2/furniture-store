import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BrowseOurCollection from './pages/BrowseOurCollection';
import CheckoutShippingInformation from './pages/CheckoutShippingInformation';
import SellerDashboardAddProduct from './pages/SellerDashboardAddProduct';
import TimelessHearth from './pages/TimelessHearth';
import WoodenDiningTableDetails from './pages/WoodenDiningTableDetails';
import YourShoppingCart from './pages/YourShoppingCart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-our-collection" element={<BrowseOurCollection />} />
        <Route path="/checkout-shipping" element={<CheckoutShippingInformation />} />
        <Route path="/seller-dashboard" element={<SellerDashboardAddProduct />} />
        <Route path="/timeless-hearth" element={<TimelessHearth />} />
        <Route path="/wooden-dining-table-details" element={<WoodenDiningTableDetails />} />
        <Route path="/your-shopping-cart" element={<YourShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
