document.getElementById("loginform").addEventListener('submit',async function name(event)
{
    event.preventDefault();

    const regnum = document.getElementById(`regnum`).value
    const password = document.getElementById(`password`).value;

    const logindata = {
        regnum: regnum,
        password: password
    };

    try{

        const response = await fetch("api", {
            method: 'POST',
            header: {
                'contenttype' : 'application/json'
            },
            body: JSON.stringify(logindata)
        })

        if (response.ok)  {
            const result = await response.json();
            document.getElementById('message').textContent = (`Login succesful!!`);

        } 
        else {
            const errordata = await response.json();
            document.getElementById(`message`).textContent = 'invalid credntials'
        }
    } catch (error) {
        console.error(`login error`);
        document.getElementById('message').textContent = `error please try again later`;
    }
    });
