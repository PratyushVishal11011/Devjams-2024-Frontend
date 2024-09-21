//API request for geting professors details

const apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // Assuming multiple todos
// const outputElement = document.getElementById('output');

const htmlHolder = document.getElementById("card-holder");
const ideaInput = document.getElementById("domain-searchbar");
let domainList = []

const testvar =
    [
        {
            "citations": 573,
            "department": "Computer Science",
            "domains": ["Behavioral", "Economics"],
            "name": "Christopher Smith",
            "phone": "(820)711-1907x4457",
            "publications": 31,
            "username": "198413",
            "lastup": "24 Sep 21"
        },
        {
            "citations": 53,
            "department": "Computer Science",
            "domains": ["Behavioral", "Economics", "Cycle"],
            "name": "Prakul K Hebbur",
            "phone": "(820)711-19074457",
            "publications": 36,
            "username": "198416",
            "lastup": "2 Aug 24"
        }
    ]

function requestProf() {
    if (domainList && domainList.length) {
        htmlHolder.innerText = ""; //clearing out the place holder
        const requestBody = {
            'domain': domainList
        };
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
                testvar.forEach(prof => {
                    // Create a new paragraph element for each todo
                    //test code from gemini (uncomment top also)
                    // const todoItem = document.createElement('p');
                    // todoItem.textContent = todo.title;
                    // outputElement.appendChild(todoItem);

                    var domainList = "";
                    for (const domainl in prof.domains) { //creating domain bubbles
                        domainList += "<domain-bubble>" + prof.domains[domainl] + "</domain-bubble>";
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
                            <button class="connect-btn" onclick="connect(${prof.username})">
                                Connect
                                <span id="connect-btn-icon"></span>
                            </button>
                        </div>
                        <div class="card-lastup">
                            <!-- last updated details (optional) -->
                            Last Updated : ${prof.lastup}
                        </div>
                        <div class="card-stats">
                            <!-- profesor research details (optional) -->
                            Published Papers : ${prof.publications} and Citations : ${prof.citations}
                        </div>
                    </div>  
                    `
                    htmlHolder.append(profCard);
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}

function requestProfbyIdea() {
    if (ideaInput.value) {
        htmlHolder.innerText = ""; //clearing out the place holder
        const requestBody = {
            'idea': ideaInput.value
        };
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
                testvar.forEach(prof => {
                    // Create a new paragraph element for each todo
                    //test code from gemini (uncomment top also)
                    // const todoItem = document.createElement('p');
                    // todoItem.textContent = todo.title;
                    // outputElement.appendChild(todoItem);

                    var domainList = "";
                    for (const domainl in prof.domains) { //creating domain bubbles
                        domainList += "<domain-bubble>" + prof.domains[domainl] + "</domain-bubble>";
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
                            <button class="connect-btn" onclick="connect(${prof.username})">
                                Connect
                                <span id="connect-btn-icon"></span>
                            </button>
                        </div>
                        <div class="card-lastup">
                            <!-- last updated details (optional) -->
                            Last Updated : ${prof.lastup}
                        </div>
                        <div class="card-stats">
                            <!-- profesor research details (optional) -->
                            Published Papers : ${prof.publications} and Citations : ${prof.citations}
                        </div>
                    </div>  
                    `
                    htmlHolder.append(profCard);
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
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