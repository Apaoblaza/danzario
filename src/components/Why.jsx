export default function Why() {
  const cards = [
    { icon: "🗂️", title: "Organiza", desc: "Tus diplomas, fotos, recuerdos y momentos de danza." },
    { icon: "📖", title: "Notas Personales", desc: "Páginas creadas especialmente para tus reflexiones y vivencias." },
    { icon: "🌸", title: "Autoconocimiento", desc: "Ejercicios terapéuticos que te permitirán reconocer tu identidad como bailarina." },
    { icon: "🩰", title: "Honra tu esfuerzo y disciplina", desc: "Un objeto bello que permanece en el tiempo" },
  ];
  return (
    <section id="porque" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-extrabold text-brand">¿Por qué un Danzario?</h2>
        <p className="mt-2 text-ink-soft">
          Porque tus recuerdos de danza merecen un espacio especial, diseñado para que guardes y expreses tu historia.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <article key={i} className="card p-6">
              <div className="text-2xl">{c.icon}</div>
              <h3 className="mt-3 font-semibold">{c.title}</h3>
              <p className="text-ink-soft text-sm mt-1">{c.desc}</p>
            </article>
          ))}
        </div>
        <a href="#comprar" className="inline-block mt-8 rounded-xl px-5 py-3 font-semibold bg-brand text-white hover:bg-brand-dark transition">
          Quiero mi Danzario
        </a>
      </div>
    </section>
  );
}
