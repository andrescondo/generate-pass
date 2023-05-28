
const { generateLength, CHARACTER, validateParameters } = require('./utils/utils')


/** generate password random
 * 
 * @param min Number value minimum
 * @param max Number value maximum
 * @param type Number value the type value
 * 
 * @return String password
 * */
module.exports.generatePass = async (min = 8, max = 20, type = 2) => {
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
    console.log(pass)
    return pass;


}