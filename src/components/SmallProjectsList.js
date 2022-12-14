
const smallerProjectsList = [
    // Next id should be 12

    {
        id: 5,
        title: "NFL Data Analysis",
        imgURL: "https://images.pexels.com/photos/128457/pexels-photo-128457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Program scrapes data from ESPN and visualizes player statistics using graphs",
        tagOne: "Data visualization with Plotly and Matplotlib",
        tagTwo: "Web scraping with Beautiful Soup",
        tagThree: "Data organization with pandas",
        gitURL: "https://github.com/citysushi89/small_projects/tree/main/NFLDataAnalysis",

    }, 
    {
        id: 9,
        title: "Weather Alert Texter",
        imgURL: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Program accesses a weather API and sends a SMS text via Twilio if it will be cold and/or rainy in the next 12 hours",
        tagOne: "API Access",
        tagTwo: "Twilio and SMS",
        tagThree: "Env variables",
        gitURL: "https://github.com/citysushi89/small_projects/tree/main/WeatherAlertTexter",

    }, 
    {
        id: 10,
        title: "ISS Overhead Notifier",
        imgURL: "https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Program accessses APIs to check if the ISS is over a given latitude/longitude and if it is night. The program then notifies the via email user if both conditions are met.",
        tagOne: "Python in the cloud",
        tagTwo: "API access",
        tagThree: "Email automation",
        gitURL: "https://github.com/citysushi89/small_projects/tree/main/ISSOverheadNotifier",

    },
    {
        id: 1,
        title: "Encoder/Decoder",
        imgURL: "https://images.pexels.com/photos/7319078/pexels-photo-7319078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Uses your choice of Morse Code or the Caesar Cipher to encode and decode text",
        tagOne: "Basic Cryptography",
        tagTwo: "Relies on internal dictionaries/lists for decoding",
        tagThree: "Copies encoded or decoded message to clipboard once completed",
        gitURL: "https://github.com/citysushi89/small_projects/blob/main/encoderDecoder.py",

    },
    // {
    //     id: 6,
    //     title: "Unit Testing",
    //     imgURL: "https://images.pexels.com/photos/6684255/pexels-photo-6684255.jpeg?cs=srgb&dl=pexels-andy-barbour-6684255.jpg&fm=jpg",
    //     description: "Program contains basic math operations and uses the unittest module to assess their effectiveness",
    //     tagOne: "Unitest module",
    //     tagTwo: "Basic math operations confirmed via testing",
    //     tagThree: "Importing and testing functions",
    //     gitURL: "https://github.com/citysushi89/small_projects/tree/main/unittest",

    // },
    {
        id: 7,
        title: "Space Invaders Clone",
        imgURL: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Blantant Rip off of the gameplay of Space Invaders but with a unique setting",
        tagOne: "Pygame and Pyautogui",
        tagTwo: "Uses sounds for player feedback",
        tagThree: "Perpetually checks for collisions and endgame conditions",
        gitURL: "https://github.com/citysushi89/small_projects/tree/main/SpaceInvaders",

    },
    {
        id: 8,
        title: "Selection of Small Book Projects",
        imgURL: "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Link includes a few small projects done following the Big Book of Small Python Projects",
        tagOne: "Cho Han (Dice Game)",
        tagTwo: "Clickbait Headline Generator",
        tagThree: "Countdown",
        gitURL: "https://github.com/citysushi89/small_projects/tree/main/Book%20Projects",

    },
    // {
    //     id: 2,
    //     title: "BlackJack",
    //     imgURL: "https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     description: "Text-based Blackjack game.",
    //     tagOne: "Tag concepts / libraries / languages used",
    //     tagTwo: "ie Python",
    //     tagThree: "ie pyperclip",
    //     gitURL: "https://github.com/citysushi89/small_projects/blob/main/blackjack.py",

    // },
    // {
    //     id: 3,
    //     title: "Image Watermarker",
    //     imgURL: "https://images.pexels.com/photos/220213/pexels-photo-220213.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     description: "Takes a picture and a watermark and returns a watermarked image.",
    //     tagOne: "Tag concepts / libraries / languages used",
    //     tagTwo: "ie Python",
    //     tagThree: "ie pyperclip",
    //     gitURL: "",

    // },

    {
        id: 4,
        title: "Dino Game Automation",
        imgURL: "https://images.pexels.com/photos/2564846/pexels-photo-2564846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Program opens and runs the Google Dinosaur Game automatically",
        tagOne: "Web Automation",
        tagTwo: "Selenium Webdriver",
        tagThree: "Pyautogui",
        gitURL: "https://github.com/citysushi89/small_projects/blob/main/dino.py",

    },

    {
        id: 11,
        title: "Test Driven Development",
        imgURL: "https://images.pexels.com/photos/6684209/pexels-photo-6684209.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Follows the book 'Obey The Testing Goat' to develop a Django app",
        tagOne: "Functional Tests",
        tagTwo: "Web development with Django",
        tagThree: "Unittest Module",
        gitURL: "https://github.com/citysushi89/testdrivendevelopmentsite",

    }, 

];

export default smallerProjectsList;