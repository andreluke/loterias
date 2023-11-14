import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props } from "../types";
// import loteria from "../services/Loteria";
import resultado from "../services/resultado";
import { mega } from "../components/styles/theme";

export const Contexto = createContext({} as LoteriaProps);

export function Provider({ children }: any) {
  const [megasena, setMegasena] = useState({} as Props);
  const [timemania, setTimemania] = useState({} as Props);
  const [quina, setQuina] = useState({} as Props);
  const [ativo, setAtivo] = useState("mega");
  const [tema, setTema] = useState(mega);

  useEffect(() => {
    (async function () {
      // const r = await loteria.get();
      const r = resultado;
      setMegasena(r.megasena);
      setTimemania(r.timemania);
      setQuina(r.quina);
      console.log(r);
    })();
  }, []);

  return (
    <Contexto.Provider
      value={{ megasena, timemania, quina, ativo, setAtivo, tema, setTema }}
    >
      {children}
    </Contexto.Provider>
  );
}