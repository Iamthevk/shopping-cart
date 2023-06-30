function ProductCard() {
  return (
    <div className="w-96 h-96 border-4 rounded-xl p-2">
      <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1657641867367" />
      <div className="text-left  mt-3 p-2">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Apple</h1>
        <img src={"../src/assets/bookmark.svg"} className="w-8" />
        </div>
        <div className="flex justify-between items-center w-40">
        <span className="bg-green-500 p-2 text-white text-sm rounded-md">4.2 stars</span>
        <p className=" font-semibold">₹ 40000</p>
        </div>
       
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores!</p>
      </div>
    </div>
  );
}

export default ProductCard;
