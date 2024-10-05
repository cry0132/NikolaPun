

document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

function subscribe(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    const email = document.getElementById('email').value;

    // Tampilkan pesan sukses
    const subscriptionMessage = document.getElementById('subscriptionMessage');
    subscriptionMessage.innerText = `Thank you for subscribing, ${email}!`;
    subscriptionMessage.style.display = 'block';

    // Reset form
    document.getElementById('newsletterForm').reset();

    // Sembunyikan pesan setelah 3 detik
    setTimeout(() => {
        subscriptionMessage.style.display = 'none';
    }, 3000);
}