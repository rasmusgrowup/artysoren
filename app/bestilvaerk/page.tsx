import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/dist/client/link";

export default function Page() {
    return (
        <main className="flex flex-col justify-center items-center min-h-dvh pt-40 pb-20 md:pt-20 md:pb-20 px-6 text-red-400 relative">
            <Nav color={"red"}/>
            <div className="space-y-6 text-center max-w-3xl md:text-xl">
                <h2 className="text-2xl md:text-4xl">Ønsker du at bestille et originalt værk?</h2>
                <p>
                    Jeg maler med akvaraller, og kan male alle størrelser. Jeg maler efter
                    fotografier, så hvis du har fanget et dejligt moment, en skulptur eller andet,
                    du vil have som et værk, maler jeg det gerne.
                </p>
                <p>
                    Du skal blot kontakte mig via instagram, hvor jeg svarer på din henvendelse.
                    Her kan du også se flere af mine værker og få indblik i mit kunsteriske virke.
                </p>
                <p>
                    Gå til min profil her: <Link target="_blank" className="underline underline-offset-9 hover:no-underline" href={"https://instagram.com/artysoren"}>artysoren</Link>
                </p>
            </div>
            <Footer color={"red"}/>
        </main>
    )
};