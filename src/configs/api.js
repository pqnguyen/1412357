const API_URL = "http://35.237.169.69:4000/api";

//account api
export const accountAPI = {
    ACCOUNT_GET_INFO: `${API_URL}/account`,
    ACCOUNT_CREATE_NEW: `${API_URL}/create_account`,
}

//transfer api
export const transferAPI = {
    TRANSFER_BY_ADDRESS: `${API_URL}/transfer`, 
}