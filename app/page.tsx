import css from "./page.module.scss";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const images = [
    { src: "/shrooms.jpeg", alt: "Svampe 11/08/2025" },
    { src: "/roofs.jpeg", alt: "Hustage 10/04/2025" },
    { src: "/tree.jpeg", alt: "Træ 01/07/2025" },
    { src: "/vases.jpeg", alt: "Vaser 21/10/2024" },
    { src: "/lake.jpeg", alt: "Sø 09/09/2025" },
    { src: "/kitchen.JPG", alt: "Køkken 11/12/2026" },
];

function ImageSlider() {
    return (
        <div className={css.slider}>
            <div className={css.sliderTrack}>
                {[0, 1].map((copy) => (
                    <div
                        className={css.sliderGroup}
                        key={copy}
                        aria-hidden={copy === 1}
                    >
                        {images.map((image, i) => (
                            <div className={css.sliderItem} key={i}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    draggable={false}
                                    width="400"
                                    height="600"
                                />
                                <p className="pt-3 font-mono text-sm hidden">{image.alt}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Home() {
  return (
      <main className="flex flex-col justify-center h-dvh py-20 text-red-400 relative">
          <Nav color={"red"}/>
          <ImageSlider/>
          <Footer color={"red"}/>
      </main>
  );
}
