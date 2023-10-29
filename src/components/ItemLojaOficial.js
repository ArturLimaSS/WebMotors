import Image from "next/image"
import Link from "next/link"

export const ItemLojaOficial = ({ data }) => {
    return (
        <div className="p-3 flex flex-wrap flex-row gap-3">
            {data.map((item) => (
                <Link href="ofertas" className="flex p-5 text-center bg-cover items-center justify-center bg-white shadow-md rounded-full w-40 h-40 border-spacing-0"
                    style={
                        {
                            backgroundImage: `url(${ item.image })`,
                            backgroundPosition: "center",
                            backgroundOrigin: "content-box"
                        }}>
                </Link>
            ))}
        </div>
    )
}