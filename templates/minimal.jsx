export default function Minimal404({ theme = "light" }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${
        isDark ? "bg-neutral-900" : "bg-neutral-50"
      }`}
    >
      <div className="text-center space-y-4">
        <h1
          className={`text-6xl font-light ${
            isDark ? "text-white" : "text-neutral-900"
          }`}
        >
          404
        </h1>
        <p
          className={`text-lg ${
            isDark ? "text-neutral-300" : "text-neutral-600"
          }`}
        >
          Page not found
        </p>
        <p
          className={`text-sm ${
            isDark ? "text-neutral-500" : "text-neutral-500"
          }`}
        >
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className={`inline-block mt-6 text-sm transition-colors ${
            isDark
              ? "text-neutral-400 hover:text-white"
              : "text-neutral-500 hover:text-neutral-900"
          }`}
        >
          Return home
        </a>
      </div>
    </div>
  );
}
