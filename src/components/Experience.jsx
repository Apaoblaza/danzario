import llenado from "../assets/img/llenado_default.jpg"
export default function Experience() {
  return (
    <section id="experiencia" className="py-16 bg-background">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold">Vive la experiencia</h2>
          <p className="mt-3 text-ink-soft">
            No es solo un cuaderno: es un ritual para honrar tu camino con calma y constancia.
          </p>
          <ul className="mt-4 space-y-2 text-ink">
            <li>🏆 Ver todos tus diplomas, fotos y recuerdos reunidos en un solo lugar.</li>
            <li>🌻 Sentir la alegría de completar tu Danzario y revivir cada logro con emoción, belleza y memoria.</li>
            <li>✍️ Completar junto a tu hija su danzario y recordar juntas sus logros.</li>
            <li>♥️ Reconocer, agradecer y avanzar con mas fuerza en tu trayectoria, mediante ejercicios reflexivos guiados.</li>
            <li>📖 Estar orgullosa al hojear tus memorias de bailarina.</li>
          </ul>
        </div>
        <img
          src={llenado}
          alt="foto con hija"
          className="w-full h-[360px] object-cover card overflow-hidden"
        />
      </div>
    </section>
  );
}
