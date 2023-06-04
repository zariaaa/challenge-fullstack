import { FunctionComponent, ReactElement } from "react";
import './OrderDetails.css';
import { Trackings } from "../../../interfaces/InitialData.interface";
import OrderDetails from "./OrderDetails";

export type Props = {
    orders: Trackings[];
    onOrderClick: (order: Trackings) => void;
}
const OrdersList: FunctionComponent<Props> = ({ orders, onOrderClick}): ReactElement =>{

    return (
        <div>
            {orders.map(order => (
                <OrderDetails key={order.id} order={order} onOrderClick={onOrderClick} />
            ))}
        </div>
    )
}

export default OrdersList;