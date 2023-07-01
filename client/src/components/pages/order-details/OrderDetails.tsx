import { FunctionComponent, ReactElement } from "react";
import './OrderDetails.css';
import { Trackings } from "../../../interfaces/InitialData.interface";
import { motion } from "framer-motion";

export type Props = {
    order: Trackings;
    onOrderClick: (order: Trackings) => void;
}
const OrderDetails: FunctionComponent<Props> = ({ order, onOrderClick}): ReactElement =>{

    const handleClick = () => {
        onOrderClick(order);
      };
    
      return (
        <motion.div
            className="order-carda"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                ease: "linear",
                duration: 0.5,
                x: { duration: 1 }
            }}
        >
            <div onClick={handleClick} className="order-card">
                <div key={order.id}>
                    <div className="order-card-information">
                        <div className="order-information">
                            <div className="order-number">
                                <div className="subtitle">
                                    <span>Order number</span>  
                                </div>
                                <div className="subtext">
                                    <span>{order.orderNo}</span>
                                </div>
                            </div>
                            <div className="current-status">
                                <div className="subtitle">
                                    <span>Current status</span>
                                </div>
                                <div className="subtext">
                                    <span>{order.checkpoints[0].status_text}</span>
                                </div>
                            </div>
                        </div>

                        <div className="delivery-address">
                            <div className="subtitle">
                                <span>Delivery address</span>
                            </div>
                            <div className="subtext">
                                <span>{`${order!.street}, ${order!.zip_code} ${order!.city}` }</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      );
}

export default OrderDetails;
