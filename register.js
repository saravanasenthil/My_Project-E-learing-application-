document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameval = document.getElementById('username').value;
    const emailval = document.getElementById('password').value;
    const passwordval = document.getElementById('password').value;
    const cpasswordval = document.getElementById('cpassword').value;

    if (usernameval === ''){
        document.getElementById('error-message').textContent = 'username is required';
    }
     else {
        document.getElementById('success-message')
    }
    
    if (emailval === ''){
        document.getElementById('error-message').textContent = 'email is required';
    }
    else if(!validatemail(emailval)){
        document.getElementById('error-message').textContent = ' please enter valid email';
    }
    else{
        document.getElementById('success-message')
    }

     
    if (passwordval === ''){
        document.getElementById('error-message').textContent = 'password is required';
    }
     else if(password.length<8 ){
        document.getElementById('error-message').textContent = ' password must be atleats 8 charactrics';
    }
    else{
        document.getElementById('success-message')
    }

      
    if (cpasswordval === ''){
        document.getElementById('error-message').textContent = 'confrim password is required';
    }
     else if(cpasswordval  == !passwordval ){
        document.getElementById('error-message').textContent = ' confrim password does not match';
    }
    else{
        document.getElementById('success-message')
    }



});