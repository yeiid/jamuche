
import "./product.css";
import datos from '@/mook/datos.json';
import ProductCart from "./ProductCart";
const Product = () => {
  return (
    <section className="main-container">
      <div className="cards-container">
        {datos.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
}

export default Product;
