import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-xl w-full text-center bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-2">404</h1>
        <p className="text-xl text-gray-600 mb-6">Page not found.</p>

        <p className="text-sm text-gray-500 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="flex justify-center gap-3">
          <Button
            onClick={() => navigate("/")}
            type="submit"
            variant="primary"
            loading={false}
            disabled={false}
          >
            Go Back
          </Button>

          <Button
            onClick={() => navigate("/")}
            type="submit"
            variant="outline"
            loading={false}
            disabled={false}
          >
            {" "}
            Go home{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
