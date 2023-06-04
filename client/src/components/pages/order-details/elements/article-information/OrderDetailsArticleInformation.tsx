import { FunctionComponent, ReactElement } from "react";
import './OrderDetailsArticleInformation.css';
export type Props = {
    articleNo: string,
    quantity: number,
    articleImageUrl: string,
    product_name: string,
}

const OrderDetailsArticleInformation: FunctionComponent<Props> = ({articleNo, quantity, articleImageUrl,product_name }): ReactElement =>{
   
    return (
        <div key={articleNo} className="order-details-articles">
            <div className="article-details">
                <div className="quantity">
                    <span>{quantity}</span>
                </div>
                <div className="article-image-content">
                    <div className="image">
                        <img src={articleImageUrl} width={30} height={30} alt="img" />
                    </div>
                    <div className="article-information">
                        <div className="article-title">
                            <span>{product_name}</span>
                        </div>
                        <div className="article-number">
                            <span>{articleNo}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailsArticleInformation;