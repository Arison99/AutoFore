import Nav from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import Card from './Components/Card-Container/Card';
import FeatureSection from './Components/Feauture/FeatureSection';
import PricingTable from './Components/Table/pricingTable.jsx';
import Footer from './Components/Footer/footer.jsx';
import './App.css';

function App() {
  return (
    <>
    <Nav />
    <Home />
    <Card/>
    <FeatureSection/>
    <PricingTable/>
    <Footer/>
    </>
  );
}

export default App;
