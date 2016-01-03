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