
module.exports.CHARACTER = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '0123456789',
    '!@#$%^&*()+_-=}{[]|:;"/?.><,`~'
];

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

    if (type > 3 || type < 1) {
        err.message = "Enter a number (1, 2, 3) to choose the type";
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