
import { createAccount } from "./createAccount.js";

function createAcc() {
    let isAccountCreated = createAccount();
    console.log(isAccountCreated);
}


createAcc();

/***
 * 
 * FOR NAMED EXPORT WE CAN USE METHOD NAME WHEN WE IMPORT THE FILE
 * 
 * FOR DEFAULT EXPORT WE CAN USE ANY NAME WITHOUT CURLY_BRACE
 *  
 */