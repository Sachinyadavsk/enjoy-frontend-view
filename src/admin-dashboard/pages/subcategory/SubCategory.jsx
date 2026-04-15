import { useEffect, useState } from "react";
import API from "../../../shared/api/axios";
import { Link } from "react-router-dom";

const SubCategory = () => {
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const res = await API.get("/subcategories");
        console.log("Fetched subcategories:", res.data);
        setSubCategories(res.data.data);
      } catch (err) {
        console.error("Error fetching subcategories:", err);
      }
    };

    fetchSubcategories();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;
    try {
      await API.delete(`/subcategories/${id}`);
      // Remove from UI instantly
      setData(data.filter((item) => item._id !== id));
      alert("Subcategory deleted successfully");
    } catch (err) {
      console.error("Delete error", err);
      alert("Delete failed");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Subcategory List</h2>

      <div className="table table-responsive">
        <table className="w-full border">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Slug</th>
              <th className="p-2 text-left">Category ID</th>
              <th className="p-2 text-left">Photo</th>
              <th className="p-2 text-left">Banner</th>
              <th className="p-2 text-left">Menu</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {subCategories.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.slug}</td>
                <td className="p-2">{item.category_id}</td>
                <td className="p-2">{item.photo}</td>
                <td className="p-2">{item.banner}</td>
                <td className="p-2">
                  {item.show_on_menu ? "Yes" : "No"}
                </td>
                <td className="p-2 space-x-2">
                  <Link
                    to={`/admin/subcategory/edit/${item._id}`}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubCategory;
