const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

// Toggle between register and login views
registerLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}

// Login validation
document.getElementById("login-btn").addEventListener("click", function () {
    // Ambil nilai dari input username dan password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Cek apakah username dan password sesuai
    if (username === "admin" && password === "admin") {
        // Jika benar, alihkan ke halaman menu aplikasi booking hotel
        window.location.href = "menu.html";
    } else {
        // Jika salah, tampilkan pesan kesalahan
        alert("Username atau password salah!");
    }
});
