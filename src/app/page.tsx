export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Bienvenue chez <span className="text-green-600">FLOW</span>
        </h1>
        <p className="mt-3 text-2xl">
          Cuisine de Saison
        </p>
      </main>
    </div>
  );
}
