const tabsSelector = document.querySelectorAll(".language-tab");
const selectedTab = document.querySelector(".language-selected");
let properties = tabsSelector[0].getBoundingClientRect();
const tabsContainer = document.querySelectorAll(".tab");
const projects = document.querySelectorAll(".project");
const projectImg = document.querySelectorAll(".project-img-container");

selectedTab.style.width = `${properties.width}px`;
selectedTab.style.height = `${properties.height}px`;
selectedTab.style.transform = `translate(${properties.left}px)`;


function moveSelectedTabIndicator() {
    properties = this.getBoundingClientRect();
 
    selectedTab.style.width = `${properties.width}px`;
    selectedTab.style.height = `${properties.height}px`;
    selectedTab.style.transform = `translate(${properties.left}px)`;
}

function changeActiveTab() {
    let newActiveTab = document.querySelector(`${this.dataset.tabValue}`);
    tabsContainer.forEach(container => container.classList.remove("active"));
    newActiveTab.classList.add("active");
}

function slideProjects() {
    const yCompleteScreen = window.scrollY + window.innerHeight;
    projects.forEach(project => {

        const inHalf =  project.offsetTop + project.clientHeight / 2;
        let parent = project.parentElement;
        
        if (yCompleteScreen >= inHalf && parent.classList.contains("active")) {
            project.classList.add("project-active")
        } 
        
    });
}

window.addEventListener("scroll", slideProjects);
tabsSelector.forEach(tabSltr => tabSltr.addEventListener("click", changeActiveTab))
tabsSelector.forEach(tab => tab.addEventListener("mouseenter", moveSelectedTabIndicator))