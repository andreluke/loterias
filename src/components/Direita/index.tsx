import { HtmlHTMLAttributes } from "react"
import styled from "styled-components"

interface Props extends HtmlHTMLAttributes<HTMLElement>{};

export default function Direita({children}:Props){
return (
<Sld> {children} </Sld>
) }

const Sld = styled.div`
margin-left: 50px;
`;