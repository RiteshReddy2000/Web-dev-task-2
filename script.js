document.addEventListener("DOMContentLoaded", function() {
    // Data for courses
    const courses = [
        {
            title: "Java Full Stack Developer Course",
            description: "Join our Java Full Stack Developer course and learn the skills required to become a proficient full stack developer using Java technologies.",
            faculties: ["John Doe", "Jane Smith"]
        },
        {
            title: "Python Developer Course",
            description: "Enroll in our Python Developer course to master Python programming language and its application in various domains.",
            faculties: ["Michael Johnson", "Emily Brown"]
        },
        {
            title: "DevOps Course",
            description: "Explore the DevOps methodologies and tools with our comprehensive DevOps course designed to meet industry demands.",
            faculties: ["David Wilson", "Sarah Adams"]
        },
        {
            title: "Testing Course",
            description: "Learn software testing techniques and methodologies in our Testing course and become a skilled software tester.",
            faculties: ["Robert Garcia", "Laura Martinez"]
        }
    ];

    // Function to create course elements
    function createCourseElement(course) {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");

        const titleElement = document.createElement("h2");
        titleElement.textContent = course.title;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = course.description;

        const facultiesElement = document.createElement("p");
        facultiesElement.textContent = "Faculties: " + course.faculties.join(", ");

        courseDiv.appendChild(titleElement);
        courseDiv.appendChild(descriptionElement);
        courseDiv.appendChild(facultiesElement);

        return courseDiv;
    }

    // Function to add courses to the page
    function addCoursesToPage() {
        const coursesContainer = document.getElementById("coursesContainer");
        courses.forEach(course => {
            const courseElement = createCourseElement(course);
            coursesContainer.appendChild(courseElement);
        });
    }

    // Add courses to the page
    addCoursesToPage();
});
