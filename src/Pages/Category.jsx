import Marquee from "../Components/Marquee";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { Link, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import { products } from "../data/products";
import { useCarts } from "../useCarts";

const Category = () => {
  const params = useParams();
  // console.log("params", params);

  const categoryProducts = products.filter((p) => p.category === params.id);

  const { addCart } = useCarts();

  const handleAddCart = (product) => {
    addCart(product);
  };

  return (
    <div className="product-page-background">
      <Sidebar />

      <div className="gradient-background product-page-header">
        <Header />
      </div>

      <main className="product-page">
        <Marquee />

        <div className="product-page-inner">
          {categoryProducts.map((p) => (
            <div key={`${p.id}`} className="product-page-item">
              <img
                src={`/assets/img/png/${p.id}.png`}
                alt={`Nike ${params.id}'s Shoes`}
              />
              <h2>{p.name}</h2>
              <span>${p.price}</span>
              <Link
                to="/cart"
                className="call-to-action"
                onClick={() => handleAddCart(p)}
              >
                Add to Cart
              </Link>
            </div>
          ))}
        </div>
        <Marquee />
      </main>
      <Footer />
    </div>
  );
};

export default Category;
