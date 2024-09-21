document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const regnum = document.getElementById('regnum').value;
    const password = document.getElementById('password').value;
    const apiURL = ''
    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ regnum, password })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('authToken', data.token);
            alert('login successful!');
        } else {
            alert('login failed!');
        }
    } catch (error) {
        console.error('error during login:', error);
    }
});

window.addEventListener('load', async function () {
    const token = localStorage.getItem('authToken');

    if (token) {
        try {
            const response = await fetch('/api/protected', {
                headers: { 'authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                const data = await response.json();
                alert(`auto login success: ${data.message}`);
            } else {
                alert('auto login failed!');
            }
        } catch (error) {
            console.error('error during auto login:', error);
        }
    }
});
