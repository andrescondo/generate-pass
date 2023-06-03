
module.exports.CHARACTER = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '0123456789',
    '!@#$%^&*()+_-=}{[]|:;"/?.><,`~'
]

let characterConcat = '';

/** generate number of password length
 * 
 * @param type Number position max the character in array
 * @param value Number value the index
 * @param text String value the character concat
 * */
const concatCharacter = (type = 0, value = 0, text = '') => {
    let index = value;
    characterConcat = text + this.CHARACTER[index];

    if (index === type) return characterConcat;
    index++;
    concatCharacter(type, index, characterConcat)

}

/** generate number of password length
 * 
 * @param pass String text the password
 * @param type Number value the type of data
 * 
 * @returns String status message the password
 * */
module.exports.validateFormat = (pass='', type=0) => {
    concatCharacter(type, 0)
    let status = false;

    for (const key in pass) {
        status = characterConcat.includes(pass[key]);

        if (!status) {
            return 'The password does not comply with the format';
        };
    }

    return 'the formate the password is ok'
}

/** generate number of password length
 * 
 * @param min Number value minimum
 * @param max Number value maximum
 * 
 * @return number random
 * */
module.exports.generateLength = (min, max) => {
    try {
        return Math.floor(Math.random() * (max - min + 1) + min);
    } catch (error) {
        return 1;
    }
}

/** validate parameters the request
 * 
 * @param min Number value minimum
 * @param max Number value maximum
 * @param type Number value the type value
 * @param err Object Body the error
 * 
 * @return void
 * */
module.exports.validateParameters = (min, max, type, err) => {
    validateNumber(min, err)
    validateNumber(max, err)
    validateNumber(type, err)

    if (type > 3 || type < 0) {
        err.message = "Enter a number (0, 1, 2, 3) to choose the type";
        throw err;
    }

    if (min < 2) {
        err.message = 'The minimum value 2';
        throw err;
    }

    if (max > 1000) {
        err.message = 'The maximum value 1000';
        throw err;
    }
}

/** validate number
 * 
 * @param number Integer value
 * @param err Object body the error
 * 
 * @return void
 * */
const validateNumber = (number, err) => {
    if (!Number.isInteger(number)) {
        err.message = 'Parameters must be numeric and integers'
        throw err;
    }

}