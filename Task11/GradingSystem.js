var me = {
    fullName: "Farida Amr",
    age: 21,
    gender: "Female",
    job: "Student",
    salary: 15000,
    isFreelancer: true,
    favoriteHobby: {
        name: "Developer",
        yearsPracticing: 3,
        level: "Intermediate",
        gear: {
            laptop: "MacBook Pro",
            monitors: 2
        }
    },
    code: function(language){
        console.log(`I am coding in ${language}`);
    }
};
console.log(me);