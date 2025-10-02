import Carousel from "./Carousel";

// 👇 Importa usando los nombres exactos del directorio
import portada from "../assets/img/Danzario_Portada.jpeg";
import stickers from "../assets/img/Stickers.jpeg";
import bailarina from "../assets/img/Danzario_logo.jpeg";
// Si quieres más slides, descomenta y agrégalos:
// import swan from "../assets/img/swan-2.JPG";
// import bird from "../assets/img/bird.JPG";

export default function Product() {
  const images = [
    portada,
    stickers,
    bailarina,
    // swan,
    // bird,
  ];

  return (
    <section id="producto" className="py-16">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
        <div className="card overflow-hidden">
          <Carousel images={images} aspect="aspect-[4/5]" altPrefix="Danzario" />
        </div>

        <div>
          <h2 className="text-3xl font-extrabold">Conócelo</h2>
          <p className="mt-3 text-ink-soft">
            Un espacio creado especialmente para bailarinas, donde cada logro y recuerdo encuentra un lugar seguro, bello y duradero.
          </p>
          <ul className="mt-4 space-y-2 text-ink">
            <li>🗂️ Fundas protectoras para diplomas y certificados</li>
            <li>📖 Hojas especiales para pegar tus fotos y recuerdos</li>
            <li>🌺 Hojas con diseño para tus notas</li>
            <li>♥️ Stickers de diseño exclusivo, para complementar tus notas y recuerdos</li>
            <li>✏️ Ejercicios guiados de autoconocimiento y terapéutico</li>
          </ul>

          <div className="mt-6 text-3xl font-extrabold text-brand">$49.990</div>
          <div className="text-xs text-ink-soft">Incluye IVA</div>

          <a
            href="#comprar"
            className="mt-6 inline-block rounded-xl px-5 py-3 font-semibold bg-brand text-white hover:bg-brand-dark transition"
          >
            Quiero mi Danzario
          </a>
        </div>
      </div>
    </section>
  );
}
