import { DropDown } from "@/components/DropDown/DropDown";
import { useOptions } from "@/Context/OptionsContext";




const logo =
    <svg viewBox="0 0 145 28" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path d="M138.731 11.402c0-.614.593-.933 1.322-.933.635 0 1.15.246 1.514.677a.432.432 0 0 0 .533.106l1.742-.93a.434.434 0 0 0 .137-.65c-.926-1.186-2.329-1.82-3.926-1.82-2.348 0-4.332 1.297-4.332 3.618 0 4.007 5.883 3.096 5.883 4.758 0 .66-.638.978-1.573.978-.911 0-1.584-.35-1.982-.967a.43.43 0 0 0-.564-.15l-1.8.961a.437.437 0 0 0-.162.615c.893 1.429 2.459 2.205 4.508 2.205 2.44 0 4.584-1.183 4.584-3.642 0-4.189-5.884-3.141-5.884-4.826M130.237 19.494h-1.294a.863.863 0 0 1-.863-.861V14.01a5.84 5.84 0 0 1 5.846-5.834h.001c.474 0 .859.383.859.857v1.3a.858.858 0 0 1-.859.858h-.002a2.822 2.822 0 0 0-2.824 2.82v4.62a.863.863 0 0 1-.864.862M120.471 17.002c-1.733 0-3.078-1.297-3.078-3.141s1.345-3.141 3.078-3.141c1.756 0 3.102 1.297 3.102 3.14 0 1.845-1.346 3.142-3.102 3.142m0-9.15c-3.353 0-6.02 2.617-6.02 6.009 0 3.391 2.667 6.01 6.02 6.01 3.353 0 6.043-2.619 6.043-6.01 0-3.392-2.69-6.01-6.043-6.01M110.009 4.495h-1.216a.862.862 0 0 0-.863.862V15.727c0 2.863 1.206 4.105 4.709 3.895a.866.866 0 0 0 .81-.862v-.98a.865.865 0 0 0-.876-.86c-1.117.007-1.701-.197-1.701-1.193v-4.734h1.714a.862.862 0 0 0 .863-.862v-1.1a.863.863 0 0 0-.863-.86h-1.714V5.356a.863.863 0 0 0-.863-.862M100.26 17.002c-1.733 0-3.078-1.297-3.078-3.141s1.345-3.141 3.078-3.141c1.756 0 3.102 1.297 3.102 3.14 0 1.845-1.346 3.142-3.102 3.142m0-9.15c-3.353 0-6.02 2.617-6.02 6.009 0 3.391 2.667 6.01 6.02 6.01 3.353 0 6.043-2.619 6.043-6.01 0-3.392-2.69-6.01-6.043-6.01M88.383 7.867a4.907 4.907 0 0 0-3.81 1.365 4.908 4.908 0 0 0-3.81-1.365c-2.585.205-4.525 2.465-4.525 5.054v5.914c0 .476.387.861.863.861h1.295a.862.862 0 0 0 .863-.861V12.85c0-.99.724-1.877 1.712-1.974a1.903 1.903 0 0 1 2.092 1.89v6.069c0 .476.385.861.863.861h1.294a.862.862 0 0 0 .864-.861V12.85c0-.99.724-1.878 1.711-1.974 1.134-.11 2.091.78 2.091 1.89v6.069c0 .476.387.861.863.861h1.295a.862.862 0 0 0 .863-.861V12.92c0-2.589-1.94-4.85-4.524-5.054M68.94 16.915c-1.73 0-3.072-1.293-3.077-3.132v-.018c.005-1.839 1.348-3.132 3.078-3.132 1.756 0 3.101 1.298 3.101 3.141 0 1.844-1.345 3.141-3.101 3.141m0-9.15c-1.13 0-2.18.303-3.078.828V4.479A.862.862 0 0 0 65 3.618h-1.216a.862.862 0 0 0-.863.861v9.334h.002c.02 3.372 2.68 5.97 6.018 5.97 3.352 0 6.043-2.617 6.043-6.009 0-3.392-2.69-6.009-6.043-6.009M55.539 10.546c1.228 0 2.254.636 2.76 1.65H52.8c.505-1.014 1.526-1.65 2.739-1.65Zm3.134 5.331c-.318-.17-.72-.138-.98.112-.55.529-1.3.84-2.154.84-1.237 0-2.274-.663-2.767-1.711a.434.434 0 0 1 .387-.626h7.616a.808.808 0 0 0 .807-.805c0-3.391-2.69-6.009-6.043-6.009s-6.02 2.618-6.02 6.01 2.667 6.01 6.02 6.01a6.03 6.03 0 0 0 4.448-1.917c.379-.408.25-1.068-.24-1.33l-1.074-.574ZM45.197 14.783c0 1.11-.958 2-2.092 1.89-.988-.097-1.711-.984-1.711-1.975V8.713a.863.863 0 0 0-.863-.861h-1.295a.862.862 0 0 0-.863.861v5.985c0 .991-.724 1.878-1.712 1.974a1.903 1.903 0 0 1-2.092-1.889v-6.07a.862.862 0 0 0-.863-.861h-1.295a.863.863 0 0 0-.863.861v5.915c0 2.588 1.94 4.849 4.525 5.053a4.908 4.908 0 0 0 3.81-1.364 4.907 4.907 0 0 0 3.81 1.364c2.584-.204 4.525-2.465 4.525-5.053V8.713a.863.863 0 0 0-.863-.861H46.06a.863.863 0 0 0-.863.861v6.07Z" fill="#151918"></path><path d="M13.891 0C6.22 0 .001 6.208.001 13.866c0 7.658 6.219 13.866 13.89 13.866 7.672 0 13.89-6.208 13.89-13.866C27.782 6.208 21.564 0 13.892 0Z" fill="#F51344"></path><path d="M21.656 18.476c0 .655-.548 1.181-1.211 1.146-.622-.032-1.088-.59-1.088-1.21v-2.536a.862.862 0 0 0-.863-.862h-2.59a.862.862 0 0 0-.863.862v3.462c0 .655-.549 1.18-1.212 1.146-.621-.033-1.087-.59-1.087-1.211v-3.397a.863.863 0 0 0-.864-.862H9.29a.862.862 0 0 0-.863.862v2.6c0 .655-.549 1.181-1.212 1.146-.622-.032-1.088-.59-1.088-1.21V9.255c0-.654.548-1.181 1.211-1.146.623.032 1.09.59 1.09 1.211v2.535c0 .476.385.862.862.862h2.59a.863.863 0 0 0 .863-.862V8.394c0-.654.548-1.18 1.21-1.146.623.032 1.09.59 1.09 1.211v3.397c0 .476.385.862.862.862h2.59a.862.862 0 0 0 .863-.862V9.321c0-.622.466-1.179 1.088-1.211a1.149 1.149 0 0 1 1.211 1.146v9.22Z" fill="#FFF"></path></g></svg>
    ;


export const NavBar = () => {
    const { options } = useOptions();
    const { isLoading } = useOptions();
    return (
        <nav className="fixed w-full bg-white h-20 box-shadow-custom flex items-center z-50">
            <div className="flex flex-wrap items-center justify-between w-11/12 h-full z-50 px-10 divide-x-0 divide-zinc-700">
                <a href="#" class="flex items-center ">
                    <div className="h-7">
                        {logo}
                    </div>
                </a>
                <div className="flex items-center justify-between h-full w-full md:flex md:w-auto">
                    <ul className="flex flex-row flex-wrap justify-between w-full h-full items-center">
                        <li
                            id="comprar"
                            className="menu-item flex items-center font-medium bordered-bottom hover:border-b-webmotors-red text-center px-4 h-full">
                            Comprar
                            <DropDown options={options.comprar} aria={"comprar"} />
                        </li>

                        <li id="vender"
                            className="menu-item flex items-center font-medium bordered-bottom hover:border-b-webmotors-red text-center px-4 h-full">
                            Vender
                            <DropDown options={options.vender} aria={"vender"} />
                        </li>
                        <li id="servicoes" className="menu-item flex items-center font-medium bordered-bottom hover:border-b-webmotors-red text-center px-4 h-full">

                            Serviços
                            <DropDown options={options.servicos} aria={"servicoes"} />

                        </li>
                        <li
                            id="noticias"
                            className="menu-item flex items-center font-medium bordered-bottom hover:border-b-webmotors-red text-center px-4 h-full">
                            NotíciasWM1
                            <DropDown options={options.noticias} aria={"noticias"} />
                        </li>
                        <li
                            id="ajuda"
                            className="menu-item flex items-center font-medium bordered-bottom hover:border-b-webmotors-red text-center px-4 h-full">
                            Ajuda
                            <DropDown options={options.ajuda} aria={"ajuda"} />
                        </li>
                    </ul>
                </div>



                <div className="flex justify-end h-full w-3.5 items-center align-middle">
                    <div
                        className="inline-block h-100 w-0.5 self-stretch bg-zinc-300 opacity-100 dark:opacity-50">
                    </div>
                    <ul className="flex w-full gap-3 h-full items-center">
                        <li id="entrar" className="menu-item flex items-center font-medium bordered-bottom hover:border-b-webmotors-red text-center px-4 h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Entrar
                            <DropDown options={options.usuario} aria={"entrar"} />
                        </li>

                        <li className="flex mx-auto cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </li>

                        <li className="flex mx-auto cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}