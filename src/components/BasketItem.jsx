const BasketItem = ({ item }) => {
  return (
    <div className="rounded-2 p-4 bg-white d-flex justify-content-between align-items-center mb-5 text-black">
      <div className="d-flex align-items-center gap-3">
        <img width={60} height={60} src={item.image} />
        <h4>
          <span>{item.make} </span>
          <span>{item.model} </span>
        </h4>
        <h4 className="text-success">{item.price}₺</h4>
      </div>
      <div className="d-flex align-items-center gap-2">
        <span>Miktar: {item.amount}</span>
        <button className="btn btn-sm btn-primary">+</button>
        <button className="btn btn-sm btn-danger">X</button>
      </div>
    </div>
  );
};

export default BasketItem;
