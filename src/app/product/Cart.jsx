// Cart.js
import datos from './datos.json';
export default function Cart( {addProduct}) {

  return (
    <section className='main-container'>
      <div className='cards-container'>
       {datos.map(product =>
          <div className="product-card" key={product.id}>
            <img src={product.img} alt="" />

            <div className="product-info">
              <div>
                <p>{product.precio}</p>
                <p>{product.name}</p>
              </div>
              {/* <figure>
                <img src={logo} alt="" />
              </figure> */}
            </div>
            <button onClick={() => addProduct(product)} className="primary-button">Add to Cart</button>
          </div>
        )}
      </div>
    </section>

  );
};
