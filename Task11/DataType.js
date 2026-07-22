let course = {
    title: "JavaScript Fundamentals",
    duration: 40,
    price: 1200,
    instructor: {
        fullName: "Farida Amr",
        specialty: "Frontend Development"
    }
}

console.log(course);
let { title:courseTitle, duration:courseDuration, instructor:{fullName:instructorName, specialty:instructorSpecialty} } = course;
console.log(`Title: ${courseTitle}, Duration: ${courseDuration}\nInstructor Name: ${instructorName}, Specialty: ${instructorSpecialty}`);