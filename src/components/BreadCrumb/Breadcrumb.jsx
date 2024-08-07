import { Link } from "react-router-dom";

export default function Breadcrumb({ paths = [{ name: "home", path: "/" }] }) {
  return (
    <>
      {paths && paths.length > 0 && (
        <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
          {paths.map((path, index) => (
            <span key={path.path} className="flex items-center">
              <Link
                to={path.path}
                className={`hover:underline ${
                  index === paths.length - 1 ? "text-red-600" : "text-gray-600"
                }`}
              >
                {path.name}
              </Link>
              {index < paths.length - 1 && (
                <span className="mx-2 text-gray-500 rtl:-scale-x-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
