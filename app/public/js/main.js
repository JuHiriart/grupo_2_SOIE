console.log('DOM loaded with JavaScript');

// ------------------------------
// ---------- Classes -----------
// ------------------------------

/** Validador de datos para los formularios.
 * 
 * @param {Object} rules - reglas de validación, cada regla es un objeto con la siguiente estructura:
 * 
 *       rules = {
 *           field1: [ rule1, rule2, ... ],
 *           field2: [ rule1, rule2, ... ],
 *          ...
 *       }
 * 
 *      Donde ruleN es un objeto con la siguiente estructura:
 * 
 *         ruleN = {
 *            func: 'nombre de la regla',
 *              -> nombre de la función que valida el campo, debe estar definida en valFuncs (ver abajo) o marcar 'custom'
 * 
 *            params: {param1, param2, ...},
 *              -> parámetros de la función de validación, si no hay parámetros, se puede omitir.
 *              -> Si se marco 'custom' en func, este parámetro es obligatorio y debe ser una función de validación.
 * 
 *            msg: 'mensaje de error',
 *              -> mensaje de error que se muestra si la validación falla.
 *              -> Si no se especifica, se usa el mensaje por defecto 'invalid value'.
 *        }
 * 
 * validate: función que valida los datos de un formulario.
 *    recibe un objeto con los datos a validar.
*/
class Validator {

    /*
        rules = {
            field1: [ rule1, rule2, ... ],
            field2: [ rule1, rule2, ... ],
        }
    
        rule = {
            func    : 'funcName',
            args    : {arg1, arg2, ...},
            msg     : 'message',
        }
    */
    constructor(rules) {

        this.rules = rules;

        this.valFuncs = {

            notEmpty: (value, obj, params) => value != '',

            isNumber: (value, obj, params) => !isNaN(value),

            isNumberBetween: (value, obj, params) => {
                let min = params.min ?? -Infinity;
                let max = params.max ?? Infinity;
                return value >= min && value <= max;
            },

            isString: (value, obj, params) => typeof value == 'string',

            isStringBetween: (value, obj, params) => {
                let length = value.split("").length;
                let min = params.min ?? 0;
                let max = params.max ?? Infinity;
                return length >= min && length <= max;
            },

            isName: (value, obj, params) => {
                let regex = /^[a-zA-Z]+$/;
                return regex.test(value);
            },

            isText: (value, obj, params) => {
                let regex = /^[a-zA-Z0-9]( )+$/;
                return regex.test(value);
            },

            isUppercase: (value, obj, params) => {
                let regex = /^[A-Z]+$/;
                return regex.test(value);
            },

            isLowercase: (value, obj, params) => {
                let regex = /^[a-z]+$/;
                return regex.test(value);
            },

            isDate: (value, obj, params) => typeof value == 'date',

            isDateBetween: (value, obj, params) => {
                let min = params.min?.getTime() ?? -Infinity;
                let max = params.max?.getTime() ?? Infinity;
                let date = new Date(value).getTime();
                return date >= min && date <= max;
            },

            isObject: (value, obj, params) => typeof value == 'object',

            isArray: (value, obj, params) => Array.isArray(value),

            isBoolean: (value, obj, params) => typeof value == 'boolean',

            isFunction: (value, obj, params) => typeof value == 'function',

            isNull: (value, obj, params) => value == null,

            isUndefined: (value, obj, params) => value == undefined,

            isEmail: (value, obj, params) => {
                let re = /\S+@\S+\.\S+/;
                return re.test(value);
            },

            isUrl: (value, obj, params) => {
                let re = /^(ftp|http|https):\/\/[^ "]+$/;
                return re.test(value);
            },

            isPhone: (value, obj, params) => { // es telefono ESPANOL
                //  regex to validate argentinian phone numbers
                let re = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
                return re.test(value);
            },

            isTelArgento: (value, obj, params) => { // es telefono ARGENTINO
                //eliminamos todo lo que no es dígito
                num = preg_replace( '/\D+/', '', value);
                //devolver si coincidió con el regex
                return preg_match(
                    '/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/D',
                    num
                );
            },

            isDni: (value, obj, params) => {
                let re = /^\d{8}[a-zA-Z]$/;
                return re.test(value);
            },

            isInList: (value, obj, params) => {
                let list = params.list;
                return list.includes(value);
            },

            matches: (value, obj, params) => {
                let regex = params.regex;
                return regex.test(value);
            },

            // isUnique:   ( value, obj, params ) => {
            //     let table = params.table;
            //     let field = params.field;

            //     let tabla = getTabla( table );
            //     return tabla.queryRows( { [field] : [value] } ).length == 0;
            // },

            // iscuenta:     ( value, obj, params ) => {
            //     let re = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}([A-Z0-9]?){0,16}$/;
            //     return re.test( value );
            // },

            isIBAN: (value, obj, params) => {

                let iban = value.toUpperCase();

                let smellsLikeIban = (str) =>
                    /^([A-Z]{2}[ \-]?[0-9]{2})(?=(?:[ \-]?[A-Z0-9]){9,30}$)((?:[ \-]?[A-Z0-9]{3,5}){2,7})([ \-]?[A-Z0-9]{1,3})?$/.test(str);

                const ibanStripped = iban.replace(/[^A-Z0-9]+/gi, '') //keep numbers and letters only
                    .toUpperCase(); //calculation expects upper-case
                const m = ibanStripped.match(/^([A-Z]{2})([0-9]{2})([A-Z0-9]{9,30})$/);
                if (!m) return false;

                const numbericed = (m[3] + m[1] + m[2]).replace(/[A-Z]/g, function (ch) {
                    //replace upper-case characters by numbers 10 to 35
                    return (ch.charCodeAt(0) - 55);
                });
                //The resulting number would be to long for javascript to handle without loosing precision.
                //So the trick is to chop the string up in smaller parts.
                const mod97 = numbericed.match(/\d{1,7}/g)
                    .reduce(function (total, curr) { return Number(total + curr) % 97 }, '');

                return (mod97 === 1);

            },

            custom: (value, obj, params) => {
                return params(value, obj);
            },

        }

        // this.ValidatorError = class ValidatorError extends Error {
        //     constructor( message, code ) {
        //         super( message );
        //         this.code = code;
        //     }
        // }

    }

    // returns an object with the validation status and the errors for each field
    validate(obj, verbose = false) {
        if (verbose) console.group(`Validating object: ${obj}\n`, obj);
        let errors = {};
        let success = true;
        // validate each field
        for (let field in this.rules) {
            if (errors[field]) continue;
            if (verbose) console.group(`Field:\t ${field}`);
            let value = obj[field];
            let rules = this.rules[field];
            let error = this.validateValue(value, obj, rules);
            if (verbose) console.groupEnd();
            if (error) errors[field] = error;
        }
        // check if there are errors
        if (Object.keys(errors).length > 0) success = false;
        let validationResult = { success, errors };
        if (verbose) console.log(`Validation result: ${validationResult.success ? 'passed' : 'failed'}`);
        if (verbose) console.groupEnd();
        return validationResult;
    }

    // returns the first error found
    validateValue(value, obj, rules) {
        // check if the field is required
        let isRequired = rules.some(rule => rule.func == 'notEmpty');
        // if the field is not required and it's empty, return false (no error)
        if (!isRequired && value == '') return false;
        // validate each rule
        for (let rule of rules) {
            let error = this.validateRule(value, obj, rule);
            if (error) return error;
        }
        // if no error found, return false (no error)
        return false
    }

    // returns an error message if the rule is not satisfied
    validateRule(value, obj, rule) {
        let func = this.valFuncs[rule.func];
        if (!func) {
            console.error('Invalid validation function');
            throw new Error('Invalid validation function:  ' + rule.func);
        }
        let valid = func(value, obj, rule.args);
        console.log(`func\t: ${func.name}\nvalue\t: ${value}\nresult\t: ${valid}`);
        if (!valid) return rule.msg ?? 'Invalid value';
    }

}

// ------------------------------
// ---------- Funciones ---------
// ------------------------------

/**
 * Esta funcion convierte un objecto DOM en un objeto JSON.
 * Esta pensado para convertir un formulario en un objeto JSON y pasar po un validador.
 * @param {HTMLElement} dom objecto DOM del formulario a validar
 * @returns objecto JSON con los datos del formulario
 */
function dom2obj(dom) {
    let obj = {};
    for (let field of dom) {
        obj[field.name] = field.value;
    }
    return obj;
}

// ------------------------------
// ------- Validaciones ---------
// ------------------------------

const validationRules = [ // reglas de validacion para cada formulario
    {
        form: 'formProducto',
        rules: {
            name: [
                { 
                    func: 'notEmpty',
                    msg : 'El nombre no puede estar vacío'
                },
            ],
            description: [
                { 
                    func: 'isStringBetween',
                    args: { min: 20, max: 100 },
                    msg : 'La descripción debe tener entre 20 y 100 caracteres'
                },
            ],
            price: [
                { 
                    func: 'notEmpty',
                    msg : 'El precio no puede estar vacío'
                },
                { 
                    func: 'isNumber',
                    msg : 'El precio debe ser un número'
                },
                { 
                    func: 'isNumberBetween',
                    args: { min: 0 },
                    msg : 'El precio debe ser mayor que 0'
                },
            ],
            off: [
                { 
                    func: 'isNumber',
                    msg : 'El descuento debe ser un número'
                },
                { 
                    func: 'isNumberBetween',
                    args: { min: 0, max: 100 },
                    msg : 'El descuento debe estar entre 0 y 100'
                },
            ],
            timeMinutes: [
                { 
                    func: 'notEmpty', msg: 'El tiempo no puede estar vacío'
                },
                { 
                    func: 'isNumber', msg: 'El tiempo debe ser un número'
                },
                { 
                    func: 'isNumberBetween',
                    args: { min: 0 }, msg: 'El tiempo debe ser mayor que 0'
                },
            ],
        }
    },
    {
        form: 'userForm',
        rules: {
            firstName: [
                {
                    func: 'notEmpty',
                    msg: 'El nombre no puede estar vacío'
                },
                {
                    func: 'isStringBetween',
                    args: { min: 2, max: 30 },
                }
            ],
            lastName: [
                {
                    func: 'notEmpty',
                    msg: 'El apellido no puede estar vacío'
                },
                {
                    func: 'isStringBetween',
                    args: { min: 2, max: 30 },
                },
            ],
            email: [
                {
                    func: 'notEmpty',
                    msg: 'El email no puede estar vacío'
                },
                {
                    func: 'isEmail',
                    msg: 'El email no es válido'
                }
            ],
            password: [
                {
                    func: 'notEmpty',
                    msg: 'La contraseña no puede estar vacía'
                },
                {
                    func: 'matches',
                    args: { regex : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{0,}$/ },
                    msg: 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número'
                },
            ],
            passCon: [
                {
                    func: 'notEmpty',
                    msg: 'Debes confirmar la contraseña'
                },
                {
                    func: 'custom',
                    args: (value, obj) => value == obj.password ,
                    msg: 'Las contraseñas no coinciden'
                },
            ],
            birth: [
                {
                    func: 'notEmpty',
                    msg: 'Debes ingresar tu fecha de nacimiento'
                },
                // {
                //     func: 'isDate',
                //     msg: 'La fecha de nacimiento no es válida'
                // },
                {
                    func: 'isDateBetween',
                    args: {
                        min: new Date(1900, 0, 1),
                        // maximal date update to get 18 years old
                        max: new Date(new Date().setFullYear(new Date().getFullYear() - 18))
                    },
                    msg: 'Debes ser mayor de 18 años'
                }
            ],
            address: [
                {
                    func: 'notEmpty',
                    msg: 'Debes ingresar tu dirección'
                },
                {
                    func: 'isStringBetween',
                    args: { min: 5, max: 100 },
                    msg: 'La dirección debe tener entre 5 y 100 caracteres'
                },
            ],
            numberPhone: [
                {
                    func: 'notEmpty',
                    msg: 'Debes ingresar tu número de teléfono'  
                },
                {
                    func: 'isNumber',
                    msg: 'El número de teléfono debe ser un número'
                },
                // {
                //     func: 'isNumberBetween',
                //     args: { min: 1000000000, max: 9999999999 },
                //     msg: 'El número de teléfono debe tener 10 dígitos',
                // }
            ],
            
        },
    }
    

]

// inicializo el objeto de validadores
const validators = {};

validationRules // creo un validador para cada formulario y lo guardo en el objeto de validadores
    .forEach(x => validators[x.form] = new Validator(x.rules))

const setFormValidation = (form) => { // funcion para validar un formulario

    form.querySelectorAll('input,textarea').forEach(input => {
        input.addEventListener('keyup', function (e) {
            console.log(this.name);
            let {success, errors} = getFormValidation(form);
            let error = errors[this.name];

            setState(this, { error, shake: false });

        })
    })

    form.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(e) {
        e.preventDefault();

        let { success, errors } = getFormValidation(this);

        if (success) { this.submit(); return console.log('Form submitted') }

        console.log('form did not pass validation');

        console.log(errors)

        updateFormStates({ form: this, errors, shake: true });

    }

    function removeState(input) {
        let container = input.closest('.contenedor-input');
        let classes = ['is-valid', 'is-invalid', 'shake'];
        classes.forEach(className => container?.classList.remove(className));
        container.querySelector('.invalid-feedback')?.remove();
    }

    function setState(input, data) {

        let { error, shake } = data;

        let container = input.closest('.contenedor-input');

        if (error) {
            container?.classList.remove('is-valid');
            container.classList ? container.classList.add('is-invalid') : container.className += ' is-invalid';
            container.querySelector('.invalid-feedback')?.remove();
            let errorContainer = document.createElement('div');
            errorContainer.classList.add('invalid-feedback');
            errorContainer.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>' + `<span>${error}</span>`;
            container.appendChild(errorContainer);
        } else if (input.value) {
            container?.classList.remove('is-invalid');
            container.querySelector('.invalid-feedback')?.remove();
            container.classList ? container.classList.add('is-valid') : container.className += ' is-valid';
            let errorContainer = container.querySelector('.invalid-feedback');
            errorContainer?.remove();
        }

        if (shake && error) {
            container.classList ? container.classList.add('shake') : container.className += ' shake';
            setTimeout(() => container.classList.remove('shake'), 1000);
        } else {
            container?.classList.remove('shake');
        }

    }

    function updateFormStates(params) {

        let { form, errors, shake = false } = params;
        let inputs = form.querySelectorAll('input,textarea');

        inputs.forEach(input => {
            let error = errors[input.name];
            removeState(input);
            setState(input, { error, shake });
        })

    }

    function getFormValidation(form, verbose = false) {
        let validator = validators[form.id];
        let formObj = dom2obj(form);
        return validator.validate(formObj, verbose);
    }

}

document.querySelectorAll('form').forEach(setFormValidation);