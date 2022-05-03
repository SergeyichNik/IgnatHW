import HW11 from "../../h11/HW11";
import HW12 from "../../h12/HW12";
import {Provider} from "react-redux";
import store from "../../h10/bll/store";
import HW13 from "../../h13/HW13";


export const JuniorPlus = () => {
    return (
        <div>
            <HW11/>
            <Provider store={store}>
                <HW12/>
            </Provider>
            <HW13/>
        </div>
    )
}