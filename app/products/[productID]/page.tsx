/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
export default async function GetProductDetails({
  params,
}: {
  params: { productID: string };
}) {
  try {
    const response = await axios.get(
      `http://localhost:3000/products/${params.productID}`
    );
    const data = response.data;

    return (
      <div className="flex flex-wrap justify-center">
        <div className=" w-full sm:w-1/2 lg:w-2/4 p-4">
          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
              src="https://via.assets.so/img.jpg?w=1280&h=800&tc=blue&bg=#cecece&t=Course Image"
              alt=""
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.title}
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {data.description}
              </p>
              <Link
                href={"/products/update/" + data.id}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit Product
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-4"
              >
                Delete Product
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
}
