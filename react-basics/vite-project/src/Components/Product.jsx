//Fonksiyon Çeşidi1
// const ProductList = function () {};
//Fonksiyon Çeşidi2->Arrow Function
// const ProductList = () => <h2>Product List</h2>;

//JSX Expression ile tanımlamalar öncesinden yapılıp sonrasında süslü parantezler içinde kullanılabilir.
export default function Product({ productObject }) {
  if (!productObject.isActive) {
    return null; // Eğer ürün aktif değilse hiçbir şey render edilmez.
  }
  return (
    <div className="card shadow-sm">
      <img
        className="card-img-top p-2 p-md-3 border-bottom"
        src={"/img/" + productObject.image}
        alt=""
      />
      <div className="card-body">
        <h2 className="cart-title">{productObject.title}</h2>
        <p className="card-text">{productObject.description}</p>
        <span className="badge text-bg-success">{productObject.price} TL</span>
      </div>
    </div>
  );
}
