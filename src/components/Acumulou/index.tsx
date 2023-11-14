
import styled from "styled-components";

interface Props {
    quantidadeGanhadores:number
}

export default function Acumulou({quantidadeGanhadores}: Props) {
  return (
    <Sld>
              {quantidadeGanhadores === 0
                ? "ACUMULOU!"
                : `${quantidadeGanhadores} GANHADORES`}
    </Sld>
  );
}

const Sld = styled.div`
 font-size: 28px;
    font-weight: bold;
    color: #0066b3;
    margin-top: 15px;
    padding-left: 15px;
`;