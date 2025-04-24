/**
* Verifies whether an email address is a valid email address.
* @param {string} email - The email address to validate.* 
* @returns {boolean} Returns true if the email address is valid, false otherwise.
*/

const verifyEmail = (email) => {
    if (typeof email !== "string") {
    return false;
    }
    const emailRegex =  /^[\w!#$%&'*+/=?`{|}~^.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
    };
    export default verifyEmail;