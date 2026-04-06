import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
  const [bannerItems, setBannerItems] = useState([]);
  const [current, setCurrent] = useState(0);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [loading, setLoading] = useState(true);

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


  // 🌐 Fetch Categories
  useEffect(() => {
    fetch("https://enjoy-backend-api.onrender.com/api/categoriesmenu")
      .then(res => res.json())
      .then(data => {
        setCategories(Array.isArray(data) ? data : []);
      })
      .catch(err => console.error("Category Error:", err));
  }, []);

  // 🌐 Fetch Posts
  useEffect(() => {
    fetch("https://enjoy-backend-api.onrender.com/api/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Post Error:", err);
        setLoading(false);
      });
  }, []);

  // 🎯 Filter Logic
  const filteredPosts =
    activeTab === "All"
      ? posts
      : posts.filter(post =>
        typeof post.category === "object"
          ? post.category?.name === activeTab
          : post.category === activeTab
      );

  // const [activeTab, setActiveTab] = useState("All");
  // const items = category[activeTab];

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

        <div>
          <h2 className="text-2xl font-bold text-gray-800 p-6">
            Category List
          </h2>

          <div className="w-full p-5">

            {/* 🔥 Tabs */}
            <div className="flex gap-3 mb-6 justify-end flex-wrap">

              {/* All Tab */}
              <button
                onClick={() => setActiveTab("All")}
                className={`btn ${activeTab === "All" ? "btn-primary" : "btn-outline"
                  }`}
              >
                All
              </button>

              {/* Category Tabs */}
              {Array.isArray(categories) &&
                categories.map(cat => (
                  <button
                    key={cat._id}
                    onClick={() => setActiveTab(cat.name)}
                    className={`btn ${activeTab === cat.name ? "btn-primary" : "btn-outline"
                      }`}
                  >
                    {cat.name}
                  </button>
                ))}
            </div>

            {/* 🔄 Loading */}
            {loading ? (
              <div className="text-center py-10 text-gray-500">
                Loading posts...
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

                {filteredPosts.length === 0 ? (
                  <p className="col-span-full text-center text-gray-500">
                    No posts found
                  </p>
                ) : (
                  filteredPosts.map(post => (
                    <div
                      key={post._id}
                      className="card bg-base-100 shadow-md hover:shadow-lg transition"
                    >
                      <figure>
                        <img
                          src={
                            post.image_big ||
                            "https://via.placeholder.com/300"
                          }
                          alt={post.title}
                          className="h-32 w-full object-cover"
                        />
                      </figure>

                      <div className="card-body p-3">
                        <h2 className="text-sm font-semibold line-clamp-2">
                          {post.title}
                        </h2>
                      </div>
                    </div>
                  ))
                )}

              </div>
            )}
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
