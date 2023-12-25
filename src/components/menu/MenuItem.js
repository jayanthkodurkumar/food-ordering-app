export default function MenuItem() {
  return (
    <div className=" bg-gray-200 p-4 rounded-lg text-center hover:bg-white">
      <img src="/pizza.avif" alt="pizza" />
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className=" text-gray-500 text-sm"> Pepperoni Pizza</p>
      <button className="bg-primary text-white rounded-full px-8 py-2 mt-4">
        Add to cart $12
      </button>
    </div>
  );
}
