import { ItemLojaOficial } from "@/components/ItemLojaOficial"

const data = [
    { title: "", image: "/assets/logos/hyundai.webp", link: "/hyundai" },
    { title: "", image: "/assets/logos/renaut.webp", link: "" },
    { title: "", image: "/assets/logos/suzuki.webp", link: "" },
    { title: "", image: "/assets/logos/toyota.webp", link: "" },
    { title: "", image: "/assets/logos/Nissan.png", link: "" },
    { title: "", image: "/assets/logos/Chevrolet.png", link: "" },



]


export const Body = () => {
    return (
        <div className="flex flex-col items-center justify-center mx-auto" style={{ maxWidth: "1200px" }}>
            <div className="title w-full my-3 font-semibold" id="title">
                <h1>Lojas Oficiais</h1>
            </div>
            <ItemLojaOficial data={data} />

        </div>
    )
}