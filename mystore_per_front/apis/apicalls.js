import { CUSTOMER,GROUP,PRODUCT, getCommonAxios } from "./Apis";

export const getCustomers = (email,callback) => {
 
    
  getCommonAxios()
    .get(CUSTOMER+`/email=${email}`)
    .then((response) => {
      console.log("response", response);
      callback(response, "OK_GET_Customers");
    })
    .catch((error) => {
      console.log("error", error);
      callback(error, "ERROR");
    });
};


export const postProduct = (product,callback) => {
    
        
    getCommonAxios()
        .post(PRODUCT,product)
        .then((response) => {
        console.log("response", response);
        callback(response, "OK_POST_Product");
        })
        .catch((error) => {
        console.log("error", error);
        callback(error, "ERROR");
        });
    }

    export const getProducts = (callback) => {


        getCommonAxios()
            .get(PRODUCT)
            .then((response) => {
            console.log("response", response);
            callback(response, "OK_GET_Products");
            })
            .catch((error) => {
            console.log("error", error);
            callback(error, "ERROR");
            });
        }

        export const postGroups = (groups,callback) => {

        getCommonAxios()
            .post(GROUP,groups)
            .then((response) => {
            console.log("response", response);
            callback(response, "OK_POST_Group");
            })
            .catch((error) => {
            console.log("error", error);
            callback(error, "ERROR");
            });
        }

        //get all groups
        export const getGroups = (callback) => {
                
                getCommonAxios()
                    .get(GROUP)
                    .then((response) => {
                    console.log("response", response);
                    callback(response, "OK_GET_Groups");
                    })
                    .catch((error) => {
                    console.log("error", error);
                    callback(error, "ERROR");
                    });
                }

    export const postCustomer = (customer,callback) => {
        console.log("customer",customer);
        getCommonAxios()
            .post(CUSTOMER,customer)
            .then((response) => {
            console.log("response", response);
            callback(response, "OK_POST_Customer");
            })
            .catch((error) => {
            console.log("error", error);
            callback(error, "ERROR");
            });
        }
