function Project(name, image, short, description, technologies, repository, deployed) {
    this.name = name;
    this.image = image;
    this.short = short;
    this.description = description;
    this.technologies = technologies;
    this.repository = repository;
    this.deployed = deployed;
}

var projects = [];
projects.push(
    new Project(
        "Unify", 
        "/assets/images/unify.png",
        "Unify is a website for searching colleges in the United States, incorporating data from the Department of Education and Google Maps.",
        "Unify is a website for searching colleges in the United States, incorporating data from the Department of Education and Google Maps. Includes separate views for prospective students, who can save schools to a list and ask questions about schools, and alumni, who can rate their school and answer questions posted by prospective students.",
        ["U.S. Department of Education College Scorecard API", "Node.js", "Express.js", "MySQL", "Sequelize", "JSON Web Token", "React", "Foundation"],
        "https://github.com/tsberry/unify",
        "https://unify-cbc.herokuapp.com"
    ));

projects.push(
    new Project(
        "Jokester", 
        "/assets/images/jokester.png",
        "Jokester is a simple web forum for posting, viewing, and commenting on jokes, written with Node.js, Express.js, and Sequelize.",
        "Jokester is a simple web forum for posting, viewing, and commenting on jokes. Users can also upvote or downvote jokes and comments.", 
        ["Node.js", "Express.js", "MySQL", "Sequelize", "Passport.js", "Handlebars.js", "Bootstrap"],
        "https://github.com/tsberry/jokester", 
        "https://jokester-4-26.herokuapp.com"
    ));

projects.push(
    new Project(
        "Face Yourself", 
        "/assets/images/faceyourself.jpg",
        "Face Yourself is a single page web application that takes in a photo of a face and provides recommendations for a user based on the emotions detected in the face.",
        "Face Yourself is a single page web application taking in a photo of a face and integrating two third-party APIs (Face++ and Tastedive) to provide recommendations for a user based on the emotions detected in the face.",
        ["Face++ API", "Tastedive API", "Firebase", "jQuery", "Materialize"],
        "https://github.com/davidlatuno/faceyourself", 
        "https://davidlatuno.github.io/FaceYourself"
    ));

projects.push(
    new Project(
        "Friend Finder", 
        "/assets/images/friendfinder.jpg",
        "Friend Finder is a website that allows you to take a brief personality quiz and then matches you with the person whose responses were most similar to you.",
        "Friend Finder is a website that allows you to take a brief personality quiz and then matches you with the person whose responses were most similar to you.", 
        ["Node.js", "Express.js", "Bootstrap"],
        "https://github.com/tsberry/friendfinder", 
        "https://friendfinder-2018.herokuapp.com"
    ));

projects.push(
    new Project(
        "Bamazon", 
        "/assets/images/bamazon.png",
        "Bamazon is a command-line node application simulating a virtual store.",
        "Bamazon is a command-line node application simulating a virtual store. It contains three separate views for customers, managers, and supervisors; each view has different options such as buying products, checking inventory, and viewing store sales by department.",
        ["Node.js", "Inquirer"],
        "https://github.com/tsberry/bamazon", 
        "none"
    ));

projects.push(
    new Project(
        "Star Wars Game", 
        "/assets/images/starwars.png",
        "The Star Wars Game is a very simple turn-based fighting game.",
        "The Star Wars Game is a very simple turn-based fighting game. You begin by picking a character. You then challenge opponents in sequence, attacking each until either your character or the opponent is reduced to 0 hp. If you defeat all opponents before your character reaches 0 hp, you win the game.",
        ["HTML", "CSS", "jQuery"],
        "https://github.com/tsberry/week-4-game-hard", 
        "https://tsberry.github.io/week-4-game-hard"
    ));

module.exports = projects;