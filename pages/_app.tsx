import "./styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../components/utils/AuthContext";
import { ToastContainer } from "react-toastify";
import HeaderComp from "../layout/header/header";

export default function App({ Component, pageProps }: AppProps) {
 
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </AuthContextProvider>
  );
}
