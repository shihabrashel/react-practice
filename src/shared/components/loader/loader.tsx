// src/components/Loader.tsx
import React from "react";
import "./loader.css"; // create CSS for spinner
import { useLoading } from "../../../context/loading-context";

const Loader: React.FC = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="loader-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
