export default function Simple404({ theme = "light" }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${
        isDark ? "bg-neutral-950" : "bg-white"
      }`}
    >
      <div className="text-center space-y-3">
        <h1
          className={`text-5xl font-semibold ${
            isDark ? "text-white" : "text-neutral-900"
          }`}
        >
          404
        </h1>
        <p className={isDark ? "text-neutral-400" : "text-neutral-500"}>
          This page could not be found.
        </p>
        <p
          className={`text-xs ${
            isDark ? "text-neutral-600" : "text-neutral-400"
          }`}
        >
          The requested URL was not found on this server.
        </p>
        <a
          href="/"
          className={`text-sm transition-colors underline ${
            isDark
              ? "text-neutral-400 hover:text-white"
              : "text-neutral-600 hover:text-neutral-900"
          }`}
        >
          Home
        </a>
      </div>
    </div>
  );
}
