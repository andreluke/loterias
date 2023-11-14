import trevo from "../../assets/trevo-timemania.png";
import { useLoteria } from "../../hooks";
import {
  Principal,
  Esquerda,
  Direita,
  Resultado,
  NomeLoteria,
  Estimativa,
  Acumulou,
  Data,
  Carregando,
} from "../../components";

export default function Timemania() {
  const { timemania: sorteio } = useLoteria();

  return (
    <>
      {sorteio.dataApuracao ? (
        <Principal>
          <Esquerda>
            <NomeLoteria trevo={trevo} nome="TIMEMANIA" />
            <Estimativa
              dataProximoConcurso={sorteio.dataProximoConcurso}
              valorEstimadoProximoConcurso={
                sorteio.valorEstimadoProximoConcurso
              }
            />
          </Esquerda>
          <Direita>
            <Resultado dezenas={sorteio.dezenas} />
            <Acumulou quantidadeGanhadores={sorteio.quantidadeGanhadores} />
            <Data
              numeroDoConcurso={sorteio.numeroDoConcurso}
              dataPorExtenso={sorteio.dataPorExtenso}
            />
          </Direita>
        </Principal>
      ) : (
        <Carregando />
      )}
    </>
  );
}
