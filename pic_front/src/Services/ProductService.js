import axios from 'axios';


const PROD_REST_API_URL = 'http://127.0.0.1:8080/api/product/';


class ProductService{
    getLoadedAfter(daysFromToday=0){
        return axios.get(PROD_REST_API_URL + 'find_count_by_date_range?days=' + daysFromToday);
    }

    getLoadedOn(daysFromToday=0){
        return axios.get(PROD_REST_API_URL + 'find_count_by_date?days=' + daysFromToday);
    }
    getMDMTotal(){
        return 80; //dummy value 
    }
}

export default new ProductService();