"use client";

import axios from "axios";
import { ChangeEvent, SyntheticEvent, useState } from "react";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!title || !description || !image || !price) {
      setError("All fields are required");
    } else {
      try {
        await postData();
        setError("Product created successfully");
        setTitle("");
        setDescription("");
        setImage("");
        setPrice("");
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  async function postData() {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("price", price);

      const response = await axios.post(
        "http://localhost:3000/products/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="py-40 px-40">
      <h3 className="mb-10">Create Product</h3>
      <form onSubmit={handleSubmit}>
        <label className="block mb-3" htmlFor="title">
          Product Title
        </label>
        <input
          className="py-2 px-3 mb-5 w-1/2 text-black"
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitle}
        />
        <label className="block mb-3" htmlFor="description">
          Product Description
        </label>
        <textarea
          className="py-2 px-3 mb-5 w-1/2 text-black"
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={handleDescription}
        />
        <label className="block mb-3" htmlFor="price">
          Product Price
        </label>
        <input
          className="py-2 px-3 mb-5 w-1/2 text-black"
          type="text"
          name="price"
          id="price"
          value={price}
          onChange={handlePrice}
        />
        <label className="block mb-3" htmlFor="image">
          Image Url
        </label>
        <input
          className="py-2 px-3 mb-5 w-1/2 text-black"
          type="text"
          name="image"
          id="image"
          value={image}
          onChange={handleImage}
        />

        {error && <p>{error}</p>}
        <button
          className="block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}
