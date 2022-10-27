import { getTable, loading } from "../slice/tableSlice";
import axios from "axios"

export const getItemsFetch = () => async(dispatch) => {
    dispatch(loading(false));
    try {
        const {data} = await axios.get("https://alex-fes3.herokuapp.com/api/item/get"); 
        dispatch(getTable(data))
    } catch (e) {
        console.log(e);
    }
  };

  export const postItemsFetch = (body) => async(dispatch) => {
    dispatch(loading(false));
    try {
        const {data} = await axios.post("https://alex-fes3.herokuapp.com/api/item/post", body); 
        console.log(data);
        dispatch(getItemsFetch())
    } catch (e) {
        console.log(e);
    }
  };
