// add a footer element

const body = document.body;
body.append(document.createElement('footer'));

// Insert copyright text in footer

const footer = document.querySelector('footer');
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = "Cesar D. Verastegui " + "&copy; " + thisYear;

footer.append(copyright);

// Create List of Skills

const skills = ["HTML", "CSS", "Javascript", "Figma", "Webflow", "GitHub"];
const skillSection = document.getElementById("skills");
const skillList = skillSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML= skills[i];
    skillList.appendChild(skill);
}

// Message Form

const messageForms = document.getElementsByName('leave_message');
const messageForm = messageForms[0];
const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    console.log(userName + "\n" + userEmail + "\n" + message);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a class="message-link" href="mailto:${userEmail}">${userName}</a><span>${message}</span>`;

    // Remove button
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
    
        if(messageList.children.length === 1) {
            messageSection.style.display = "none";
            entry.remove();
        } else {
            entry.remove();
        }
    })

    // Edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = 'edit message';
    editButton.type = 'button';

    editButton.addEventListener('click', () => {
        const editMessage = document.createElement('textarea');
        const submitMessage = document.createElement('button');
        submitMessage.innerHTML = 'submit new message';
        submitMessage.type = 'button';

        newMessage.append(editMessage);
        newMessage.append(submitMessage);

        // Submit new message
        submitMessage.addEventListener('click', () => {
            newMessage.innerHTML = `<a id="message-link" href="mailto:${userEmail}">${userName}</a><span>${editMessage.value}</span>`;
            newMessage.appendChild(removeButton);
            newMessage.appendChild(editButton);
        })
    })

    if(window.getComputedStyle(messageSection).display === "none") {
        newMessage.appendChild(removeButton);
        newMessage.appendChild(editButton);
        messageList.append(newMessage);
        messageForm.reset();
        messageSection.style.display = "block";
    } else {
        newMessage.appendChild(removeButton);
        newMessage.appendChild(editButton);
        messageList.append(newMessage);
        messageForm.reset();
    } 
});

// Navigation meny icon
const menuIcon = document.querySelector(".icon");
const navMenu = document.getElementById("nav-mobile");

menuIcon.addEventListener('click', (event) => {
    if(window.getComputedStyle(navMenu).display === 'flex') {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
    }
});