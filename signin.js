
app.use(express.static('public', {
    setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));

Content-Type; application/javascript
document.getElementById("loginform").addEventListener("submit", async function(event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const apiUrl = "https";

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.token;

            document.cookie = `authToken=${token}; max-age=50000; path=/`;

            document.getElementById("message").innerText = "Sign-in successful!";

            window.location.href = "/dashboard.html"; 
        } else {
            const errorData = await response.json();
            document.getElementById("message").innerText = errorData.message || "Sign-in failed.";
        }
    } catch (error) {
        console.error("Error during sign-in:", error);
        document.getElementById("message").innerText = "An error occurred. Please try again.";
    }
});
