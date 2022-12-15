import React from "react";
import ResumoItens from "../ResumoItens";
import * as c  from "./styles"

import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";



const Resumo = () => {
    return (
        <c.Container>  
            
            <ResumoItens title="Entradas" Icon={FaArrowCircleUp} value="1000"/>
            <ResumoItens title="Saídas" Icon={FaArrowCircleDown} value="1000"/>
            <ResumoItens title="Total" Icon={FaDollarSign} value="1000"/>

        </c.Container>
    )
}

export default Resumo 