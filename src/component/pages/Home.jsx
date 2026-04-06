import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
// const slides = [
//   "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
//   "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
//   "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
//   "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
// ];

const category = {
  All: [
    { title: "Item 1", img: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" },
    { title: "Item 2", img: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" },
    { title: "Item 3", img: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" },
    { title: "Item 4", img: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" },
    { title: "Item 5", img: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" },
    { title: "Item 6", img: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" },
  ],
  Nature: [
    { title: "Nature 1", img: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" },
    { title: "Nature 2", img: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" },
  ],
  City: [
    { title: "City 1", img: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" },
  ],
};

const Home = () => {
  const [bannerItems, setBannerItems] = useState([]);
  const [current, setCurrent] = useState(0);

  // Fetch sliders using Axios
  useEffect(() => {
    axios.get("https://enjoy-backend-api.onrender.com/api/sliders")
      .then((response) => {
        const sliders = response.data.data || response.data.sliders || response.data;
      setBannerItems(Array.isArray(sliders) ? sliders : []);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

console.log("API Response:", bannerItems); // 👈 console data
  // Auto slide every 3 seconds
  useEffect(() => {
    if (bannerItems.length === 0) return; // 👈 prevent division by 0
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bannerItems]);

  const [activeTab, setActiveTab] = useState("All");
  const items = category[activeTab];

  return (
    <div className="bg-white min-h-screen">
      <div className='max-w-7xl mx-auto py-10 px-4'>
        <div className="mb-6">
          <div className="w-full overflow-hidden relative">
            <div className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${current * 100}%)` }}>
              {bannerItems.map((item, index) => (
                <img
                  key={index}
                  src={item.photo}
                  className="w-full flex-shrink-0 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover"
                />
              ))}
            </div>

            {/* Manual buttons */}
            <button
              onClick={() =>
                setCurrent((current - 1 + bannerItems.length) % bannerItems.length)
              }
              className="btn btn-circle absolute left-5 top-1/2">
              ❮
            </button>

            <button
              onClick={() => setCurrent((current + 1) % bannerItems.length)}
              className="btn btn-circle absolute right-5 top-1/2">
              ❯
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto ">
          <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
            <div class="flex">
              <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
              <div>
                <p class="font-bold">Video Hot section in display with latest</p>
              </div>
            </div>
          </div>
        </div>

        {/* video play section */}
        <div className="max-w-6xl mx-auto mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">Section Videos</h2>
          <div className="border rounded-lg shadow hover:shadow-lg transition duration-300 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="">
                <h3 className="text-lg font-bold text-gray-800">Video Hot section in display with latest</h3>
                <p className="text-lg text-gray-600">Check out our latest videos!</p>
              </div>
              <div className="">
                <img src="path/to/your/image.jpg" alt="Latest Video" />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl font-bold text-gray-800 p-6">Category List</h2>
          <div className="w-full p-5">

            {/* 🔥 Category Tabs */}
            <div className="flex gap-3 mb-6 justify-end flex-wrap">
              {Object.keys(category).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`btn ${activeTab === tab ? "btn-primary" : "btn-outline"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* 🔥 Grid Layout (6 columns) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {items.map((item, index) => (
                <div key={index} className="card bg-base-100 shadow-md">
                  <figure>
                    <img src={item.img} alt={item.title} className="h-32 w-full object-cover" />
                  </figure>
                  <div className="card-body p-3">
                    <h2 className="text-sm font-semibold">{item.title}</h2>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10">
          <h2 className="text-2xl font-bold text-gray-800 p-6">Featured Videos</h2>
          <div className="border rounded-lg shadow hover:shadow-lg transition duration-300 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="path/to/your/image.jpg" alt="Featured Video 1" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">Featured Video 1</h3>
                  <p className="text-gray-600">Description of the featured video.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="path/to/your/image.jpg" alt="Featured Video 2" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">Featured Video 2</h3>
                  <p className="text-gray-600">Description of the featured video.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="path/to/your/image.jpg" alt="Featured Video 3" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">Featured Video 3</h3>
                  <p className="text-gray-600">Description of the featured video.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
