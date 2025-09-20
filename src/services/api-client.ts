import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1d2d8860b8784a5abcd7dce8ed51a953'
    }
});