import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/dist/client/link";

export default function Page() {
    return (
        <main className="flex flex-col justify-center min-h-dvh pt-40 pb-20 md:pt-30 md:pb-30 px-6 text-red-400 relative">
            <Nav color={"red"}/>
            <h2 className="text-4xl text-center">Kontakt mig via <Link target="_target" className="underline underline-offset-12 hover:no-underline" href={"https://instagram.com/artysoren"}>instagram</Link></h2>
            <Footer color={"red"}/>
        </main>
    )
};