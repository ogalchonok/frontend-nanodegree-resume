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