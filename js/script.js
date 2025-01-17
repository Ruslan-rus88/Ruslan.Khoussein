// --------------align text at center-----------------
let imgContainers = document.querySelectorAll('.row .imgContainer img')
let textContainer = document.querySelectorAll('.row .textContainer')

function alignText(){
    for (let i=0; i<imgContainers.length; i++) {
        let imgHeight = imgContainers[i].height;
        textContainer[i].style.height = imgHeight + 'px';
    }    
}

window.onload =() => { alignText(); myFunc();  skillsHeight () }
window.onresize = () => { alignText(); myFunc();  skillsHeight () };

// ------------change active navbar button--------------
let navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach((link) => {
    link.addEventListener('click', () =>{
        var activeLink = document.querySelector('.active');
        activeLink.classList.remove('active');
        link.classList.add('active');
    });
})

var navSections = document.querySelectorAll('.nav-section')

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
  
    navLinks.forEach(link => {
      let section = document.querySelector(link.hash);
  
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

//-------------------Adding petroleum courses

class Course {
    constructor(CourseDate, name, center, description, website) {
        this.CourseDate = CourseDate,
        this.name = name,
        this.center = center,
        this.description = description,
        this.website = website
    }
}

let petroleumCourses =[];

const adn = new Course(
    'April 2019',
    'Measurements ADN-ECO',
    'Siberian Training Center, Tyumen, Russian Federation',
    'Nuclear measurements, operations and applications of nuclear tools, handling radioactive (Gamma and Neutron) sources.',
    'https://www.slb.ru/about/training/siberian_training_centre/'
);
petroleumCourses.push(adn);

const emp = new Course(
    'March 2019',
    'EMP Resistivity',
    'Siberian Training Center, Tyumen, Russian Federation',
    'Operations and applications of electromagnetic propagation (EMP) tools, logs interpretation.',
    'https://www.slb.ru/about/training/siberian_training_centre/'
);
petroleumCourses.push(emp);

const measurementsTS = new Course(
    'May 2018 - June 2018',
    'Measurements TS (Telescope)',
    'Siberian Training Center, Tyumen, Russian Federation',
    'Measurements while drilling, Telescope (MWD) parts, programming, running tools, taking surveys, telemetry.',
    'https://www.slb.ru/about/training/siberian_training_centre/'
);
petroleumCourses.push(measurementsTS);

const measurements0 = new Course(
    'April 2018 - May 2018',
    'Measurements-0',
    'Siberian Training Center, Tyumen, Russian Federation',
    'Measurements while drilling, Surveying, telemetry, surface System, Sensors installation and calibration.',
    'https://www.slb.ru/about/training/siberian_training_centre/'
);
petroleumCourses.push(measurements0);

const iwcf = new Course(
    'September 2017',
    'IWCF Level 1',
    'International Well Control Forum',
    'An Overview of Oil and Gas, Life Cycle of a Well, Drilling Rigs, Well Control During Drilling Operations, Well Intervention and Workover, Pressure Control During Well Intervention.',
    'https://www.iwcf.org/'
);
petroleumCourses.push(iwcf);

const da1 = new Course(
    'August 2016',
    'Data Analyst - 1',
    'Middle East Learning Center, Abu Dhabi, UAE',
    'Hydraulics, Mudlogging unit inspection list, Formation pressure, Overpressure (DExponent), Well monitoring, Site specific communication, well control, Drilling calculations, String buoyancy, Reporting, Leak of test, GNx explorer, Torque and drag model, Dual mast management, ML cabin startup.',
    'https://www.slb.com/'
);
petroleumCourses.push(da1);

const gasFundamentals = new Course(
    'February 2016',
    'Gas Fundamentals and Analysis',
    'European Learning Center (ELC), Melun, France',
    'Different gas types, Gas extractors and their properties, Monitor gas on the rig.',
    'https://www.slb.com/'
);
petroleumCourses.push(gasFundamentals);

const gssSensors = new Course(
    'February 2016',
    'GSS Sensors Calibration Validation Verification',
    'European Learning Center (ELC), Melun, France',
    'Different GSS sensors calibration verification and validation.',
    'https://www.slb.com/'
);
petroleumCourses.push(gssSensors);

const gn4 = new Course(
    'October 2014',
    'GSS-Acquisition System (GNX)',
    'Sugar Land Learning Center (SLC), Sugar Land, USA',
    'New acquisition system, InterAct, Wits, Business Management, Sensors Installations and Calibrations, Hardware and Software, Gas System Calibration.',
    'https://www.slb.com/'
);
petroleumCourses.push(gn4);

const ml1 = new Course(
    'August 2014',
    'Mud Logging - 1',
    'European Learning Center (ELC), Melun, France',
    'Mud Logger\'s Tasks and Responsibilities, Drilling Equipment and Techniques, Lag Time, Pressure Notions, Mud Logging Geology, Mudlog, Drilling Fluids, Hydrocarbon and Gas Detection, Drilling Parameters, Sensors, Unit Maintenance, H2S Awareness and Detection, Safety, Quality Control, Client Relations.',
    'https://www.slb.com/'
);
petroleumCourses.push(ml1);

let petroleumCoursesContainer = document.querySelector('.petroleumCourses')
petroleumCourses.forEach(course => {
    petroleumCoursesContainer.innerHTML += `
    <div class="col-md-6 col-sm-12 mt-3">
        <div class="education-block">
            <div class="education-date">
                ${course.CourseDate}
            </div>
            <h3 class="education-title">
                ${course.name}
            </h3>
            <p>
                <em>${course.center}</em><br>
                ${course.description}<br>
            </p>
        </div>
    </div>
    `
})

// --------display experience projects
let downArrow = document.querySelectorAll('.fa-angle-down');
let upArrow = document.querySelectorAll('.fa-angle-up');
let expProjectsDetails = document.querySelectorAll('.experience-details-block');

for(let i = 0; i < expProjectsDetails.length; i++) {
    downArrow[i].onclick = function(){
        downArrow[i].style.display = 'none';
        upArrow[i].style.display = '';
        expProjectsDetails[i].style.display = 'block';
    }
    upArrow[i].onclick = function(){
        downArrow[i].style.display = '';
        upArrow[i].style.display = 'none';
        expProjectsDetails[i].style.display = 'none';
    }
}

//--------------Projects
class project {
    constructor(img, name, backInfo, href) {
        this.img = img,
        this.name = name,
        this.backInfo = backInfo,
        this.href = href
    }
} 

let allProjects = []
let storeProject = new project('online-store', 'Online Store', 'Visit Website', 'https://ruslan-rus88.github.io/online-store/')
allProjects.push(storeProject)
let ticTacToeProject = new project('tictactoe', 'Tic Tac Toe', 'Play with a friend :)', 'https://ruslan-rus88.github.io/TicTacToe/')
allProjects.push(ticTacToeProject)
let superheroComparison = new project('superheros', 'Superheros', 'Go to the page', 'https://ruslan-rus88.github.io/superheroes_comparison/')
allProjects.push(superheroComparison)

//add new projects here
let soonRroject1 = new project('coming-soon', '', 'Visit Website', '')
allProjects.push(soonRroject1)
let soonRroject2 = new project('coming-soon', '', 'Visit Website', '')
allProjects.push(soonRroject2)
let soonRroject3 = new project('coming-soon', '', 'Visit Website', '')
allProjects.push(soonRroject3)
//add new projects here----END

let allProjectsContainer = document.querySelector('#all-projects-container')
allProjects.forEach(element => {
    allProjectsContainer.innerHTML += `
    <div class="flip-card col-md-4 col-sm-12 my-3">
        <div class="flip-card-inner">
            <div class="flip-card-front w-100">
                <img src="assets/images/${element.img}.jpg" class="project-img w-100" alt="${element.name}">
                <div class="project-name textContainer text-center">${element.name}</div>
            </div>
            <div class="flip-card-back">
                <a href="${element.href}" class="project-btn" target="_blank">
                    <i class="fas fa-globe"> ${element.backInfo}</i>
                </a>
            </div>
        </div>   
    </div>
    `
})

//--------------Set height for Flip cards for correct align
let flipCards = document.querySelectorAll('.flip-card')
let projectImages = document.querySelectorAll('.project-img')

function myFunc(){
    for (let i=0; i<flipCards.length; i++) {
        let imgHeight = projectImages[i].height;
        flipCards[i].style.height = imgHeight + 'px';
    }    
}

//--------------animate skills
let skills = document.querySelectorAll('.skills-container img')
for(let i=0; i<skills.length; i++){
    skills[i].setAttribute('style', 'animation: skillsAnimation 3s infinite ' + i/6 +'s;' + '-moz-animation: skillsAnimation 3s infinite ' + i/6 +'s;' + '-o-animation: skillsAnimation 3s infinite ' + i/6 +'s;' + '-webkit-animation: skillsAnimation 3s infinite ' + i/6 +'s;')
}
function skillsHeight (){
    let skills = document.querySelectorAll('.skills-container img')

    for (let i=0; i<skills.length; i++) {
        let imgHeight = skills[i].width;
        skills[i].style.height = imgHeight + 'px';
    }
}

//--------------mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoicmtob3Vzc2VpbiIsImEiOiJja2pyM2ZrdGMxcjRlMnRsOXd2bm9yN2Y4In0.iV6iViPZMIZfwLixKRtAYw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [30.5234, 50.4501], 
    zoom: 9
});
    // Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

marker = new mapboxgl.Marker({
    draggable: false,
    color: "red",
})
    .setLngLat([30.5234, 50.4001])
    .addTo(map);

    var geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: false
    });

map.addControl(geolocate)

geolocate.on('geolocate', function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
})
