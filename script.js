// Mock user data
const users = [
    { username: 'admin', password: 'admin', role: 'admin' },
    { username: 'client', password: 'client', role: 'client' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'product.html';
    } else {
        document.getElementById('errorMessage').innerText = 'Invalid username or password';
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Assuming registration just adds the user to the array (no backend)
    users.push({ username: newUsername, password: newPassword, role: 'client' });
    document.getElementById('registerMessage').innerText = 'Registration successful. You can now login.';
});

function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}
