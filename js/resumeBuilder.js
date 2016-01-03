<<<<<<< HEAD
var bio = {
	"name" : "Galina Orlova",
	"role" : "UX Designer & Developer",
	"contacts" : {
		"email" : "gala_orlova@yahoo.com",
		"mobile" : "+4540894663",
		"github" : "ogalchonok",
		"linkedin" : "https://dk.linkedin.com/in/galinao",
		"location" : "Soenderborg"
	},
	"welcomeMessage" : "Hello there!",
	"skills":[
	"awesome UX design", "high and low fidelity prototyping", "design research", "making boss happy"
	],
	"bioPic" : "https://portfolioit.files.wordpress.com/2015/09/galina300x300.png"
}

var education = {
	"schools": [
		{
			"name" : "University of Southern Denmark",
			"gradyear" : "2013",
			"degree" : "Master of Science",
			"majors" : ["IT Product Design"],
			"location" : "Soenderborg"
		},
		{
			"name" : "Sakhalin State University",
			"gradyear" : "2000",
			"degree" : "Master of Arts",
			"majors" : ["Philology: Russian, English and literature"],
			"location" : "Yuzhno-Sakhalinsk"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Javascripting",
			"website" : "udacity.com",
			"date" : 2015
		}
	]
}

var work = {
	"companies" : [
		{
			"company":"Performia",
			"position" : "UX Designer and webmaster",
			"location" : "Soenderborg",
			"date" : "Sept 2014 - Oct 2015",
			"description" : "Design of websites, implementation and technical support. Did everything possible and impossible to make every client happy while delivering a solid user experience. Technically supported webinars."
		},{
			"company":"VUC Syd",
			"position" : "Design and Innovation teacher",
			"location": "Soenderborg",
			"date" : "Aug 2013 - Sept 2014",
			"description" : "Teaching design and innovation on campus and as e-learning. Did a very good job inspiring my students that resulted that some of them ended up studying design after gymnasium. All the materials used were developed by me from scratch. Although I have also used some methods they use at Standford University to teach their students design."
		}
	]
}

var projects = {
	"Android" : [
		{
			"name" : "Participatory Innovation",
			"link" : "https://portfolioit.wordpress.com/projects/participatory-innovation/",
			"date" : "2013",
			"description" : "Designed a mobile app helping drivers to take a break during a long trip.",
			"images" : ["https://portfolioit.files.wordpress.com/2012/09/paper-prototype.jpg"]
		},
		{
			"name" : "Re-design of a museum app",
			"link" : "https://portfolioit.wordpress.com/skills-overview/ux/",
			"date" : "2014",
			"description" : "Re-design of a vdull museum audioguide app so that it is appealing to end users.",
			"images" : ["https://portfolioit.files.wordpress.com/2014/09/dinasaurus-plus-player.png"]
		}
	]
}


displayHeader();
displayFooter();
displayWork();
projectsdisplay();
$("#mapDiv").append(googleMap);


function displayHeader(){
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedWelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var myImage = HTMLbioPic.replace("%data%", bio.bioPic);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedLinkedIn);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedEmail);
	$("#header").append(myImage);
	$("#header").append(formattedWelcomemsg);
	displaySkills();
}

function displayFooter(){
	var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#footerContacts").append(formattedLinkedIn);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedEmail);

}

function displaySkills(){
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

function displayWork(){
	for(job in work.companies){
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.companies[job].company);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.companies[job].position);
		var formattedWorkDate = HTMLworkDates.replace("%data%", work.companies[job].date);	
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.companies[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.companies[job].description);	
		$(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkDate);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);

		console.log(formattedWorkEmployer+formattedWorkTitle);
	}
}

function projectsdisplay(){
	console.log("in project display")
	for(project in projects.Android){
		$("#projects").append(HTMLprojectStart);
		var formattedName = HTMLprojectTitle.replace("%data%", projects.Android[project].name);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.Android[project].date);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.Android[project].description);
		$(".project-entry:last").append(formattedName);
		$(".project-entry:last").append(formattedDate);
		$(".project-entry:last").append(formattedDescription);
		for(image in projects.Android[project].images){
			var formattedImage = HTMLprojectImage.replace("%data%", projects.Android[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
}


$(document).click(function(loc){
	logClicks(loc.pageX, loc.pageY);
});

function logClicks(x,y){
	console.log("x,y = " + x + " " + y);
}
=======
// this is a version2 of what I have done so far

/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Galina Orlova ");


 var bio = {
	"name": "Galina Orlova",
	"role": "User Experience Designer",
	"contacts": [
		{

		"mobile": "(+45) 40-89-46-63",
		"email": "gala_orlova@yahoo.com",
		"github": "github.com/ogalchonok",
		"githubLink": "github.com/ogalchonok",
		"twitter": "BSoup1",
		"location": "Sonderborg"
		}
		],
	"welcomeMessage": "Hello and Welcome!",
	"skills": ["UX Design", "Design Research", "Gamification","Prototyping"],
	"biopic": "images/newyear.jpg",
	
};



var education = {
  "schools": [
    {"name": "University of Southern Denmark",
      "city" : "Sonderborg, DK",
      "degree": "Master of Science",
      "majors" : ["IT Product Design"],
      "dates" : 2013,
      "url" : "http://sdu.dk/"
    },
    {
      "name": "Sakhalin State University",
      "city" : "Sakhalin, Russia",
      "degree": "Master of Arts",
      "majors" : ["Russian and Literature"],
      "dates" : 2000,
      "url" : "http://vk.com/sakhgu"
    }
    ],
    "onlineCourses" : [
      {
        "title" : "Building Mobile Experiences",
        "school": "edX.org",
        "dates": 2014,
        "url" : "https://www.edx.org/course/building-mobile-experiences-mitx-21w-789x"
        
      },
      {
        "title" : "Entrepreneurship 101: Who is your customer",
        "school": "edX.org",
        "dates": 2015,
        "url" : "https://www.edx.org/course/entrepreneurship-101-who-customer-mitx-15-390-1x-0"
      }
      ]
  
};


var work = {
  "jobs" : [
    {
      "employer" : "Performia",
      "title": "UX Designer and webmaster",
      "dates": "Sept 2014 - Oct 2015",
      "description": "Design of websites, implementation and technical support."
      
},
{
  "employer" : "VUC Syd",
      "title": "Design and Innovation teacher",
      "dates": "Aug 2013 - Sept 2014",
      "description": "Teaching design and innovation on campus and as e-learning."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Participatory Innovation",
      "dates" : "2013",
      "description" : "Designed a mobile app helping drivers to take a break during a long trip.",
      "images" : [
        "https://portfolioit.files.wordpress.com/2012/09/paper-prototype.jpg",
        "images/asp.jpg"
        ]
    },
    {
      
      "title": "Re-design of a museum app",
      "dates" : "2014",
      "description" : "Re-design of a museum audioguide app",
      "images" : [
        "https://portfolioit.files.wordpress.com/2014/09/dinasaurus-plus-player.png",
        "images/audioguide2.png"
        ]
    }
    ]
}

//////////bio-header info////////////////

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcome = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



//////////////contacts////////////////////

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github).replace("#", bio.contacts.githubLink);
$("#topContacts").append(formattedGithub);





var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

/////////////////picture////////////////

var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBiopic);







///////////////welcome message//////////////


var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

///////////skills if statement//////////////

if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").append(formattedSkill);
	
	}

}	





/////////////work for/in loop within function///////////////

function displayWork() {

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace
	("%data%", work.jobs[job].employer);

	var formattedTitle = HTMLworkTitle.replace
	("%data%", work.jobs[job].title);

	var formattedEmployerTitle = formattedEmployer +
	formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace
	("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);


	var formattedDescription = HTMLworkDescription.replace
	("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);


	}

}

displayWork();


////////////////////projects//////////////////////
for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedProjectTitle = HTMLprojectTitle.replace
	("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedProjectTitle);

	var formattedProjectDates = HTMLprojectDates.replace
	("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedProjectDates);

	var formattedProjectDescription = HTMLprojectDescription.replace
	("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedProjectDescription);

	var formattedProjectImage = HTMLprojectImage.replace
	("%data%", projects.projects[project].images[0]);
	$(".project-entry:last").append(formattedProjectImage);

	var formattedProjectImage = HTMLprojectImage.replace
	("%data%", projects.projects[project].images[1]);
	$(".project-entry:last").append(formattedProjectImage);



}



	
//////////////////schools///////////////////
	
for (school in education.schools) {
	$("#education").append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace
	("%data%", education.schools[school].name);
	//$(".education-entry:last").append(formattedSchoolName);

	var formattedSchoolDegree = HTMLschoolDegree.replace
	("%data%", education.schools[school].degree);
	$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

	var formattedSchoolDates = HTMLschoolDates.replace
	("%data%", education.schools[school].dates);
	$(".education-entry:last").append(formattedSchoolDates);

	var formattedSchoolLocation = HTMLschoolLocation.replace
	("%data%", education.schools[school].city);
	$(".education-entry:last").append(formattedSchoolLocation);

	var formattedSchoolMajor = HTMLschoolMajor.replace
	("%data%", education.schools[school].majors);
	$(".education-entry:last").append(formattedSchoolMajor);




}

$(".education-entry:last").append(HTMLonlineClasses);

for (course in education.onlineCourses) {
	//$("#education").append(HTMLonlineClasses);

	var formattedOnlineTitle = HTMLonlineTitle.replace
	("%data%", education.onlineCourses[course].title);
	//$(".education-entry:last").append(formattedSchoolName);

	var formattedOnlineSchool = HTMLonlineSchool.replace
	("%data%", education.onlineCourses[course].school);
	$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

	var formattedOnlineDates = HTMLonlineDates.replace
	("%data%", education.onlineCourses[course].dates);
	$(".education-entry:last").append(formattedOnlineDates);

	var formattedOnlineURL = HTMLonlineURL.replace
	("%data%", education.onlineCourses[course].url);
	$(".education-entry:last").append(formattedOnlineURL);

}

var formattedMobileFoot = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(formattedMobileFoot);

var formattedEmailFoot = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedEmailFoot);


var formattedGithubFoot = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedGithubFoot);




////////////////////log page clicks////////////////////////////////


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});


$("#mapDiv").append(googleMap);
>>>>>>> bccc855c5b8009d33a2600a753850e44b3a00b8b
