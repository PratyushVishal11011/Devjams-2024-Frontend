const template = document.createElement('template');
template.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Header Bar</title>
        <link rel="stylesheet" href="/header.css">
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:wght@700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/c653952213.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header>
            <div class="logo">
                <span class="text">ERROR</span>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fagentestudio.com%2Fuploads%2Fpost%2Fimage%2F69%2Fmain_how_to_design_404_page.png&f=1&nofb=1&ipt=a2ac14488c855a4442677354eed18524c3b4f994912174906f373ac9407752ac&ipo=images" alt="Website Logo">
            </div>
            <nav>
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="idea2prof/idea2prof.html">Explore</a></li>
                </ul>
            </nav>

            <div class="nav-right">
                <div class="dropdown">
                    <button class="dropbtn">
                        <div class="profile">
                            <img src="https://api.dicebear.com/9.x/shapes/svg?radius=0&size=48&seed=prakul" alt="Profile Image">
                        </div>
                        <span class="username"></span>
                    </button>
                    <div class="dropdown-content">
                        <a href="#"><strong>Username:</strong> devjams</a>
                        <a href="#"><strong>Email:</strong> devjams@vit.com</a>
                        <a href="/signin.html"><i class="fa-duotone fa-solid fa-user-large" style="--fa-primary-color: #c1e1a7; --fa-secondary-color: #d6f2c0;"></i> Switch Users</a>
                        <a href="/login.html"><i class="fa-duotone fa-solid fa-arrow-right-from-bracket" style="--fa-primary-color: #c1e1a7; --fa-secondary-color: #d6f2c0; --fa-secondary-opacity: 0.5;"></i> Logout</a>
                    </div>
                </div>
            </div>
            </div>
        </header>
    </body>
    </html>
<a href="#"></a>`;
document.body.appendChild(template.content);