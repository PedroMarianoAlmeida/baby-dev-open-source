import "src/styles/globals.css";
import type { AppProps } from "next/app";

import Menu from "@organisms/Menu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="myapp-container">
      <Menu />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
