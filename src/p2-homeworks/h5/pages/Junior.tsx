import HW6 from "../../h6/HW6";
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";
import {Provider} from "react-redux";
import store from "../../h10/bll/store";


export const Junior = () => {
    return (
        <div>
            <HW6/>
            <HW7/>
            <HW8/>
            <HW9/>
            <Provider store={store}>
                <HW10/>
            </Provider>

        </div>
    )
}