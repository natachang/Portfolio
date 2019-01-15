const optAboutMe = document.getElementById('opt-about-me');
const optSkills = document.getElementById('opt-skills');
const optProjects = document.getElementById('opt-projects');
const optContactMe = document.getElementById('opt-contact-me');
const optAboutMeMobile = document.getElementById('opt-about-me-mobile');
const optSkillsMobile = document.getElementById('opt-skills-mobile');
const optProjectsMobile = document.getElementById('opt-projects-mobile');
const optContactMeMobile = document.getElementById('opt-contact-me-mobile');
const aboutMeSection = document.getElementById('about-me-section');
const skillsSection = document.getElementById('skills-section');
const projectsSection = document.getElementById('projects-section');
const contactMeSection = document.getElementById('contact-me-section');


optAboutMe.addEventListener('click', () => {
    showSections(event, 'about-me-section');
});

optSkills.addEventListener('click', () => {
    showSections(event, 'skills-section');
}); 

optProjects.addEventListener('click', () => {
    showSections(event, 'projects-section');
}); 

optContactMe.addEventListener('click', () => {
    showSections(event, 'contact-me-section');
}); 

optAboutMeMobile.addEventListener('click', () => {
    showSections(event, 'about-me-section');
});

optSkillsMobile.addEventListener('click', () => {
    showSections(event, 'skills-section');
});

optProjectsMobile.addEventListener('click', () => {
    showSections(event, 'projects-section');
});

optContactMeMobile.addEventListener('click', () => {
    showSections(event, 'contact-me-section');
});
