import axios from "axios";


var MealAxios = axios.create({
    baseURL: 'https://react-zoran-default-rtdb.firebaseio.com'
});

export default MealAxios;