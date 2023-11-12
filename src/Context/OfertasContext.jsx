import React, { createContext, useContext, useState, useEffect } from "react";
import api from "@/Constants/api";

export const OfertasContext = createContext();

export const OfertasProvider = ({ children }) => {

    const [ofertas, setOfertas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const data = async () => {
        try {
            const response = await api.ofertas()
            if (response.data) {
                setOfertas(response.data)
            }
        } catch (error) {
            console.error("Error fetching options:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        data()
    }, [])

    return (
        <OfertasContext.Provider value={{ ofertas }}>
            {isLoading ? (<div>Carregando...</div>) : (children)}
        </OfertasContext.Provider>
    )
}

export const useOfertas = () => {
    const context = useContext(OfertasContext)

    if (!context) {
        throw new Error("Error")
    }

    return context
}