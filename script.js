document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const reason = document.getElementById('reason').value;
    const email = document.getElementById('email').value;

    if (name && reason && email) {
        alert('Formulario enviado con éxito');
        // Aquí puedes añadir código para enviar el formulario a un servidor
    } else {
        alert('Por favor, completa todos los campos');
    }
});