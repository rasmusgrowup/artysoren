type NavProps = {
    color?: "white" | "red" | "black";
};

export default function Footer({ color = "black" }: NavProps) {
    return (
        <footer
            className={`absolute bottom-0 left-0 right-0 flex justify-between px-6 py-4 ${
                color === "white" ? "text-white" : color === "red" ? "text-red-400" : "text-black"
            }`}
        >
            <p>Billedkunstner bosat på Sydfyn</p>
            <p>®2026</p>
        </footer>
    )
}