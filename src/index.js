
const { generateLength, CHARACTER, validateParameters, validateFormat } = require('./utils/utils')


/** generate password random
 * 
 * @param min Number value minimum
 * @param max Number value maximum
 * @param type Number value the type value
 * 
 * @return String password
 * */
module.exports.generatePass =  (min = 8, max = 20, type = 2) => {
    let err = new Error();
    err.code = 400;

 validateParameters(min, max, type, err)

    let length = generateLength(min, max);

    let pass = "";

    for (let index = 0; index < length; index++) {
        let value = generateLength(0, type);
        let char = CHARACTER[value];
        let position = generateLength(0, char.length - 1);
        pass += char[position];

    }
    return pass;


}


/** validate password format
 * 
 * @param min Number value minimum
 * @param max Number value maximum
 * @param type Number value the type value
 * 
 * @return String message the status
 * */
module.exports.validatePass = (min, max, type = 2, pass) => {
    let err = new Error();
    err.code = 400;
    let message = '';

    validateParameters(min, max, type, err)

    let length = pass.length;

    if(length > max){
        message = "the password is too long";
    } else if(length < min){
        message = "the password is too short";
    } else {
        message = 'the formate the password is ok';
    }

    message = validateFormat(pass, type)

    return message;


}