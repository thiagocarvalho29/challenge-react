import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import Img from "../../assets/home/logo.svg";
import axios from "axios";

import H1 from "../../components/Title"
import Button from "../../components/button"
import ContainerItens from "../../components/ContainerItems"


import {
    Container,
    Image,
    Input_label,
    Input
} from "./styles";

function App() {

    const [orders, setOrders] = useState([]);
    const input_order = useRef();
    const input_name = useRef();
    const History = useHistory();


    async function add_new_order() {
        const { data: new_order } = await axios.post("http://localhost:3001/orders", {
            order: input_order.current.value,
            name: input_name.current.value,
        })

        setOrders([...orders, new_order]);

        History.push("/orders")
    };


    return (
        <Container>

            <Image alt="Logo" src={Img} />

            <ContainerItens>

                <H1> Faça seu Pedido! </H1>

                <Input_label> Pedido </Input_label>
                <Input ref={input_order} placeholder="1 Coca-Cola, 1 X-Salada" required />

                <Input_label> Nome do Cliente </Input_label>
                <Input ref={input_name} placeholder="Nome"  required/>

                <Button onClick={add_new_order}>
                    Novo Pedido
                </Button>

            </ContainerItens>

        </Container>
    );
}
export default App