import Image from "next/image"
import Link from "next/link"

export const ItemLojaOficial = ({ data }) => {
    return (
        <div className="p-3 flex flex-wrap flex-row gap-3 w-full justify-center">
            {data.map((item, index) => (
                <Link key={index} href="ofertas" className="flex p-5 text-center bg-cover items-center justify-center bg-white shadow-md rounded-full w-44 h-44 border-spacing-0"
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