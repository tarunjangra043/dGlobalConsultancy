import "./App.css";
import Description from "./Components/Description/Description";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import ProductContainer from "./Components/ProductContainer/ProductContainer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <ProductContainer />
      <Description
        title="Great Product"
        description="This product is excellent for everyday use, offering high performance and reliability."
        imgSrc="https://imgs.search.brave.com/dD4YG-6rzTV2doB8mA4PZccfa61XGi9YQ8Hrn5HJ2Mk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/ODM1Mjc3NS9waG90/by9kYXRhLWNlbnRl/ci1pbi1zZXJ2ZXIt/cm9vbS13aXRoLXNl/cnZlci1yYWNrcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/aldBdkN2eVNMOGtP/YWF5QTJrVGZvejJZ/U1NtZHptYm51MjN3/Q1J1OEUwcz0"
        imgAlt="Product Image"
      />
      <Footer />
    </>
  );
}

export default App;
