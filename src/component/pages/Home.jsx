import React from 'react'

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className='max-w-7xl mx-auto py-10 px-4'>
        <div className="max-w-3xl mx-auto ">
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
