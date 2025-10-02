// src/components/Creator.jsx
import Carousel from "./Carousel"; // ajusta la ruta si tu Carousel está en otra carpeta
import anto_psi from "../assets/img/anto_psi.jpg";
import anto_rojo from "../assets/img/anto_rojo.jpg";
import anto_seis from "../assets/img/anto_seis.jpg";

export default function Creator() {
  const images = [anto_psi, anto_rojo, anto_seis];

  return (
    <section id="creadora" className="py-16">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-top">
        {/* Texto */}
        <div>
          <h2 className="text-3xl font-extrabold">Sobre la creadora</h2>
          <p className="mt-3 text-ink-soft">
            Soy <strong>Antonia Moreno, psicóloga y bailarina amateur.</strong>
          </p>
          <p className="mt-3 text-ink-soft">
            <strong>
              Ayudo a bailarinas (y a madres de bailarinas) que sienten que sus
              recuerdos se pierden entre diplomas, papeles y fotos
            </strong>
            , a darles un lugar especial y lleno de sentido,{" "}
            <strong>transformando cada logro en parte de su historia en la danza.</strong>
          </p>
          <p className="mt-3 text-ink-soft">
            En mis más de <strong>30 años bailando,</strong> siempre sentí la necesidad de
            guardar mis recuerdos. También lo vi en mi madre, que llenaba scrapbooks y
            enmarcaba diplomas.
          </p>
          <p className="mt-3 text-ink-soft">
            Hoy, como madre de una pequeña bailarina, vuelvo a vivir ese anhelo:{" "}
            <strong>guardar cada paso y logro con el valor que merecen.</strong>
          </p>
          <p className="mt-3 text-ink-soft">
            Por eso creé el{" "}
            <strong>
              Danzario: un producto vivo y terapéutico que organiza, protege y honra la
              historia de cada bailarina, en cualquier etapa de su vida.
            </strong>
          </p>
        </div>
        {/* Carrusel reutilizando tu componente */}
        <Carousel
          images={images}
          aspect="aspect-[3/2] md:aspect-[4/5]"   // alto visual similar al h-[360px], pero responsivo
          interval={4500}                        // autoplay cada 4.5s (tu default)
          altPrefix="Creadora Danzario"
        />

      </div>
    </section>
  );
}
