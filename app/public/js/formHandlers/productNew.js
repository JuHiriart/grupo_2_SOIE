// validacion de formulario

let form = document.getElementById('formProducto');

form.querySelectorAll('input,textarea').forEach( input => {
    input.addEventListener('keyup', function(e) {
        console.log(this.name);
        let validation = getFormValidation(form);
        let error = validation.errors[this.name];

        setState(this, {error, shake: true});

    })
})

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit (e) {
    e.preventDefault();

    let validator = validators.productNew;
    let formObj = dom2obj(this);
    let {success, errors} = validator.validate(formObj);

    if (success) { this.submit(); return console.log('Form submitted')}

    console.log('form did not pass validation');

    console.log(errors)

    updateFormStates ({form: this, errors, shake: true});

}

function removeState (input) {
    let container = input.closest('.contenedor-input');
    let classes = ['is-valid', 'is-invalid', 'shake'];
    classes.forEach( className => container?.classList.remove(className) );
    container.querySelector('.invalid-feedback')?.remove();
}

function setState (input, data) {

    let {error, shake} = data;

    let container = input.closest('.contenedor-input');

    if(error) {
        container?.classList.remove('is-valid');
        container.classList ? container.classList.add('is-invalid') : container.className += ' is-invalid';
        container.querySelector('.invalid-feedback')?.remove();
        let errorContainer = document.createElement('div');
        errorContainer.classList.add('invalid-feedback');
        errorContainer.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>' + `<span>${error}</span>`;
        container.appendChild(errorContainer);
    } else if( input.value  ){
        container?.classList.remove('is-invalid');
        container.querySelector('.invalid-feedback')?.remove();
        container.classList ? container.classList.add('is-valid') : container.className += ' is-valid';
        let errorContainer = container.querySelector('.invalid-feedback');
        errorContainer?.remove();
    }

    if(shake && error) {
        container.classList ? container.classList.add('shake') : container.className += ' shake';
        setTimeout( () => container.classList.remove('shake'), 1000);
    } else {
        container?.classList.remove('shake');
    }
    
}

function updateFormStates (params) {

    let {form, errors, shake = false } = params;
    let inputs = form.querySelectorAll('input,textarea');
    
    inputs.forEach( input => {
        let error = errors[input.name];
        removeState(input);
        setState(input, {error, shake});
    } )

}

function getFormValidation(form) {
    let validator = validators.productNew;
    let formObj = dom2obj(form);
    return  validator.validate(formObj);
}
