import axios from "axios";


export const requestApi = {

    postCheckboxVal: async(isChecked: boolean) => {
            return await axios.post(
                'https://neko-cafe-back.herokuapp.com/auth/test',
                {success: isChecked})
                .then((res) => res.data)
    }
}
