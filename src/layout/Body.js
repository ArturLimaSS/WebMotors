import { ItemLojaOficial } from "@/components/ItemLojaOficial"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Categories } from "@/items/Categories";
import Link from "next/link";

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
        <div className="flex flex-col items-center justify-center mx-auto" style={{ width: "1200px" }}>
            <div id="lojas-oficiais" className="w-full flex flex-col">
                <div className="title w-full ml-14 my-3 font-semibold" id="title">
                    <h1>Lojas Oficiais</h1>
                </div>
                <ItemLojaOficial data={data} />
            </div>

            <div className="w-full">
                <div className="title w-full ml-14 my-3 font-semibold" id="title">
                    <h1>Categorias</h1>

                </div>

                <Swiper
                    cssMode={false}
                    slidesPerView={5}
                    spaceBetween={10}
                    navigation={true}
                    pagination={true}
                    mousewheel={false}
                    keyboard={true}
                    modules={[Navigation, Pagination, Keyboard]}
                    className="mySwiper"
                >

                    {Categories.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="border w-full h-full rounded-lg m-auto flex">
                                <Link href="ofertas" className="flex bg-cover items-end justify-center text-white font-normal shadow-md rounded-lg h-60 w-60 border-spacing-0"
                                    style={
                                        {
                                            backgroundImage: `url(${ item.CardDesktop })`,
                                            backgroundPosition: "center",
                                            backgroundOrigin: "content-box",
                                            backgroundRepeat: "no-repeat",
                                            fontSize: "22px"
                                        }}>
                                    <div className="w-full h-full flex items-end pb-4 pl-4 font-medium">
                                        {item.Nome}
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>

            
        </div>
    )
}