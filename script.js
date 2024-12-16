document.getElementById('adminBtn').addEventListener('click', function() {
    document.querySelector('.login-options').style.display = 'flex';
    document.querySelector('.admin-login').style.display = 'block';
    document.querySelector('.board-login').style.display = 'none';
});

document.getElementById('boardMemberBtn').addEventListener('click', function() {
    document.querySelector('.login-options').style.display = 'flex';
    document.querySelector('.admin-login').style.display = 'none';
    document.querySelector('.board-login').style.display = 'block';
});

document.getElementById('adminForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    if (username && password) {
        alert('Administrator login successful!');
    } else {
        alert('Please enter both username and password.');
    }
});

document.getElementById('boardForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const authCode = document.getElementById('authCode').value;

    if (authCode) {
        // Redirect to the board member dashboard
        window.location.href = 'board_dashboard.html';
    } else {
        alert('Please enter the authentication code.');
    }
});
