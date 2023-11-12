import '@/styles/globals.css';
import "../components/DropDown/DropDown.css";
import { OptionsProvider } from '@/Context/OptionsContext';
import { OfertasProvider } from '@/Context/OfertasContext';


export default function App({ Component, pageProps }) {
  return (
    <OfertasProvider>
      <OptionsProvider>
        <Component {...pageProps} />
      </OptionsProvider>
    </OfertasProvider>
  )
}
