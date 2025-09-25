// add a footer element

const body = document.body;
body.append(document.createElement('footer'));

// Insert copyright text in footer

const footer = document.querySelector('footer');
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = "Cesar D. Verastegui " + "&copy" + thisYear;

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