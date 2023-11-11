import '@/styles/globals.css';
import "../components/DropDown/DropDown.css";
import { OptionsProvider } from '@/Context/OptionsContext';


export default function App({ Component, pageProps }) {
  return (
    <OptionsProvider>
      <Component {...pageProps} />
    </OptionsProvider>
  )
}
