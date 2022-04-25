import axios from 'axios';


const CATALOG_REST_API_URL = 'http://127.0.0.1:8080/api/catalog/';


class ProductService{
    getLoadedNotesAfter(daysFromToday=0){
        return axios.get(CATALOG_REST_API_URL + 'find_count_by_date_range?days=' + daysFromToday+ '&schemaName=productCatalogNote');
    }
    getLoadedAppsAfter(daysFromToday=0){
        return axios.get(CATALOG_REST_API_URL + 'find_count_by_date_range?days=' + daysFromToday + '&schemaName=productCatalogFitment');
    }

    getLoadedNotesOn(daysFromToday=0){
        return axios.get(CATALOG_REST_API_URL + 'find_count_by_date?days=' + daysFromToday + '&schemaName=productCatalogNote');
    }

    getLoadedAppsOn(daysFromToday=0){
        return axios.get(CATALOG_REST_API_URL + 'find_count_by_date?days=' + daysFromToday + '&schemaName=productCatalogFitment');
    }
    getMDMTotalNotes(){
        return 80; //dummy value 
    }
    getMDMTotalApps(){
        return 80; //dummy value 
    }
}

export default new ProductService();