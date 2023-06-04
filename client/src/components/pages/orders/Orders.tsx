import { FunctionComponent, ReactElement, useState } from "react";
import './Orders.css'
import { Trackings } from "../../../interfaces/InitialData.interface";
import OrdersList from "../order-details/OrdersList";
import Tracking from "../tracking/Tracking";
import { motion } from "framer-motion"

export type Props = {
    data: Trackings[],
}

const Orders: FunctionComponent<Props> = ({data}): ReactElement =>{
    const [selectedOrder, setSelectedOrder] = useState<Trackings | null>(null);

    const handleCallbackButton = () => {
        setSelectedOrder(null);
    };
    const handleOrderClick = (order: Trackings) => {
      setSelectedOrder(order);
    };

    return (
      <div className="order-view">
          <div className="title">
              <span>{selectedOrder ? ' Tracking Information ': ' Your Orders' }</span>
          </div>

          <div className="order-cards">
              <div>
                  {selectedOrder ? (
                  <motion.div 
                      key={selectedOrder.id} 
                      className="order-carda"
                      initial={{ rotate: 45}}
                      animate={{ rotate: 0 }}
                  >
                      <Tracking trackingInformation={selectedOrder} handleCallbackButton={() => handleCallbackButton()} />
                  </motion.div>
                  ) : ( 
                    <OrdersList orders={data} onOrderClick={handleOrderClick} />
                  )}
              </div>
          </div>
      </div>
    )
}

export default Orders;