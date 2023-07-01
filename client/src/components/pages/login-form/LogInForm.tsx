import { FormEvent, FunctionComponent, ReactElement , useState} from "react";
import Orders from "../orders/Orders";
import "./LoginForm.css";
import {Trackings } from "../../../interfaces/InitialData.interface";
export type Props = {
    data: Trackings[],
}

const LogInForm: FunctionComponent<Props> = ({ data }): ReactElement =>{

    const [errorMessages, setErrorMessages] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState('julian@parcellab.com');
    const checkEmailsFromData = data?.map((user: Trackings) => {
        return user.email;
    })

    const handleSubmit = (event: FormEvent) => {
        if(checkEmailsFromData?.includes(email)){
            setErrorMessages('')
            resetForm()
            setIsSubmitted(true)
        } else {
            setErrorMessages('Email not found.')
        }
        event.preventDefault();
    }

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value === ''){
            setErrorMessages('')
        }
        const getValue =  event?.target.value;

        setEmail(getValue)
    }

    const resetForm = () => {
        setEmail('')
    };

    const renderForm = (
        <form onSubmit={(e) => handleSubmit(e)} method="POST">
            <div className="login-container">
                <div className="form-header margin">
                    <div className="title">
                        <span>Please enter your email address to see your recent orders</span>
                    </div>
                </div>
                <div className="form-input">
                    <label>Email </label>
                    <input type="email"  value={email} onChange={onEmailChange} required />
                </div>
                <div>
                    {errorMessages}
                </div>
           
             <div className="form-button margin">
                <input className="submit-button" value="SEND" type="submit"/>
             </div>
            </div>
        </form>
     );
    
    return (
        isSubmitted ? <Orders data={data}/> : renderForm
    )
}

export default LogInForm;