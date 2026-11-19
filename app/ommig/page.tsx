import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Page() {
    return (
        <main className="flex flex-col justify-center min-h-dvh pt-40 pb-20 md:pt-30 md:pb-30 px-6 text-red-400 relative">
            <Nav color={"red"}/>
            <div className="max-w-3xl space-y-6 md:text-xl">
                <h2 className="text-2xl md:text-3xl">Jeg hedder Søren Holberg og er billedkunstner bosat på Sydfyn.</h2>
                <p>
                    Jeg stræber efter at male motiver som afspejler hverdagens små momenter, hvor vi stopper op for at
                    trække vejret. De øjeblikke hvor vi rent faktisk observerer, ser og mærker det der er omkring os, og det
                    der betyder noget. Det kan være sollyset, der falder ind af vinduet, uvejret ude i horisonten eller en
                    ganske almindelig hverdagssituation som vi hver dag har så mange af.
                </p>
                <p>
                    Jeg har malet siden 2021, hvor jeg blev optaget af akvarellens muligheder for at bevæge sig mellem det
                    genkendelige og det flydende og mere abstrakte. Akvarellen tog mig med på en rejse, som har gjort, at
                    jeg nu er blevet billedkunstner og underviser, hvilket jeg før 2021 aldrig havde forestillet mig.
                </p>
                <p>
                    For mig er det at male, et rum hvor det indre får lov til at fylde, og alt det udenom ties. I et samfund
                    og en kultur hvor alting flyver af sted, er det nødvendigt at skabe sådanne rum for sig selv og andre,
                    og derfor ønsker jeg at give det videre, enten gennem undervisning eller mine malerier.
                </p>
                <p>
                    Søren Holberg
                </p>
            </div>
            <Footer color={"red"}/>
        </main>
    )
}