import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Delicious from "./components/delicious/Delicious";
import Products from "./components/products/Products";
import OurContacts from "./components/ourContacts/ourContacts";
import Footer from "./components/footer/Footer";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Promo />
      <Delicious />
	  <Products />
      <OurContacts />
      <Footer />
      {/* <Footer/> */}
    </>
  );
}

export default App;
