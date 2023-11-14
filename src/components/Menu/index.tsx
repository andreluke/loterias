import { Link } from "react-router-dom";
import { useLoteria } from "../../hooks";
import "./index.css"
import { mega, quina, timemania } from "../styles/theme";

export default function Menu() {
  const { ativo, setAtivo, setTema } = useLoteria();

  return (
    <div>
      <Link
        to="/mega"
        className={ativo === "mega" ? "ativo" : "mega"}
        onClick={() => {
          setAtivo("mega");
          setTema(mega)
      }}
      >
        Megasena
      </Link>
      <Link
        to="/timemania"
        className={ativo === "timemania" ? "ativo" : "timemania"}
        onClick={() => {
          setAtivo("timemania");
          setTema(timemania)
        }}
        >
        Timemania
      </Link>
      <Link
        to="/quina"
        className={ativo === "quina" ? "ativo" : "quina"}
        onClick={() => {
          setAtivo("quina");
          setTema(quina)
      }}
      >
        Quina
      </Link>
    </div>
  );
}
