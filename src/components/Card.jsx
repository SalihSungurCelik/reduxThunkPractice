import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/actions/basketActions";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="card pt-4" style={{ width: "18rem" }}>
      <div className="d-flex justify-content-center">
        <img src={product.image} width={200} height={200} className="rounded" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p>
          <span className="fw-bold me-2">{product.make}</span>
          <span>{product.model}</span>
        </p>
        <p className="d-flex flex-column">
          {product.specs.map((spec) => (
            <span>{spec}</span>
          ))}
        </p>
        <button
          onClick={() => dispatch(addToBasket(product))}
          className="w-100"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
