const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const hoverSign = document.querySelector(".hover-sign");


//sidebar elements
const sidebar = document.querySelector('.sidebar');

const menu = document.querySelector('.menu-icons');

const close = document.querySelector('.close-icons');

const videoList = [video1,video2,video3];

videoList.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play()
    })
    video.addEventListener('mouseout',function(){
        video.pause()
    })

})


document.addEventListener("DOMContentLoaded", function () {
    const contactBox = document.querySelector(".contact-box");
    const sendButton = contactBox.querySelector("button");
    const inputs = contactBox.querySelectorAll('input')

    sendButton.addEventListener("click", function () {
        alert("Message sent successfully!");
        inputs.forEach(input => input.value = ""); // Clear input fields
       
    });
});




//close sidebar animation


document.addEventListener("DOMContentLoaded", () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll("header ul li a");

    // Mapping each link to its corresponding section
    const sectionMap = {
        "About": ".info-section",
        "skills": ".skills-section",
        "Project": ".my-projects"
    };

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const linkText = link.textContent.trim();

            // Find the matching section and scroll to it
            const targetSection = document.querySelector(sectionMap[linkText]);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
