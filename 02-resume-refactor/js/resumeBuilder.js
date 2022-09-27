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
            github: "https://github.com/ffrosch/",
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
        display: function () { },
    },

    education: {
        schools: [
            {
                name: "Onsabrück University",
                location: "Osnabrück",
                degree: "Bachelor of Science",
                majors: "Biology",
                dates: "2009-2012",
                url: "",
            },
            {
                name: "Eberhard Karls University",
                location: "Tübingen",
                degree: "Master of Science",
                majors: "Geoecology",
                dates: "2012-2016",
                url: "",
            },
            {
                name: "University of Alaska Fairbanks",
                location: "USA",
                degree: "Exchange",
                majors: "GIS, Remote Sensing and Data Analysis",
                dates: "2014-2015",
                url: "",
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
        display: function () { },
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
        ],
        display: function () { }
    },

    projects: {
        projects: [
            {
                title: "Automated Detection of Objects in Thermal Camera Footage",
                dates: "2019",
                description: "Python, OpenCV",
                images: ["images/fry.jpg"],
            }
        ],
        display: function () { }
    },
};
