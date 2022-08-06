import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import dynamic from "next/dynamic";
import { PersistGate } from "redux-persist/integration/react";

/////////////////////
import "../styles/globals.scss";
import theme from "../src/utilities/theme/theme";
import Layout from "../src/components/layout/Layout";
import { persistor, store } from "../src/store/store";
import { Provider } from "react-redux";
import { fetcher } from "../src/service/fetcher";
const Notify = dynamic(() =>
  import("../src/utilities/Notification/Notification")
);

function MyApp({ Component, pageProps }) {
  return (
    <StyledThemeProvider theme={theme}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persisror={persistor}> */}
          <SWRConfig value={{ fetcher: fetcher }}>
            <Notify />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SWRConfig>
        {/* </PersistGate> */}
      </Provider>
    </StyledThemeProvider>
  );
}

export default MyApp;
