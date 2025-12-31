"use client";

export default function Home() {
  const expressions = [
    { name: "Idle", file: "idle.png" },
    { name: "Wave", file: "wave.png" },
    { name: "Happy", file: "happy.png" },
  ];

  return (
    <main className="min-h-screen bg-[#f5f9ff] flex justify-center items-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-8">
        
        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h1 className="text-3xl font-bold text-[#0b3c8a]">
              Meet Dexy — Codex Mascot
            </h1>
            <p className="mt-2 text-gray-600">
              Friendly guide of the stablecoin era.
            </p>
          </div>

          <img
            src="/dexy/idle.png"
            alt="Dexy Idle"
            width={220}
            height={220}
          />
        </section>

        {/* Expressions */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[#0b3c8a] mb-6">
            Dexy Expressions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {expressions.map((item) => (
              <div
                key={item.name}
                className="bg-[#f5f9ff] rounded-2xl p-4 flex flex-col items-center"
              >
                <img
                  src={`/dexy/${item.file}`}
                  alt={item.name}
                  width={160}
                  height={160}
                />

                <p className="mt-3 font-medium text-gray-700">
                  {item.name}
                </p>

                <a
                  href={`/dexy/${item.file}`}
                  download
                  className="mt-2 text-sm px-4 py-1 rounded-full bg-white border hover:bg-gray-50"
                >
                  Download .png
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 flex justify-between text-sm text-gray-500">
          <div className="space-x-4">
            <span>Home</span>
            <span>Gallery</span>
            <span>About</span>
          </div>
          <p>Created for @codex_pbc</p>
        </footer>

      </div>
    </main>
  );
}
