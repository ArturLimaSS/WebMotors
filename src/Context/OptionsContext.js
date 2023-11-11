import { createContext, useContext, useState, useEffect } from "react";
import api from "@/Constants/api";



const OptionsContext = createContext();

export const OptionsProvider = ({ children }) => {
    const [options, setOptionData] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    const getOptions = async () => {
        try {
            const response = await api.options();
            if (response.data) {
                setOptionData(response.data);
            }
        } catch (error) {
            console.error("Error fetching options:", error);
        } finally {
            setIsLoading(false);
        }
    };



    useEffect(() => {
        getOptions();
    }, []);

    return (
        <OptionsContext.Provider value={{ options, isLoading }}>
            {isLoading ? (<div>Carregando...</div>) : (children)}
        </OptionsContext.Provider>
    )
}

export const useOptions = () => {
    const context = useContext(OptionsContext);

    if (!context) {
        throw new Error('useOptions deve ser usado dentro do provider')
    }

    return context;
}