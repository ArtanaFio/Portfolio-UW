// Display loading circle before the page finishes loading

const loadingWrapper = document.querySelector('.loading-wrapper');

document.addEventListener("DOMContentLoaded", function() {
    loadingWrapper.style.display = 'block';
});
   
window.addEventListener('load', () => { // Hides the loading circle after the page finishes loading
    loadingWrapper.style.display = "none";
});


// Automatically update copyright year

const copyrightYear = document.querySelector(".year");

copyrightYear.textContent = new Date().getFullYear();


// Special effects for specific elements

const greeting = document.querySelector('.greeting');
const footer = document.querySelector('.footer');
const projectsPage = document.getElementById('projects-page');

greeting.classList.add('scroll-right'); // Allows the greeting to scroll into view
footer.classList.add('appear'); // Allows the footer to fade into view
projectsPage.classList.add('slowly-appear'); // Allows the project page to fade into view later

setTimeout (() => {

    greeting.style.opacity = "1";
    greeting.style.transform = "translateX(0)";

    footer.style.opacity = "1";

    projectsPage.style.opacity = "1";

}, 500);


// Open the "About" section

const header = document.querySelector("header");
const aboutLink = document.querySelector(".about");
const popup = document.querySelector("#about-modal");
const headshot = document.getElementById("headshot");

aboutLink.addEventListener('click', () => {  
    headshot.classList.add("fade-In");  
    popup.classList.add("now-slide-down");
    setTimeout (() => {
        popup.style.top = "0vh";
        popup.style.opacity = "1";
        popup.classList.remove("now-slide-down");
    }, 900);
});

// Close the "About" section

const closeAbout = document.querySelector(".close");

closeAbout.addEventListener('click', () => {
    topic.textContent = '';
    displayInformation.textContent = '';
    headshot.classList.remove("fade-In");
    popup.classList.add("now-slide-up");
    setTimeout (() => {
        popup.style.top = "-100vh";
        popup.style.opacity = "0";
        popup.classList.remove("now-slide-up");
    }, 900);
})

// Show "about" information

const professionalBackground = document.getElementById("prof-bkgd");
const passionMotivation = document.getElementById("passion");
const skills = document.getElementById("skills");
const workApproach = document.getElementById("work");
const futureGoals = document.getElementById("goals");
const topic = document.querySelector(".section");
const displayInformation = document.querySelector(".about-info");

professionalBackground.addEventListener('click', () => {
    topic.textContent = "Professional Background: ";
    displayInformation.textContent = "";

    const developerDiv = document.createElement("div");
    const editorDiv = document.createElement("div");
    const managerDiv = document.createElement("div");

    developerDiv.classList.add("work-div", "info-list");
    editorDiv.classList.add("work-div", "info-list");
    managerDiv.classList.add("info-list");

    displayInformation.appendChild(developerDiv);
    displayInformation.appendChild(editorDiv);
    displayInformation.appendChild(managerDiv);

    const developerTitle = document.createElement("p");
    const editorTitle = document.createElement("p");
    const managerTitle = document.createElement("p");
    const developerYears = document.createElement("p");
    const editorYears = document.createElement("p");
    const managerYears = document.createElement("p");
    const developerCompany = document.createElement("div");
    const editorCompany = document.createElement("div");
    const managerCompany = document.createElement("div");
    const developerDescription = document.createElement("p");
    const editorDescription = document.createElement("p");
    const managerDescription = document.createElement("p");

    developerTitle.classList.add("title");
    editorTitle.classList.add("title");
    managerTitle.classList.add("title");
    developerYears.classList.add("work-years");
    editorYears.classList.add("work-years");
    managerYears.classList.add("work-years");
    developerCompany.classList.add("company");
    editorCompany.classList.add("company");
    managerCompany.classList.add("company");
    developerDescription.classList.add("description");
    editorDescription.classList.add("description");
    managerDescription.classList.add("description");

    developerTitle.textContent = "Freelance Front-end Web Developer";
    editorTitle.textContent = "Freelance Editor";
    managerTitle.textContent = "General Manager";
    developerYears.textContent = "2023 - Present";
    editorYears.textContent = "2021 - Present";
    managerYears.textContent = "2015 - 2023";
    developerCompany.textContent = "M&C Construction LLC, Crystal Thai";
    editorCompany.textContent = "Proofed, Inc.";
    managerCompany.textContent = "Crystal Thai";
    developerDescription.textContent = "Design, develop, and maintain user-friendly and visually engaging websites for small businesses.";
    editorDescription.textContent = "Correct syntax, capitalization, punctuation, and grammatical errors, improve clarity, conciseness, and readability, implement proper formatting and editing improvements.";
    managerDescription.textContent = "Compiled and updated documentation and employee-training material, manage other employees, fulfilled other job positions as required.";

    developerDiv.appendChild(developerTitle);
    editorDiv.appendChild(editorTitle);
    managerDiv.appendChild(managerTitle);
    developerDiv.appendChild(developerYears);
    editorDiv.appendChild(editorYears);
    managerDiv.appendChild(managerYears);
    developerDiv.appendChild(developerCompany);
    editorDiv.appendChild(editorCompany);
    managerDiv.appendChild(managerCompany);
    developerDiv.appendChild(developerDescription);
    editorDiv.appendChild(editorDescription);
    managerDiv.appendChild(managerDescription);


});

passionMotivation.addEventListener('click', () => {
    topic.textContent = "Passion & Motivation: ";
    displayInformation.textContent = "";
    const motivationDescription = document.createElement("p");
    motivationDescription.classList.add("paragraph");
    motivationDescription.textContent = " When it comes to work, I am most enthusiatic contributing my creativity and critical thinking skills to crafting projects that not only serve a functional purpose but also charm users with their aesthetic appeal. With every project, I strive to exceed expections by providing users with purposeful and visually engaging experiences that are both beautiful and intuitive by design. I am motivated to find innovated solutions to challenges and puzzles and to deliver quality work."
    displayInformation.appendChild(motivationDescription);
});

skills.addEventListener('click', () => {
    topic.textContent = "Skills:"
    displayInformation.textContent = "";
    
    const skillsArray = ["Programming languages: HTML5, CSS3, JavaScript, SQL", "Responsive design: flexbox, media queries", "Operating systems: Ubuntu Linux", "Virtuallization platforms: VMWare", "Developer tools: Visual Studio Code, Chrome DevTools", "Design tools: GIMP, Canva, Figma", "Front-end framework & library: Bootstrap", "Version control: Git, GitHub", "Debugging: Chrome DevTools", "Command line: Bash", "UX/UI Principles: Layout design, color theory", "Soft skills: verbal and written communication, interpersonal skills, creative problem-solving, critical thinking, time management, willingness to learn and grow"];
    const skillsList = document.createElement("ul");

    skillsList.classList.add('info-list');

    skillsArray.forEach((skill) => {
        let listSkill = document.createElement("li");

        listSkill.textContent = skill;

        skillsList.appendChild(listSkill);
    });

    displayInformation.appendChild(skillsList);
    //header.style.height = "1250px";
    console.log ("popup's height: ", popup.clientHeight, "px");
});

workApproach.addEventListener('click', () => {
    topic.textContent = "Work Approach: ";
    displayInformation.textContent = "";

    const firstParagraph = document.createElement("p");
    const secondParagraph = document.createElement("p");
    const thirdParagraph = document.createElement("p");

    firstParagraph.classList.add("paragraph");
    secondParagraph.classList.add("paragraph");
    thirdParagraph.classList.add("paragraph");

    firstParagraph.textContent = "My approach to work begins with obtaining a comprehensive understanding of the client's objectives and the users' needs by way of research and analysis of potential challenges. From there I use clear communication to collaborate with clients and team members and maintain transparency at every step.";
    secondParagraph.textContent = "The development process involves writing clean, maintainable, scalable, and flexible code while adhering to best practices and industry standards, applying the newest technologies and methodologies as they emerge.";
    thirdParagraph.textContent = "Principally with every project, I apply creativity, a keen eye for design, and innovation to exceed expectations and deliver quality work that is both functional and aesthetic.";

    displayInformation.appendChild(firstParagraph);
    displayInformation.appendChild(secondParagraph);
    displayInformation.appendChild(thirdParagraph);
});

futureGoals.addEventListener('click', () => {
    topic.textContent = "Future Goals:";
    displayInformation.textContent = "";
    const goalsDescription = document.createElement("p");
    goalsDescription.classList.add("paragraph");
    goalsDescription.textContent = "I aspire to be a proficient full-stack developer as I am drawn to the dynamic appeal of full-stack development, which synthesizes diverse technologies to create comprehensive end-to-end solutions. Always interested in learning and solving puzzles, I am committed to expanding my skill set and deepening my understanding of both client-side and server-side technologies. I aim to master databases, server architecture, and APIs while refining my skills in user interface design and interactivity. ";
    displayInformation.appendChild(goalsDescription);
});


// Open the "Contact" popup

const contactLink = document.querySelector(".contact");
const contactPopup = document.querySelector("#contact-modal");

contactLink.addEventListener('click', () => {
    contactPopup.classList.add("now-slide-right");
    setTimeout (() => {
        contactPopup.style.left = "50%";
        contactPopup.style.opacity = "1";
        contactPopup.classList.remove("now-slide-right");
    }, 900); 
});

// Close the contact popup

const closeContact = document.querySelector(".close-contact");

closeContact.addEventListener('click', () => {
    contactPopup.classList.add("now-slide-left");
    setTimeout (() => {
        contactPopup.style.left = "-120vw";
        contactPopup.style.opacity = "0";
        contactPopup.classList.remove("now-slide-left");
    }, 900);
});

// highlight GitHub Icon and show text
const gitHubIcon = document.querySelector(".icon");
const gitHubText = document.getElementById("github-text");

gitHubIcon.addEventListener('mouseover', () => {
    gitHubText.style.color = "black";
});

gitHubIcon.addEventListener('mouseleave', () => {
    gitHubText.style.color = "transparent";
});

// Show project links

const wildImage = document.querySelector(".wild");
const sketchImage = document.querySelector(".sketch");
const restaurantImage = document.querySelector(".thai");
const calculatorImage = document.querySelector(".calc");
const constructionImage = document.querySelector(".mnc");
const formImage = document.querySelector(".form");
const gameImage = document.querySelector(".rps");
const libraryImage = document.querySelector(".library");

const wildProject = document.getElementById("wild-project");
const sketchProject = document.getElementById("sketch-project");
const restaurantProject = document.getElementById("thai-project");
const calculatorProject = document.getElementById("calculator-project");
const constructionProject = document.getElementById("construction-project");
const formProject = document.getElementById("form-project");
const gameProject = document.getElementById("game-project");
const libraryProject = document.getElementById("library-project");

const wildFiles = document.getElementById("wild-files");
const sketchFiles = document.getElementById("sketch-files");
const restaurantFiles = document.getElementById("thai-files");
const calculatorFiles = document.getElementById("calculator-files");
const constructionFiles = document.getElementById("construction-files");
const formFiles = document.getElementById("form-files");
const gameFiles = document.getElementById("game-files");
const libraryFiles = document.getElementById("library-files");


wildImage.addEventListener('mouseover', () => {
    
    wildProject.style.display = "block";
    wildFiles.style.display = "block";

    wildProject.addEventListener('mouseover', () => {
        wildProject.style.color = "rgb(71, 146, 0)";
    });

    wildProject.addEventListener('mouseleave', () => {
        wildProject.style.color = "white";
    });

    wildFiles.addEventListener('mouseover', () => {
        wildFiles.style.color = "rgb(71, 146, 0)";
    });

    wildFiles.addEventListener('mouseleave', () => {
        wildFiles.style.color = "white";
    });
});

wildImage.addEventListener('mouseleave', () => {
    wildProject.style.display = "none";
    wildFiles.style.display = "none";
});

sketchImage.addEventListener('mouseover', () => {
    
    sketchProject.style.display = "block";
    sketchFiles.style.display = "block";

    sketchProject.addEventListener('mouseover', () => {
        sketchProject.style.color = "rgb(71, 146, 0)";
    });

    sketchProject.addEventListener('mouseleave', () => {
        sketchProject.style.color = "white";
    });

    sketchFiles.addEventListener('mouseover', () => {
        sketchFiles.style.color = "rgb(71, 146, 0)";
    });

    sketchFiles.addEventListener('mouseleave', () => {
        sketchFiles.style.color = "white";
    });

    
});

sketchImage.addEventListener('mouseleave', () => {
    sketchProject.style.display = "none";
    sketchFiles.style.display = "none";
});

restaurantImage.addEventListener('mouseover', () => {
    
    restaurantProject.style.display = "block";
    restaurantFiles.style.display = "block";

    restaurantProject.addEventListener('mouseover', () => {
        restaurantProject.style.color = "rgb(71, 146, 0)";
    });

    restaurantProject.addEventListener('mouseleave', () => {
        restaurantProject.style.color = "white";
    });

    restaurantFiles.addEventListener('mouseover', () => {
        restaurantFiles.style.color = "rgb(71, 146, 0)";
    });

    restaurantFiles.addEventListener('mouseleave', () => {
        restaurantFiles.style.color = "white";
    });

    
});

restaurantImage.addEventListener('mouseleave', () => {
    restaurantProject.style.display = "none";
    restaurantFiles.style.display = "none";
});

calculatorImage.addEventListener('mouseover', () => {
    
    calculatorProject.style.display = "block";
    calculatorFiles.style.display = "block";

    calculatorProject.addEventListener('mouseover', () => {
        calculatorProject.style.color = "rgb(71, 146, 0)";
    });

    calculatorProject.addEventListener('mouseleave', () => {
        calculatorProject.style.color = "white";
    });

    calculatorFiles.addEventListener('mouseover', () => {
        calculatorFiles.style.color = "rgb(71, 146, 0)";
    });

    calculatorFiles.addEventListener('mouseleave', () => {
        calculatorFiles.style.color = "white";
    });

    
});

calculatorImage.addEventListener('mouseleave', () => {
    calculatorProject.style.display = "none";
    calculatorFiles.style.display = "none";
});

constructionImage.addEventListener('mouseover', () => {
    
    constructionProject.style.display = "block";
    constructionFiles.style.display = "block";

    constructionProject.addEventListener('mouseover', () => {
        constructionProject.style.color = "rgb(71, 146, 0)";
    });

    constructionProject.addEventListener('mouseleave', () => {
        constructionProject.style.color = "white";
    });

    constructionFiles.addEventListener('mouseover', () => {
        constructionFiles.style.color = "rgb(71, 146, 0)";
    });

    constructionFiles.addEventListener('mouseleave', () => {
        constructionFiles.style.color = "white";
    });
});

constructionImage.addEventListener('mouseleave', () => {
    constructionProject.style.display = "none";
    constructionFiles.style.display = "none";
});

formImage.addEventListener('mouseover', () => {
    
    formProject.style.display = "block";
    formFiles.style.display = "block";

    formProject.addEventListener('mouseover', () => {
        formProject.style.color = "rgb(71, 146, 0)";
    });

    formProject.addEventListener('mouseleave', () => {
        formProject.style.color = "white";
    });

    formFiles.addEventListener('mouseover', () => {
        formFiles.style.color = "rgb(71, 146, 0)";
    });

    formFiles.addEventListener('mouseleave', () => {
        formFiles.style.color = "white";
    });
});

formImage.addEventListener('mouseleave', () => {
    formProject.style.display = "none";
    formFiles.style.display = "none";
});

gameImage.addEventListener('mouseover', () => {
    
    gameProject.style.display = "block";
    gameFiles.style.display = "block";

    gameProject.addEventListener('mouseover', () => {
        gameProject.style.color = "rgb(71, 146, 0)";
    });

    gameProject.addEventListener('mouseleave', () => {
        gameProject.style.color = "white";
    });

    gameFiles.addEventListener('mouseover', () => {
        gameFiles.style.color = "rgb(71, 146, 0)";
    });

    gameFiles.addEventListener('mouseleave', () => {
        gameFiles.style.color = "white";
    });
});

gameImage.addEventListener('mouseleave', () => {
    gameProject.style.display = "none";
    gameFiles.style.display = "none";
});

libraryImage.addEventListener('mouseover', () => {
    libraryProject.style.display = "block";
    libraryFiles.style.display = "block";

    libraryProject.addEventListener('mouseover', () => {
        libraryProject.style.color = "rgb(71, 146, 0)";
    });

    libraryProject.addEventListener('mouseleave', () => {
        libraryProject.style.color = "white";
    });

    libraryFiles.addEventListener('mouseover', () => {
        libraryFiles.style.color = "rgb(71, 146, 0)";
    });

    libraryFiles.addEventListener('mouseleave', () => {
        libraryFiles.style.color = "white";
    });
});

libraryImage.addEventListener('mouseleave', () => {
    libraryProject.style.display = "none";
    libraryFiles.style.display = "none";
});