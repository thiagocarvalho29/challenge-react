import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Img2 from "../../assets/orders/order.svg";
import Bin from "../../assets/orders/bin.svg";
import axios from "axios";

import H1 from "../../components/Title"
import Button from "../../components/button"
import ContainerItens from "../../components/ContainerItems"


import {
    Container,
    Image,
    Order
} from "./styles";

function Orders() {

    const [orders, setOrders] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function fetch_orders() {
            const { data: new_order } = await axios.get("http://localhost:3001/orders")

            setOrders(new_order)
        }
        fetch_orders()
    }, [orders])

    async function delete_order(order_id) {
        await axios.delete(`http://localhost:3001/orders/${order_id}`)

        const new_order = orders.filter(order => order.id !== order_id)

        setOrders(new_order);
    };

    function Push() {
        history.push("/")
    };


    return (
        <Container>

            <Image alt="order" src={Img2} />

            <ContainerItens>

                <H1> Pedidos </H1>

                <ul>
                    {orders.map(order => (
                        <Order key={order.id}>
                            <div>
                                <p>{order.order}</p>
                                <b><p>{order.name}</p></b>
                            </div>
                            <button onClick={() => delete_order(order.id)}>
                                <img alt="bin" src={Bin} />
                            </button>
                        </Order>
                    ))
                    }
                </ul>
                <Button is_back={true} onClick={Push}>
                    Voltar
                </Button>

            </ContainerItens>

        </Container>
    );
}
export default Orders