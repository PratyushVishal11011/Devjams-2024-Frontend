//API request for geting professors details

const apiUrl = 'https://b661-2409-40f4-3d-ac9d-44b2-42af-6049-b2c1.ngrok-free.app/find_profs'; // Assuming multiple todos
// const outputElement = document.getElementById('output');

const htmlHolder = document.getElementById("card-holder");
const searchBar = document.getElementById("domain-searchbar");
let domainList = []

// const testvar =
//     [
//         {
//             "citations": 573,
//             "department": "Computer Science",
//             "domains": ["Behavioral", "Economics"],
//             "name": "Christopher Smith",
//             "phone": "(820)711-1907x4457",
//             "publications": 31,
//             "username": "198413",
//             "lastup": "24 Sep 21"
//         },
//         {
//             "citations": 53,
//             "department": "Computer Science",
//             "domains": ["Behavioral", "Economics", "Cycle"],
//             "name": "Prakul K Hebbur",
//             "phone": "(820)711-19074457",
//             "publications": 36,
//             "username": "198416",
//             "lastup": "2 Aug 24"
//         }
//     ]

function requestProf() {
    htmlHolder.innerText = ""; //clearing out the place holder
    let requestBody = {};
    if (domainList && domainList.length && !searchBar.value) {
        requestBody = {
            'information': 'in these domains ' + domainList
        };
    }
    else if (!(domainList && domainList.length) && searchBar.value) {
        requestBody = {
            'information': 'and have this idea.' + searchBar.value
        };
    }
    else if (domainList && domainList.length && searchBar.value) {
        requestBody = {
            'information': 'and have this idea.' + searchBar.value + 'and in these domains' + domainList
        };
    }
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Clear the output element
            // outputElement.textContent = "";

            // Iterate over each todo item
            data.forEach(prof => {
                // Create a new paragraph element for each todo
                //test code from gemini (uncomment top also)
                // const todoItem = document.createElement('p');
                // todoItem.textContent = todo.title;
                // outputElement.appendChild(todoItem);

                var domainList = "";
                for (const domainl in prof.domains) { //creating domain bubbles
                    let x = prof.domains[domainl];
                    domainList += "<domain-bubble>" + x[0].toUpperCase() + x.slice(1) + "</domain-bubble>";
                }
                const profCard = document.createElement("div");
                profCard.innerHTML = `
                <div class="prof-card">
                    <!-- 
                    Professor Name
                    Photo (if avilable)
                    School/Dept
                    Domains Worked on
                    connect button
                    last updated on
                    -->
                    <div class="card-info">
                        <span class="card-photo">
                            <!-- faculty photo/ profile pic generator -->
                            <img src="https://api.dicebear.com/9.x/shapes/svg?radius=0&size=48&seed=${prof.username}" alt="Profile Picture">
                        </span>
                        <span class="card-name">
                            <!-- faculty name -->
                            ${prof.name}
                        </span>
                    </div>
                    <div class="card-school">
                        <!-- faculty school -->
                        <span id="school-icon"></span>
                        <span>${prof.department}</span>
                    </div>
                    <div class="card-domain-bubble">
                        <!-- faculty domains/interests -->
                        ${domainList}
                    </div>
                    <div class="card-connect">
                        <!-- connect button -->
                        <button class="connect-btn" onclick="connect('${prof.name}')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        Connect
                        </button>
                    </div>
                    <div class="card-lastup">
                        <!-- last updated details (optional) -->
                        Last Updated : ${prof.last_updated}
                    </div>
                    <div class="card-stats">
                        <!-- profesor research details (optional) -->
                        ${prof.publications} Published Papers and ${prof.citations} Citations
                    </div>
                </div>  
                `
                htmlHolder.append(profCard);
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

//bubble selector
const bubbles = document.querySelectorAll('#domain-bbl domain-bubble'); //get bublles in only in the search div
bubbles.forEach(bubble => {
    bubble.addEventListener('click', () => {
        const selectedDomain = bubble.innerHTML;
        if (!domainList.includes(selectedDomain)) {
            domainList.push(selectedDomain);
            bubble.setAttribute('selected', '');
        }
        else {
            domainList.splice(domainList.indexOf(selectedDomain), 1);
            bubble.removeAttribute('selected');
        }
    });
});

function clear_page() {
    htmlHolder.innerText = ""; //clearing out the place holder
    bubbles.forEach(bubble => {
        bubble.removeAttribute('selected');
    });
    domainList = [];
    searchBar.value = "";
}
function connect(name) {
    name = name.replace(/\s/g, "");
    console.log(name);
    var win = window.open('mailto:'+name.toLowerCase()+'@vit.ac.in?subject=Research Collaboration Inquiry', '_blank');
    win.focus();
}