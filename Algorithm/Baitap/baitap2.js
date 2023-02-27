function telecom(phoneNumbers) {
    let viettelPhoneNumbers = [];
    let mobifonePhoneNumbers = [];
    let vinaphonePhoneNumbers = [];
    for( let i = 0; i < phoneNumbers.length; i++) {
        let phoneNumber = phoneNumbers[i];
        if(phoneNumber.substring(0,3) === "092") {
            viettelPhoneNumbers.push(phoneNumber)
        } else if (phoneNumber.substring(0,3)=== "090") {
            mobifonePhoneNumbers.push(phoneNumber)
        } else if (phoneNumber.substring(0,3)=== "091") {
            vinaphonePhoneNumbers.push(phoneNumber)
        }
    } 
    return {
        "viettel" : viettelPhoneNumbers,
        "mobiphone" : mobifonePhoneNumbers,
        "vinaphone" : vinaphonePhoneNumbers
    };
}

let phoneNumbers = ["09221655859", "09004797505", "0914258989"];
let telecomOperator = telecom(phoneNumbers);

console.log(telecomOperator.viettel);

