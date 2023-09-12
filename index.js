const projectView = document.querySelectorAll('.proj .view');
const projectImg = document.querySelectorAll('.project-img');

// on hover, change display to block of the projectView div
projectImg.forEach((projectImg, index) => {
    projectImg.addEventListener('mouseover', () => {
        projectView[index].style.display = 'flex';
    });
    projectImg.addEventListener('mouseout', () => {
        projectView[index].style.display = 'none';
    });
});

const about = document.querySelector('.about-me-write-up');
const aboutMeText = "Hello! 👋 I'm an undergrad student at IISER Kolkata, majoring. I love building scalable backend systems with Django and Flask. Also, passionate about AI/ML and eager to apply knowledge in real-world projects!";

const aboutMeTextArray = aboutMeText.split('');
let aboutMeTextIndex = 0;

function writeAboutMeText() {
    if (aboutMeTextIndex < aboutMeTextArray.length) {
        if (aboutMeTextArray[aboutMeTextIndex] === '&' && aboutMeTextArray[aboutMeTextIndex + 1] === '#') {
            about.innerHTML += '&#x1F44B;';
            aboutMeTextIndex += 2;
        } else {
            about.innerHTML += aboutMeTextArray[aboutMeTextIndex];
            aboutMeTextIndex++;
        }
        setTimeout(writeAboutMeText, 40);
    }
};

// writeAboutMeText();

