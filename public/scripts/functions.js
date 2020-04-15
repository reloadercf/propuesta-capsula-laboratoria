function logIn(email, password){
    console.log('LogIn - Email: '+email+', Password: '+password);
}

function register(email, password){
    console.log('Register - Email: '+email+', Password: '+password);
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
        console.log(user)
        let mail=user.user.email
        alert(`${mail} se registro correctamente`)
    }).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // ...
        alert(`${errorCode} ${errorMessage} no se puede`)
      });
}