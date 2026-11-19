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

export default function Home() {
    return (
        <main className="flex flex-col justify-center min-h-dvh pt-40 pb-20 md:pt-20 md:pb-20 px-6 text-red-400 relative">
            <Nav color={"red"}/>
            <div className="grid grid-cols-[repeat(auto-fill,150px)] md:grid-cols-[repeat(auto-fill,250px)] justify-between gap-9">
                {images.map((image, i) => (
                    <div key={i}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            draggable={false}
                            width="250"
                            height="600"
                        />
                        <p className="pt-3 font-mono text-sm">{image.alt}</p>
                    </div>
                ))}
            </div>
            <Footer color={"red"}/>
        </main>
    );
}
