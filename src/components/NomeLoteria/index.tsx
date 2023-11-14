
import styled from "styled-components"

interface Props{
    trevo:string;
    nome:string;
}

export default function NomeLoteria({trevo,nome}:Props){
return ( 
<Sld>
    <TrevoSld src={trevo}/>
      <NomeSld>{nome}</NomeSld>
      </Sld>
) }

const Sld = styled.div`
    display: flex;
`;

const TrevoSld = styled.img``

const NomeSld = styled.span`
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
    color: ${props => props.theme.loteria};
`
