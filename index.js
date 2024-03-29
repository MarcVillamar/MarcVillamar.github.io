// index.js

//Lesson 4-2 Task 1 by steps - insert Copyright text in footer 

// 1- Create a new date object
const today = new Date();

// 2- Retrieve the current year
const thisYear = today.getFullYear();

// 3- Select the <footer> element from the DOM
const footer = document.querySelector('footer');

// 4- Create a new paragraph (p) element
const copyright = document.createElement('p');

// 5- Set the inner HTML of the copyright element
copyright.innerHTML = 'Marcelo Villamar ' + thisYear;

// 6- Append the copyright element to the footer
footer.appendChild(copyright);

//Task 2 by steps - Create List of Skills

// 1- List of technical skills using array

const skills = [
    'JavaScript',
    'HTML',
    'CSS',
    'Powershell',
    'Networking (TCP/IP)',
    'SQL',
    'Microsoft System Administration',
    'Cisco & Juniper',
    'Firewalls'
];

// 2- Using "DOM Selection", select the #skills section by id and store it in a variable named 
// skillsSection hint: querySelector or getElementById method

const skillsSection = document.querySelector('#skills');

// 3- Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> 
// element and store it in a variable named skillsList

const skillsList = skillsSection.querySelector('ul');

// 4- Create a for loop to iterate over your skills Array, starting at index 0

for (let i = 0; i < skills.length; i++) {

// 5- Inside the loop, create a new list item (li) element and store it in a variable named skill
// hint: createElement method   

    let skill = skills[i];
    const skillElement = document.createElement('li');

// 6- Set the inner text of the skill element to the current skill
// hint: access the Array element using bracket notation

    skillElement.innerText = skills[i];

// 7- On the next line, append the skill element to the skillsList element 
// hint: appendChild method

    skillsList.appendChild(skillElement);
}

// LESSON 4-3
// Select the "leave_message" form by name attribute

const messageForm = document.forms.leave_message;

const messageSection = document.querySelector('#messages');
const messageList = messageSection.querySelector('ul');

// Add an event listener to handle the "submit" event

messageForm.addEventListener('submit', function(event) {
// add a new line to prevent the default refreshing behavior of the "submit" event     
  event.preventDefault(); 
// Inside the callback function for your event listener, create a new variable for each of the three
// form fields and retrieve the value from the event 
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
// add a console.log statement to log the three variables you created in the previous step
  console.log('Name:', usersName);
  console.log('Email:', usersEmail);
  console.log('Message:', usersMessage);
// Create a new list item (li) element
  const newMessage = document.createElement('li');
// Set the inner HTML of the newMessage element
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>
  `;
// Create a new remove button
const removeButton = document.createElement('button'); 
removeButton.textContent = 'Remove'; 

removeButton.addEventListener('click', function () {
  const entry = removeButton.parentNode;
  entry.remove();
});

// Append the removeButton to the newMessage
newMessage.appendChild(removeButton);

// Append the newMessage to the messageList
messageList.appendChild(newMessage);

// Clear the form after submitting
messageForm.reset();
});

//Lesson 6-2
// Using the Fetch API, create a "GET" request to the same GitHub API url as before 

const githubApiUrl = 'https://api.github.com/users/MarcVillamar/repos'

fetch(githubApiUrl)
 .then(response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Failed to FETCH data from GitHub API');
  }
 }) 
 .then(repositories => {
  console.log(repositories);
 
 // Chain another then method and pass it a function, inside of which you can paste the code from your previous "load" event listener function

 var projectSection = document.getElementById('projects');
 var projectList = projectSection.querySelector('ul');

 for (var i = 0; i < repositories.length; i++) {
  var repository = repositories[i];
  var projectLink = document.createElement('a');
  projectLink.href = repository.html_url;
  projectLink.textContent = repository.name;
  var project = document.createElement('li');
  project.appendChild(projectLink);
  projectList.appendChild(project);
 }
 }) 
 .catch(error => {
  console.error(error);
}); 




