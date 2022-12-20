import React from "react";
import ResumoItens from "../ResumoItens";
import * as c  from "./styles"

import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";



const Resumo = ({income, expense, total}) => {
    return (
        <c.Container>  
            
            <ResumoItens title="Entradas" Icon={FaArrowCircleUp} value={income}/>
            <ResumoItens title="Saídas" Icon={FaArrowCircleDown} value={expense}/>
            <ResumoItens title="Total" Icon={FaDollarSign} value={total}/>

        </c.Container>
    )
}

export default Resumo 