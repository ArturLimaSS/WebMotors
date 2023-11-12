import { useOfertas } from "@/Context/OfertasContext";
import { useState } from "react"
import { Carousel } from "@/components/Carousel/Carousel"
import { RiSearch2Line } from "react-icons/ri"

export const Header = () => {

    const { ofertas } = useOfertas();
    const [quantidade, setQuantidade] = useState(ofertas[0].quantidade)
    const [searchType, setSearchType] = useState('carro')
    const switchData = async (e) => {
        if (!Array.isArray(ofertas)) {
            console.error('ofertas não é um array:', ofertas);
            return;
        }

        const oferta = ofertas.find((item) => item.title === `${e}`);

        if (oferta) {
            setQuantidade(oferta.quantidade)
            setSearchType(oferta.title)
        } else {
            console.log(`Nenhuma oferta encontrada para o título: '${e}' Array: ${typeof (ofertas)}`);
        }
    }


    return (
        <div className="mt-10">
            <Carousel />
            <div className="h-40 z-40 sticky d-flex items-center align-middle mx-auto justify-center w-full mb-3" style={{ zIndex: 40, maxWidth: "1000px", minWidth: "1000px" }}>

                <div className="flex flex-col h-25 bg-white border rounded-xl shadow-md p-6">
                    <div className="flex gap-6 mb-3">
                        <button className="p-2 bordered-bottom-colored font-bold" value="carro" onClick={(e) => switchData(e.target.value)}>Comprar Carros</button>
                        <button className="p-2 bordered-bottom-colored font-bold" value="moto" onClick={(e) => switchData(e.target.value)}>Comprar Motos</button>


                        <button className="p-2 bordered-bottom-colored font-bold">Quero vender</button>
                        <button className="p-2 bordered-bottom-colored font-bold">Quero financiar</button>

                    </div>
                    <div className="w-full flex gap-5 ">
                        <div className="border-2 rounded-lg flex w-full">
                            <div
                                className="flex items-center align-middle h-full w-15 focus:outline-none active:border-none decoration-none p-4 my-auto "
                                style={{ fontSize: "20px" }}>
                                <RiSearch2Line />
                            </div>
                            <input
                                type="text"
                                className="bg-transparent border-none w-full p-3 font-semibold"
                                placeholder={"Digite a marca ou modelo " + (searchType === "carro" ? "do " : "da ") + searchType} ></input>
                        </div>
                        <button className="bg-red-500 font-semibold w-72 rounded-lg p-3 text-white">
                            VER OFERTAS ({quantidade})
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}