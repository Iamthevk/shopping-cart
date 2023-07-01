// eslint-disable-next-line react/prop-types
function ProductCard({rating,title,description,price,thumbnail}) {
  return (
    <div className="w-96 h-96 border-4 rounded-xl p-2">
      <img src={thumbnail} alt={title} className="h-56 w-full"/>
      <div className="text-left  mt-3 p-2">
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold">{title}</h1>
          <img src={"../src/assets/bookmark.svg"} className="w-8 h-8" />
        </div>
        <div className="flex justify-between items-center w-40 mb-3">
          <span className="bg-green-500 p-2 text-white text-sm rounded-md">
            {rating} stars
          </span>
          <p className="font-semibold">₹ {price}</p>
        </div>

        <p className=" truncate overflow-hidden text-ellipsis">{description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
