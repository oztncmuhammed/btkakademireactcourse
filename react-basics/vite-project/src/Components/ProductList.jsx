import { items } from "../data";
import Product from "./Product";
export default function ProductList() {
  return (
    <>
      {items.length > 0 ? (
        <div
          className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4"
          id="product-list"
        >
          {items.map((item, index) => (
            <div className="col" key={index}>
              <Product
                // React'te her öğeye benzersiz bir anahtar (key) verilmelidir.
                productObject={item}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Şuan da satışta olan ürünümüz yok.</p>
      )}
    </>
  );
}
