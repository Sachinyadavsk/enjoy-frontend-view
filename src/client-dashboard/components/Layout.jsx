// admin-dashboard/components/Layout.jsx
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar open={open} />
      
      <div style={{ flex: 1 }}>
        <Navbar toggle={() => setOpen(!open)} />

        <div style={{ padding: "20px" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;