import React, {useState} from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {

  const [tema, setTema] = useState(false);

  const toggleTema = () =>{
    setTema((tema) => !tema);

  };
  console.log(toggleTema)
  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle/>
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;