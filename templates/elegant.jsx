export default function Elegant404({ theme = "light" }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
        isDark ? "bg-neutral-950" : "bg-neutral-50"
      }`}
    >
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="space-y-4">
          <div
            className={`text-7xl md:text-8xl font-extralight tracking-tight ${
              isDark ? "text-neutral-200" : "text-neutral-700"
            }`}
          >
            404
          </div>

          <div className="space-y-2">
            <h1
              className={`text-xl font-normal ${
                isDark ? "text-neutral-100" : "text-neutral-800"
              }`}
            >
              Page Not Found
            </h1>

            <p
              className={`text-sm max-w-sm mx-auto leading-6 ${
                isDark ? "text-neutral-400" : "text-neutral-500"
              }`}
            >
              We couldn't find the page you're looking for. It might have been
              moved or deleted.
            </p>

            <p
              className={`text-xs ${
                isDark ? "text-neutral-500" : "text-neutral-400"
              }`}
            >
              If you believe this is an error, please contact support.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="/"
            className={`text-sm transition-colors ${
              isDark
                ? "text-neutral-400 hover:text-neutral-100"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Home
          </a>

          <span className={isDark ? "text-neutral-600" : "text-neutral-300"}>
            •
          </span>

          <button
            onClick={() => window.history.back()}
            className={`text-sm transition-colors ${
              isDark
                ? "text-neutral-400 hover:text-neutral-100"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
