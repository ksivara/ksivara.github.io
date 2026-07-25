/* =====================================================
   NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            navLinks.forEach(link => {

                link.classList.remove("active");

                const id = entry.target.getAttribute("id");

                document
                    .querySelector(`.nav-link[href="#${id}"]`)
                    .classList.add("active");

            });

        }

    });

},{
    threshold:0.5
});

sections.forEach(section => observer.observe(section));

/* =====================================================
   CONTACT FORM
===================================================== */

const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {
        formStatus.textContent = "✓ Thank you! Your message has been sent.";
        formStatus.style.color = "#4ADE80"; // Green

        form.reset();
    } else {
        formStatus.textContent = "Something went wrong. Please try again.";
        formStatus.style.color = "#F87171"; // Red
    }
});

/* =====================================================
   PROJECT DATA
===================================================== */

const projects = [

    {
        title:"Temperature Sensor",
        image:"assests/images/project1.png",

        media: [


        {
            type: "image",
            src: "assests/images/temp2.png",
            caption: "Temperature readings displayed on the LCD."
        },

        {
            type: "image",
            src: "assests/images/temp3.png",
            caption: "Internal wiring after soldering."
        },

        {
            type: "image",
            src: "assests/images/temp4.png",
            caption: "Battery Holder Design."
        },

        {
            type: "image",
            src: "assests/images/temp1.png",
            caption: "Assembled enclosure without top."
        },

        {
            type: "image",
            src: "assests/images/project1.png",
            caption: "Final assembly on OnShape."
        }

    ],

        description:
            "I designed and prototyped a functional room temperature monitor that provides real-time environmental data and automated visual and auditory alerts. The system is built on an Arduino Uno platform programmed in C++, featuring a TMP temperature sensor and an I2C LCD that displays temperature readings in both Celsius and Fahrenheit. The development process included precise component measurement with calipers and the creation of detailed CAD models in OnShape to design a custom ABS enclosure and a 3D-printed 9V battery holder. To ensure electrical reliability and mechanical stability, I utilized soldering techniques with 22 AWG wiring and implemented twist caps for stable power connections. Final evaluation involved heat-gun testing to verify the alarm logic, which successfully triggers a piezo buzzer and a blinking red LED when temperatures fall outside the programmed 80-85°F range.",
    
        skills:[
                "Arduino",
                "OnShape",
                "Laser Cutting",
                "Soldering",
                "CAD Design",
                "Cura"
            ]
    },
    
    {
        title:"Gait Tracker",
        image:"assests/images/gait7.png",

        media: [
            {
                type: "image",
                src: "assests/images/gait2.png",
                caption: "Proximity sensor housing."
            },
            {
                type: "image",
                src: "assests/images/gait6.png",
                caption: "Assembled sensor housing with plug to ensure sensor is positioned correctly."
            },
            {
                type: "image",
                src: "assests/images/gait1.png",
                caption: "Main housing design without slide on covers."
            },

            {
                type: "image",
                src: "assests/images/gait3.png",
                caption: "CAD assembly of circuit housing with slide on covers."
            },

            {
                type: "image",
                src: "assests/images/gait8.png",
                caption: "Circuit Diagram."
            },
            
            {
            type: "video",
            src: "assests/tempDemo.mov",
            caption: "Demonstration of the final prototype."
            },

            {
                type: "image",
                src: "assests/images/gait4.png",
                caption: "Close up of heel sensor and housing."
            },
            {
                type: "image",
                src: "assests/images/gait5.png",
                caption: "Close up of toe sensor and housing."
            },

            {
                type: "image",
                src: "assests/images/gait7.png",
                caption: "Demonstration of slide cover mechanism for easy battery replacement."
            },

            {
                type: "image",
                src: "assests/images/project2.png",
                caption: "Sketch of final prototype."
            }
        ],
    
        description:"For this project, my team and I designed and optimized a wearable gait tracker intended for clinical use to assist patients in rehabilitation by monitoring their walking patterns in real-time. We utilized two proximity sensors, calibrated to trigger within 2 cm of the ground, to track toe and heel strikes and provide immediate visual and haptic feedback via LEDs and a vibration motor. My primary contribution involved the mechanical design, where I created the main housing, a compact, strap-on box with a slide-on battery lid, and the adjustable sensor housings that securely positioned the sensors on the user’s foot. Additionally, I took a lead role in technical documentation and project management, writing parts and editing the final report and presentation while ensuring the team adhered to strict deadlines to meet all project objectives and performance metrics. The final device successfully demonstrated its ability to track gait cycles accurately while maintaining user comfort.",
    
        skills:[
            "Arduino",
            "OnShape",
            "Circuit Assembly",
            "3D Printing",
            "Soldering"
        ]
    },
    
    {
        title:"LED Catcher Game",
        image:"assests/images/led1.png",

        media: [
            {
                type: "image",
                src: "assests/images/led1.png",
                caption: "Game board with LED array."
            },
            {
                type: "image",
                src: "assests/images/project3.png",
                caption: "Gameboard after one life lost."
            },
            {
                type: "image",
                src: "assests/images/led3.png",
                caption: "Slide from presentation."
            }
        ],
    
        description:"Developed an FPGA-based reaction game in Verilog using Vivado, where a single LED continuously moves back and forth across a 16-LED array at 200 ms intervals. Players must activate the corresponding switch precisely as the moving LED reaches its position to score a successful catch. Each successful catch increments the score and pauses the game for three seconds before gameplay resumes. A custom miss-detection system tracks unsuccessful attempts when the LED is not caught, automatically resetting the game after three misses. Misses are displayed on the left side of a multiplexed 7-segment display, while the player's score is shown on the right in real time. Designed and implemented a finite state machine (FSM) to manage the game's control flow, including LED movement, edge detection, switch input handling, scoring, miss detection, game reset logic, and the three-second pause feature after each successful catch. Additionally, managed project planning and workload distribution and created a formal presentation explaining the system architecture and design decisions.",
    
        skills:[
            "FPGA",
            "Verilog",
            "Vivado",
            "Finite State Machine"
        ]
    },
    
    {
        title:"Structural Supports",
        image:"assests/images/project4.png",

        media: [
            {
                type: "image",
                src: "assests/images/project4.png",
                caption: "Final 3D printed laser support."
            },

            {
                type: "image",
                src: "assests/images/quan1.png",
                caption: "Final Design."
            },

            {
                type: "image",
                src: "assests/images/quan2.png",
                caption: "Collecting measurements."
            },

            {
                type: "image",
                src: "assests/images/quan3.png",
                caption: "First iteration of the design."
            },

            {
                type: "image",
                src: "assests/images/quan4.png",
                caption: "Second iteration of the design."
            }
        ],
    
        description:"Contributed to a quantum engineering research project by designing custom 3D CAD models in OnShape for experimental hardware used in a continuous-wave diamond maser experiment. Developed structural support components and protective laser housing with an emphasis on mechanical stability, manufacturability, and integration with the experimental setup. Collaborated closely with a member of the research team to refine designs, incorporate feedback, and deliver hardware compatible with the project's technical and experimental requirements.",
        
        skills:[
            "CAD Design",
            "OnShape",
            "Mechanical Support Structures"
        ]
    }
    
    ];

/* =====================================================
   DOM ELEMENTS
===================================================== */
    
    let currentProject = 0;
    
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    const modal = document.getElementById("projectModal");
    const closeModal = document.getElementById("closeModal");

    const projectCard1 = document.getElementById("projectCard1");
    const projectCard2 = document.getElementById("projectCard2");

    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const modalSkills = document.getElementById("modalSkills");

    const gallery = document.getElementById("projectGallery");

    const imageViewer = document.getElementById("imageViewer");
    const viewerImage = document.getElementById("viewerImage");
    const viewerVideo = document.getElementById("viewerVideo");
    const viewerCaption = document.getElementById("viewerCaption");

    // Hide the video element by default so it doesn't show on the page
    if(viewerVideo){ viewerVideo.style.display = "none"; }

/* =====================================================
   PROJECT FUNCTIONS
===================================================== */

    function loadProject(){

    const secondProject =
        (currentProject + 1) % projects.length;

    document.getElementById("projectTitle1").textContent =
        projects[currentProject].title;

    document.getElementById("projectImage1").src =
        projects[currentProject].image;

    document.getElementById("projectTitle2").textContent =
        projects[secondProject].title;

    document.getElementById("projectImage2").src =
        projects[secondProject].image;

    const position = Math.floor(currentProject/2);

    document.querySelectorAll(".dot").forEach((dot,index)=>{

        dot.classList.toggle("active",index===position);

    });

    projectCard1.onclick=()=>openProject(currentProject);

    projectCard2.onclick=()=>openProject(secondProject);

}

    function openProject(index){

    const project=projects[index];

    modalDescription.textContent=project.description;

    modalSkills.innerHTML="";

    project.skills.forEach(skill=>{

        const span=document.createElement("span");

        span.textContent=skill;

        modalSkills.appendChild(span);

    });

    modalImage.src = project.image;

    gallery.innerHTML = "";

    project.media.forEach(item => {

    const container = document.createElement("div");
    container.className = "gallery-item";

    if(item.type === "image"){

        const img = document.createElement("img");

        img.src = item.src;
        img.className = "gallery-image";

        img.onclick = () => {

            viewerImage.src = item.src;
            viewerImage.style.display = "block";
            viewerVideo.style.display = "none";
            viewerVideo.pause();
            viewerVideo.removeAttribute("src");
            imageViewer.style.display = "flex";

            document.getElementById("viewerCaption").textContent =
                item.caption;

        };

        container.appendChild(img);

    } else {

        const video = document.createElement("video");

        video.src = item.src;
        video.className = "gallery-video";
        video.controls = true;

video.onclick = () => {

    viewerVideo.src = item.src;
    viewerVideo.style.display = "block";

    viewerImage.style.display = "none";
    viewerImage.removeAttribute("src");

    viewerCaption.textContent = item.caption;

    imageViewer.style.display = "flex";
};

container.appendChild(video);

    }

    gallery.appendChild(container);

});

    modal.style.display="flex";

}

/* =====================================================
   BUTTONS
===================================================== */

 nextBtn.onclick = () => {

    currentProject += 2;

    if(currentProject >= projects.length){

        currentProject = 0;

    }

    loadProject();

};
    
    prevBtn.onclick = () => {

    currentProject -= 2;

    if(currentProject < 0){

        currentProject = projects.length - 2;

    }

    loadProject();

};

/* =====================================================
   MODAL EVENTS
===================================================== */

closeModal.onclick = () => {

    modal.style.display = "none";

};

window.onclick = (event) => {

    if(event.target === modal){

        modal.style.display = "none";

    }

};

document.addEventListener("keydown", (event)=>{

    if(event.key==="Escape"){

        modal.style.display="none";

    }

});

/* =====================================================
   IMAGE VIEWER
===================================================== */

if(imageViewer){

    imageViewer.addEventListener("click",(event)=>{

        // Close when clicking the backdrop or caption, but not the media itself
        if(event.target === viewerImage || event.target === viewerVideo) return;

        imageViewer.style.display = "none";
        viewerVideo.pause();

    });

}

/* =====================================================
   INITIALIZE
===================================================== */

    loadProject();
