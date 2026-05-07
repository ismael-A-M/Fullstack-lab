document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    const messageDiv = document.getElementById('message');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;

        // basic validation check
        if (name && service && date) {
            displaySuccess(name, service, date);
            bookingForm.reset();
        }
    });

    function displaySuccess(name, service, date) {
        messageDiv.style.color = '#28a745';
        messageDiv.textContent = `Thank you, ${name}. Your ${service} appointment is set for ${date}.`;
        
        // Clear message after 5 seconds
        setTimeout(() => {
            messageDiv.textContent = '';
        }, 5000);
    }
});