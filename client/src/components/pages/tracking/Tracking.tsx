import { FunctionComponent, ReactElement } from "react";
import { Trackings } from "../../../interfaces/InitialData.interface";
import './Tracking.css';
import OrderDetailsArticleInformation from "../order-details/elements/article-information/OrderDetailsArticleInformation";
import OrderDetailsTrackingInformation from "../order-details/elements/tracking-information/OrderDetailsTrackingInformation";
import OrderDetailsHeader from "../order-details/elements/header/OrderDetailsHeader";
import { v4 } from 'uuid';
export type Props = {
    trackingInformation: Trackings;
    handleCallbackButton: () => void;
}

const Tracking: FunctionComponent<Props> = ({ trackingInformation , handleCallbackButton}): ReactElement =>{

    const handleCallback = () => handleCallbackButton()

    const deliveryAddress = `${trackingInformation!.street}, ${trackingInformation!.zip_code} ${trackingInformation!.city}`
   
    return (
        <div>
            <div key={trackingInformation.id} className="order-information">
            <OrderDetailsHeader orderNo={trackingInformation.orderNo} address={deliveryAddress} />
            </div>
            <div className="order-card">
                <OrderDetailsTrackingInformation 
                    trackingNumber={trackingInformation.tracking_number}
                    checkpoints={trackingInformation.checkpoints}
                />
            </div>
            <div className="order-card">
            {
                trackingInformation.articles.map((article) => {
                    const isArticlesEmpty = Object.values(article).some(el => el === "")

                    if(isArticlesEmpty){
                        return  <div key={v4()} className="description">There are no products in the order</div>
                    }
                    else{
                        return (
                            <OrderDetailsArticleInformation 
                            key={article.articleNo}
                            articleNo={article.articleNo} 
                            quantity={article.quantity} 
                            articleImageUrl={article.articleImageUrl} 
                            product_name={article.product_name}
                        />
                        )
                    }
                    
                })
            }
            </div>
            <div className="form-button margin">
                <button id="back-button" type="button" onClick={handleCallback}>BACK</button>
            </div>
        </div>
    )
}

export default Tracking;