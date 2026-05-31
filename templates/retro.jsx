export default function Retro404({ theme = "light" }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 font-mono ${
        isDark ? "bg-neutral-950" : "bg-neutral-100"
      }`}
    >
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor {
          display: inline-block;
          width: 9px;
          height: 1.1em;
          vertical-align: text-bottom;
          animation: blink 1s step-end infinite;
        }
      `}</style>

      <div className="w-full max-w-lg">
        <div
          className={`rounded-lg overflow-hidden shadow-xl border ${
            isDark
              ? "border-neutral-800 shadow-black/50"
              : "border-neutral-300 shadow-neutral-300/50"
          }`}
        >
          <div
            className={`flex items-center gap-1.5 px-4 py-3 ${
              isDark ? "bg-neutral-900" : "bg-neutral-200"
            }`}
          >
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span
              className={`ml-2 text-xs ${
                isDark ? "text-neutral-500" : "text-neutral-400"
              }`}
            >
              bash
            </span>
          </div>

          <div
            className={`px-6 py-5 space-y-1 text-sm leading-relaxed ${
              isDark
                ? "bg-neutral-950 text-green-400"
                : "bg-white text-green-700"
            }`}
          >
            <p className={isDark ? "text-neutral-600" : "text-neutral-400"}>
              Last login: {new Date().toDateString()}
            </p>

            <p>&nbsp;</p>

            <p>
              <span className={isDark ? "text-blue-400" : "text-blue-500"}>
                user@localhost
              </span>
              <span
                className={isDark ? "text-neutral-600" : "text-neutral-400"}
              >
                :~${" "}
              </span>
              <span>fetch /current-page</span>
            </p>

            <p>&nbsp;</p>

            <p className={isDark ? "text-red-400" : "text-red-500"}>
              ERROR 404 — Not Found
            </p>
            <p className={isDark ? "text-neutral-500" : "text-neutral-400"}>
              The requested resource does not exist.
            </p>

            <p>&nbsp;</p>

            <p>
              <span className={isDark ? "text-blue-400" : "text-blue-500"}>
                user@localhost
              </span>
              <span
                className={isDark ? "text-neutral-600" : "text-neutral-400"}
              >
                :~${" "}
              </span>
              <span>cd /home</span>
            </p>

            <p>
              <span className={isDark ? "text-blue-400" : "text-blue-500"}>
                user@localhost
              </span>
              <span
                className={isDark ? "text-neutral-600" : "text-neutral-400"}
              >
                :/home${" "}
              </span>
              <span
                className="cursor"
                style={{ background: isDark ? "#4ade80" : "#15803d" }}
              />
            </p>
          </div>

          <div
            className={`flex items-center justify-between px-5 py-2.5 text-xs ${
              isDark
                ? "bg-neutral-900 text-neutral-600"
                : "bg-neutral-200 text-neutral-400"
            }`}
          >
            <span>EXIT 404</span>
            <a
              href="/"
              className={`transition-colors ${
                isDark
                  ? "text-green-400 hover:text-green-300"
                  : "text-green-700 hover:text-green-800"
              }`}
            >
              → return home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
