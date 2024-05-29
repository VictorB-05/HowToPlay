function emailCorrecto() {
    console.log("Hola Mundo");
    // Si hay mensajes de error se quitan
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Según he entendido esto hace que solo se valido el texto (email) cuando haya texto+@+texto+.+texto 
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valid = true;

    // miramos que segun el patron dado anteriormente sea correcto la contraseña
    if (!emailValido.test(email)) {
      document.getElementById('emailError').textContent = 'La direccón del email debe ser correcta.';
      valid = false;
    }

    // miramos si la contraseña tiene mas de 8 caracteres
    if (password.length < 8) {
      document.getElementById('passwordError').textContent = 'Una contraseña debe tener como minimo 8 caracteres.';
      valid = false;
    }

}