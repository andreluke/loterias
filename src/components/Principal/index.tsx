import { HtmlHTMLAttributes } from "react"
import styled from "styled-components"

interface Props extends HtmlHTMLAttributes<HTMLElement>{};

export default function Principal({children}:Props){
return (
<Sld> {children} </Sld>
) }

const Sld = styled.div`
    display: flex;
    padding: 30px 0px;
    border-bottom: 1px solid #ddd;
`;

// .mega-bloco-estimativa {
//     width: 240px;
//     margin-left: 45px;
//     margin-top: 15px;
// }

// .mega-texto-estimativa {
   
// }


// .mega-linha-bola {
//     display: flex;
// }




// .mega-texto-acumulou {
//     font-size: 28px;
//     font-weight: bold;
//     color: #0066b3;
//     margin-top: 15px;
//     padding-left: 15px;
// }

// .mega-data-concurso {
//     margin-top: 15px;
//     color: #4c556c;
//     padding-left: 15px;
//     font-size: 15px;
// }
// 