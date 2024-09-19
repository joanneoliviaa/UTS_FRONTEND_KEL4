document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    if (email) {
        alert(`Terima kasih telah berlangganan, ${email}!`);
    } else {
        alert("Silakan masukkan email yang valid.");
    }
});
