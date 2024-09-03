import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  setError,
  setLoading,
  setProducts,
} from "../redux/actions/productActions";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { getBasket } from "../redux/actions/basketActions";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.product);

  // console.log(state);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getBasket());
  }, []);

  return (
    <div>
      {/*veriler yükleniyorsa */}
      {state.isLoading && <Loading />}
      {/* hata olduysa */}
      {state.isError && (
        <p className="text-center my-5 fw-bold">
          Üzgünüz verileri alırken bir hata oluştu: <br /> {state.isError}
        </p>
      )}
      <div className="d-flex flex-wrap gap-5 justify-content-center my-5">
        {/* veriler yüklendiyse ve hata yoksa ekrana bas */}
        {state.products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
