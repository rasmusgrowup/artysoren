import Link from "next/dist/client/link";

type NavProps = {
    color?: "white" | "red" | "black";
};

export default function Nav({ color = "black" }: NavProps) {
    return (
        <nav
            className={`absolute top-0 left-0 right-0 block md:flex justify-between px-6 py-4 ${
                color === "white" ? "text-white" : color === "red" ? "text-red-400" : "text-black"
            }`}
        >
            <Link href="/"><h1 className="flex-initial text-3xl pb-6 md:pb-0">Søren Holberg</h1></Link>
            <ul className="flex flex-initial items-center gap-6">
                <li><Link className="cursor-pointer hover:underline underline-offset-6" href="/ommig">Om Mig</Link></li>
                <li><Link className="cursor-pointer hover:underline underline-offset-6" href="/originaler">Originaler</Link></li>
                <li><Link className="cursor-pointer hover:underline underline-offset-6" href="/bestilvaerk">Bestil Værk</Link></li>
                <li><Link className="cursor-pointer hover:underline underline-offset-6" href="/kontakt">Kontakt</Link></li>
            </ul>
        </nav>
    )
}