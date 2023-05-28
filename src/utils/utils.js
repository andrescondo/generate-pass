
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
        console.log(error)
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
module.exports.validateParameters = async (min, max, type, err) => {

    if(typeof(min) !== 'number' || typeof(max) !== 'number' || typeof(type) !== 'number'){
        err.message = "Parameters must be numeric";
        throw err;
    }

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