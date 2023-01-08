import { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer";
import { Page } from "./components/Page";
import { PreviewCard } from "./components/PreviewCard";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Page>
        <PreviewCard />
        <Footer />
      </Page>
      <GlobalStyle />
    </ThemeProvider>
  )
}
