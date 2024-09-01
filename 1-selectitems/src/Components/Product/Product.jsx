import React, { useEffect } from "react";
import { Card } from "../Index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchproducts } from "../../store/features/productslice";
import Loader from "../Loader";
function Product() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.list.APidata);
  const loading = useSelector((state) => state.list.isLoading);

  useEffect(() => {
    dispatch(fetchproducts());
  }, []);
  return (
    <div className="flex mt-10  gap-4 items-center justify-center flex-wrap">
      {loading ? (
        <Loader />
      ) : (
        state?.map((items, index) => {
          return (
            <Card
              key={index}
              imgsrc={items.image}
              price={items.price}
              title={items.title}
              id={items.id}
            />
          );
        })
      )}
    </div>
  );
}

export default Product;
