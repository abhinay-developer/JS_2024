

export function createAccount() {
    var customer = {
        aadharNo: 1000001,
        panCard: "AZ1991",
        age: 17
    }
    if (customer.age >= 18) {
        return "ACCOUNT CREATED SUCCESSFULLY";
    } else {
        return "AGE IS NOT ELEGIBLE TO CREATE ACCOUNT";
    }
}
