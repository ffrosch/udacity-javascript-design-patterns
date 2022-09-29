/*
This is empty on purpose! Your code to build the resume will go here.
 */

const model = {
    bio: {
        name: "Florian Frosch",
        role: "Programmer",
        contacts:
        {
            mobile: "+49 111 1111111",
            email: "email@example.de",
            github: "ffrosch",
            twitter: "",
            location: "Hinterzarten",
        },
        welcomeMessage: "Wilkommen auf meiner Homepage!",
        skills: [
            "Python",
            "JavaScript",
            "Data Analysis",
            "Machine Learning",
            "Image Classification",
            "Full Stack Development",
        ],
        biopic: "https://avatars.githubusercontent.com/u/22937059?v=4",
    },

    education: {
        schools: [
            {
                name: "Onsabrück University",
                location: "Osnabrück, Niedersachsen, Deutschland",
                degree: "Bachelor of Science",
                majors: "Biology",
                dates: "2009-2012",
                url: "https://www.uni-osnabrueck.de/",
            },
            {
                name: "Eberhard Karls University",
                location: "Tübingen, Baden-Württemberg, Deutschland",
                degree: "Master of Science",
                majors: "Geoecology",
                dates: "2012-2016",
                url: "https://uni-tuebingen.de/",
            },
            {
                name: "University of Alaska Fairbanks",
                location: "Fairbanks, Alaska, USA",
                degree: "Exchange",
                majors: "GIS, Remote Sensing and Data Analysis",
                dates: "2014-2015",
                url: "https://www.uaf.edu/",
            }
        ],
        onlineCourses: [
            {
                title: "Full Stack Web Developer",
                school: "Udacity",
                dates: "02/2021",
                url: "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd0044",
            },
            {
                title: "Data Structures and Algorithms",
                school: "Udacity",
                dates: "07/2022",
                url: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
            },
            {
                title: "Intro to Machine Learning with PyTorch",
                school: "Udacity",
                dates: "12/2020",
                url: "https://www.udacity.com/course/intro-to-machine-learning-nanodegree--nd229",
            }
        ],
    },

    work: {
        jobs: [
            {
                employer: "Forstliche Versuchs- und Forschungsanstalt",
                title: "Wissenschaftliche Mitarbeiter",
                location: "Freiburg i. Br.",
                dates: "07/2017-12/2021",
                description: "Application Development, Database Design, Project Management",
            },
            {
                employer: "Freelancer",
                title: "Developer",
                location: "Freiburg i. Br.",
                dates: "in progress",
                description: "Full Stack, Application Development, Database Design, GIS and Data Analysis",
            }
        ]
    },

    projects: {
        projects: [
            {
                title: "Automated Detection of Objects in Thermal Camera Footage",
                dates: "2019",
                description: "Python, OpenCV",
                images: ["images/fry.jpg"],
            }
        ]
    },
};

const controller = {
    init: function () {
        viewBio.init(model.bio);
        viewEducation.init(model.education);
        // viewProjects.init(model.projects.projects);
    },
};

const viewBio = {

    init: function (data) {
        this.data = data;
        this.renderName();
        this.renderPic();
        this.renderContacts();
        this.renderSkills();
    },

    renderName: function () {
        $("#header").prepend(
            HTMLheaderName.replace("%data%", this.data.name),
            HTMLheaderRole.replace("%data%", this.data.role)
        );
    },

    renderPic: function () {
        $("#header").append(
            HTMLbioPic.replace("%data%", this.data.biopic),
            HTMLwelcomeMsg.replace("%data%", this.data.welcomeMessage)
        );
    },

    renderContacts: function () {
        let entries = Object.entries(this.data.contacts);
        let contacts = entries.map(([contact, value]) => {
            let html;
            if (value) {
                if (contact === "github") {
                    html = HTMLgithub;
                } else if (contact === "email") {
                    html = HTMLemail;
                } else {
                    html = HTMLcontactGeneric;
                };
                return html
                    .replaceAll("%contact%", contact)
                    .replaceAll("%data%", value);
            }
        });
        $("#topContacts").append(contacts);
        $("#footerContacts").append(contacts);
    },

    renderSkills: function () {
        let skills = this.data.skills;
        if (skills) {
            $("#header").append(HTMLskillsStart);
            $("#skills").append(skills.map(element => {
                return HTMLskills.replace("%data%", element)
            }));
        }
    },

};

const viewEducation = {
    init: function (data) {
        this.data = data;
        this.renderSchools();
        this.renderOnlineCourses();
    },

    renderSchools: function () {
        const schools = this.data.schools;

        schools.forEach(entry => {
            let wrapper = $(HTMLschoolStart);

            wrapper.append(
                HTMLschoolName.replace("%data%", entry["name"]).replace("%url%", entry["url"]) +
                HTMLschoolDegree.replace("%data%", entry["degree"]),
                HTMLschoolDates.replace("%data%", entry["dates"]),
                HTMLschoolLocation.replace("%data%", entry["location"]),
                HTMLschoolMajor.replace("%data%", entry["majors"])
            );

            $("#education").append(wrapper);
        })

    },

    renderOnlineCourses: function () {
        const courses = this.data.onlineCourses;

        $("#education").append(courses ? HTMLonlineClasses : "");

        courses.forEach(entry => {
            let wrapper = $(HTMLschoolStart);

            wrapper.append(
                HTMLonlineTitle.replace("%data%", entry["title"]).replace("%url%", entry["url"]) +
                HTMLonlineSchool.replace("%data%", entry["school"]),
                HTMLonlineDates.replace("%data%", entry["dates"]),
            );

            $("#education").append(wrapper);
        })
    },
}

controller.init();
