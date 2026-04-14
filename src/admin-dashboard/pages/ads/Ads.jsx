import { useEffect, useState } from "react";
import API from "../../../shared/api/axios";

const Ads = () => {
  const [adsdata, setAdsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await API.get("/ads");

        console.log("API Response:", res.data);

        // ✅ Handle different API response structures
        const adsArray =
          res?.data?.data ||
          res?.data?.ads ||
          res?.data ||
          [];

        setAdsData(Array.isArray(adsArray) ? adsArray : []);
      } catch (err) {
        console.error("Error fetching ads:", err);
        setAdsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Ads List</h2>

      {/* ✅ Loading State */}
      {loading ? (
        <p className="text-gray-500">Loading ads...</p>
      ) : adsdata.length === 0 ? (
        /* ✅ Empty State */
        <p className="text-gray-500">No ads found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2 text-left">Placement</th>
                <th className="p-2 text-left">Size</th>
                <th className="p-2 text-left">Clicks</th>
                <th className="p-2 text-left">Banner</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {adsdata.map((item, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="p-2">{item.add_placement}</td>
                  <td className="p-2">{item.addSize}</td>
                  <td className="p-2">{item.click}</td>

                  {/* ✅ Image Preview */}
                  <td className="p-2">
                    {item.banner_image ? (
                      <img
                        src={item.banner_image}
                        alt="banner"
                        className="w-24 h-12 object-cover rounded"
                      />
                    ) : (
                      <span className="text-gray-400">No Image</span>
                    )}
                  </td>

                  {/* ✅ Status Badge */}
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-white text-sm ${
                        item.status === "active"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* ✅ Actions */}
                  <td className="p-2 space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Ads;