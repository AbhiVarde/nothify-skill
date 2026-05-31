export default function Centered404({ theme = "light" }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${
        isDark ? "bg-neutral-950" : "bg-white"
      }`}
    >
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1
            className={`text-8xl font-bold ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            404
          </h1>
          <h2
            className={`text-2xl font-medium ${
              isDark ? "text-neutral-200" : "text-neutral-700"
            }`}
          >
            Oops! Page not found
          </h2>
          <p className={isDark ? "text-neutral-400" : "text-neutral-500"}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p
            className={`text-sm ${
              isDark ? "text-neutral-500" : "text-neutral-400"
            }`}
          >
            Please check the URL or return to the homepage.
          </p>
        </div>
        <a
          href="/"
          className={`inline-block px-6 py-2.5 rounded-md transition-colors text-sm font-medium ${
            isDark
              ? "bg-white text-neutral-900 hover:bg-neutral-100"
              : "bg-neutral-900 text-white hover:bg-neutral-800"
          }`}
        >
          Go back home
        </a>
      </div>
    </div>
  );
}
