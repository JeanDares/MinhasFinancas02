import React, { useState } from "react"; 
import * as c from "./styles"


const Form = ( {handleAdd }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generareID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor");
            return;
        } else if (amount < 1) {
            alert ("O valor deve ser positivo");
            return;
        }

        const transaction = {
            id: generareID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };

    return (
        <>
           <c.Conteiner>
                <c.InputContent>
                    <c.Label>Descrição</c.Label>
                    <c.Input value={desc} onChange={(e) => setDesc(e.target.value)}/>
                </c.InputContent>

                <c.InputContent>
                    <c.Label>Valor</c.Label>
                    <c.Input  value={amount} type="number" onChange={(e) => setAmount(e.target.value) }/>
                </c.InputContent>

                <c.RadioGroup>
                    <c.Input type="radio" id="rIncome" defaultChecked name="group1" onChange={() => setExpense (!isExpense)}/>

                    <c.Label htmlFor="rIncome">Entrada</c.Label>

                    <c.Input type="radio" id="rExpense" name="group1" onChange={() => setExpense (!isExpense)}/>
                    <c.Label htmlFor="rExpense">Saída</c.Label>
                </c.RadioGroup>
                <c.Button onClick={handleSave}>ADICIONAR</c.Button>
           </c.Conteiner>
        
        </>
    )
}

export default Form