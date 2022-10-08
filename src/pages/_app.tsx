import "src/styles/globals.css";
import type { AppProps } from "next/app";

import UserProvider from "@contexts/UserContext";
import Menu from "@organisms/Menu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <div id="myapp-container">
        <Menu />
        <Component {...pageProps} />
      </div>
    </UserProvider>
  );
}

export default MyApp;
