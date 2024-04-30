export default function CreateProduct() {
  return (
    <div className="py-40 px-40">
      <h3 className="mb-10">Create Product</h3>
      <form action="">
        <label className="block mb-3" htmlFor="title">
          Product Title
        </label>
        <input
          className="py-2 px-3 mb-5 w-1/2"
          type="text"
          id="title"
          name="title"
        />
        <label className="block mb-3" htmlFor="description">
          Product Description
        </label>
        <textarea
          className="py-2 px-3 mb-5 w-1/2"
          type="text"
          name="description"
          id="description"
        />
        <label className="block mb-3" htmlFor="price">
          Product Price
        </label>
        <input
          className="py-2 px-3 mb-5 w-1/2"
          type="text"
          name="price"
          id="price"
        />
        <label className="block mb-3" htmlFor="image">
          Image Url
        </label>
        <input
          className="py-2 px-3 mb-5 w-1/2"
          type="text"
          name="image"
          id="image"
        />

        <button className="block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Create
        </button>
      </form>
    </div>
  );
}
