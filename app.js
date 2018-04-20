document.getElementById('name').addEventListener('blur',valName);
document.getElementById('email').addEventListener('blur',valEmail);
document.getElementById('zip').addEventListener('blur',valZip);
document.getElementById('phone').addEventListener('blur',valPhone);


function valName(){
    const name = document.getElementById('name');
    const re = /^[1-9a-zA-Z]{2,10}$/i;


    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}


function valEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9])+@([a-zA-Z0-9])+\.([a-zA-Z0-9]){3}$/i;


    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function valZip(){
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}(\-[0-9]{4})?$/i;


    if(!re.test(zip.value)){
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}


function valPhone(){
    const phone = document.getElementById('phone');
    const re = /^001\-([0-9]{8})$/i;


    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}


