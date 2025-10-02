export default function Unique() {
  const items = [
    { t: "Diseño", d: "Profesional, exclusivo y delicado, inspirado en la danza." },
    { t: "Guía", d: "Páginas con ejercicios de autoconocimiento y terapéuticos." },
    { t: "Crece", d: "Incorpora anexos, stickers, hojas para escribir y más."}
  ];
  return (
    <section id="unico" className="py-16 bg-background">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-extrabold">Lo que hace único al Danzario</h2>
        <p className="mt-2 text-ink-soft">Tus historia, resguardada en un espacio seguro.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <article key={i} className="card p-6">
              <h3 className="font-semibold">{it.t}</h3>
              <p className="mt-2 text-ink-soft">{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
