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
 *            params: [param1, param2, ...],
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
        constructor( rules ) {
    
            this.rules = rules;
    
            this.valFuncs = {
    
                notEmpty:    ( value, obj, params ) => value != '',
    
                isNumber:   ( value, obj, params ) => !isNaN( value ),
    
                isNumberBetween:  ( value, obj, params ) => {
                    let min = params.min ?? -Infinity;
                    let max = params.max ?? Infinity;
                    return value >= min && value <= max;
                },
    
                isString:   ( value, obj, params ) => typeof value == 'string',
    
                isName:     ( value, obj, params ) => {
                    let regex = /^[a-zA-Z]+$/;
                    return regex.test( value );
                },
    
                isText:     ( value, obj, params ) => {
                    let regex = /^[a-zA-Z0-9]( )+$/;
                    return regex.test( value );
                },
    
                isUppercase:    ( value, obj, params ) => {
                    let regex = /^[A-Z]+$/;
                    return regex.test( value );
                },
    
                isLowercase:   ( value, obj, params ) => {
                    let regex = /^[a-z]+$/;
                    return regex.test( value );
                },
    
                isDate:     ( value, obj, params ) => typeof value == 'date',
    
                isDateBetween: ( value, obj, params ) => {
                    let minDate = params.minDate?.getTime() ?? -Infinity;
                    let maxDate = params.maxDate?.getTime() ?? Infinity;
                    let date = new Date( value ).getTime();
                    return date >= minDate && date <= maxDate;
                },
    
                isObject:   ( value, obj, params ) => typeof value == 'object',
    
                isArray:    ( value, obj, params ) => Array.isArray( value ),
    
                isBoolean:  ( value, obj, params ) => typeof value == 'boolean',
    
                isFunction: ( value, obj, params ) => typeof value == 'function',
    
                isNull:     ( value, obj, params ) => value == null,
    
                isUndefined:( value, obj, params ) => value == undefined,
    
                isEmail:    ( value, obj, params ) => {
                    let re = /\S+@\S+\.\S+/;
                    return re.test( value );
                },
    
                isUrl:      ( value, obj, params ) => {
                    let re = /^(ftp|http|https):\/\/[^ "]+$/;
                    return re.test( value );
                },
    
                isPhone:    ( value, obj, params ) => { // es telefono ESPANOL
                    let re = /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/;
                    return re.test( value );
                },
    
                isDni:      ( value, obj, params ) => {
                    let re = /^\d{8}[a-zA-Z]$/;
                    return re.test( value );
                },
    
                lengthBetween:     ( value, obj, params ) => {
                    let length = value.length;
                    let min = params.min ?? 0;
                    let max = params.max ?? Infinity;
                    return length >= min && length <= max;
                },
    
                isInList:   ( value, obj, params ) => {
                    let list = params.list;
                    return list.includes( value );
                },
    
                matches:    ( value, obj, params ) => {
                    let regex = params.regex;
                    return regex.test( value );
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
    
                isIBAN:     ( value, obj, params ) => {
    
                    let iban = value.toUpperCase();
                 
                    let smellsLikeIban = ( str ) => 
                    /^([A-Z]{2}[ \-]?[0-9]{2})(?=(?:[ \-]?[A-Z0-9]){9,30}$)((?:[ \-]?[A-Z0-9]{3,5}){2,7})([ \-]?[A-Z0-9]{1,3})?$/.test(str);
                    
                    const ibanStripped = iban.replace(/[^A-Z0-9]+/gi,'') //keep numbers and letters only
                                            .toUpperCase(); //calculation expects upper-case
                    const m = ibanStripped.match(/^([A-Z]{2})([0-9]{2})([A-Z0-9]{9,30})$/);
                    if(!m) return false;
                    
                    const numbericed = (m[3] + m[1] + m[2]).replace(/[A-Z]/g,function(ch){
                                        //replace upper-case characters by numbers 10 to 35
                                        return (ch.charCodeAt(0)-55); 
                                    });
                    //The resulting number would be to long for javascript to handle without loosing precision.
                    //So the trick is to chop the string up in smaller parts.
                    const mod97 = numbericed.match(/\d{1,7}/g)
                                            .reduce(function(total, curr){ return Number(total + curr)%97},'');
                
                    return (mod97 === 1);
    
                },
    
                custom:     ( value, obj, params ) => {
                    return params( value, obj );
                }
    
            }

            // this.ValidatorError = class ValidatorError extends Error {
            //     constructor( message, code ) {
            //         super( message );
            //         this.code = code;
            //     }
            // }
    
        }
    
        // returns an object with the validation status and the errors for each field
        validate( obj ) {
              console.group( `Validating object: ${obj}\n`, obj );
              let errors = {};
              let success = true;
              // validate each field
              for ( let field in this.rules ) {
                  if ( errors[field] ) continue;
                  console.group( `Field:\t ${field}` );
                  let value = obj[field];
                  let rules = this.rules[field];
                  let error = this.validateValue( value, obj, rules );
                  console.groupEnd();
                  if ( error ) errors[field] = error;
                }
                // check if there are errors
                if ( Object.keys( errors ).length > 0 ) success = false;
                let validationResult = { success, errors };
                console.log( `Validation result: ${validationResult.success ? 'passed' : 'failed'}` );
                console.groupEnd();
                return validationResult;
        }
    
        // returns the first error found
        validateValue( value, obj, rules ) {
            // check if the field is required
            let isRequired = rules.some( rule => rule.func == 'notEmpty' );
            // if the field is not required and it's empty, return false (no error)
            if( !isRequired && value == '' ) return false ;
            // validate each rule
            for ( let rule of rules ) {
                let error = this.validateRule( value, obj, rule );
                if ( error ) return error;
            }
            // if no error found, return false (no error)
            return false
        }
    
        // returns an error message if the rule is not satisfied
        validateRule( value, obj, rule ) {
            let func = this.valFuncs[rule.func];
            if ( !func ) {
                console.error('Invalid validation function');
                throw new Error('Invalid validation function:  ' + rule.func);
            }
            let valid = func( value, obj , rule.args );
            console.log(`func\t: ${func.name}\nvalue\t: ${value}\nresult\t: ${valid}`);
            if ( !valid ) return rule.msg ?? 'Invalid value';
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
function dom2obj( dom ) {
    let obj = {};
    for ( let field of dom ) {
        obj[field.name] = field.value;
    }
    return obj;
}
    
// ------------------------------
// ------- Validaciones ---------
// ------------------------------

const validationRules = [ // reglas de validacion para cada formulario
    {
        form: 'productNew',
        rules: {
            name: [
                { func: 'notEmpty', msg: 'El nombre no puede estar vacío' },
            ],
            price: [
                { func: 'notEmpty', msg: 'El precio no puede estar vacío' },
                { func: 'isNumber', msg: 'El precio debe ser un número' },
                { func: 'isNumberBetween', args: { min: 0 }, msg: 'El precio debe ser mayor que 0' },
            ],
        }
    },

]

// inicializo el objeto de validadores
const validators = {};

validationRules // creo un validador para cada formulario y lo guardo en el objeto de validadores
    .forEach( x => validators[x.form] = new Validator( x.rules ) )






