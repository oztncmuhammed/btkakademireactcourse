import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductList from "./Components/ProductList";

export default function App() {
  return (
    //boş açılış kapanış etiketleri fragment olarak kullanılır
    <>
      <Header />
      <div className="container mt-5">
        <ProductList />
        <Footer />
      </div>
    </>
  );
}
