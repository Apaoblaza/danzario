import { Link } from "../lib/router";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md space-y-6">
        <div className="text-5xl">🧭</div>
        <h1 className="text-3xl font-semibold">No encontramos la página que buscas.</h1>
        <p className="text-ink-soft">
          Puede que el enlace haya cambiado o que estés escribiendo una ruta que aún no existe en Danzario.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="rounded-xl px-5 py-3 font-semibold bg-brand text-white hover:bg-brand-dark transition"
          >
            Volver al inicio
          </Link>
          <Link
            to="/interesados"
            className="rounded-xl px-5 py-3 font-semibold border border-line text-ink hover:bg-background transition"
          >
            Ir a la lista prioritaria
          </Link>
        </div>
      </div>
    </div>
  );
}