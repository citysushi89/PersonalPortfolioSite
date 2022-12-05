
const largerProjectsList = [
    // NEW - to include new reminder app
    {
        id: 103,
        bigtitle: "Whats up next Reminder",
        titledescription: "Website that displays what new content is coming out during the current week, currently has major streaming platforms and NFL games.",
        gitbaseURL: "https://fflwholesale.herokuapp.com/",

        subtitle1: "Web Development",
        subtext1: "Built with Django and Bootstrap",
        imgURL1: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        listitem11: "SQL database",
        listitem12: "Filterable table",
        listitem13: "Only displays items coming out that week",
        
        subtitle2: "Web Scraping",
        subtext2: "Uses Selenium Webdriver to extract data from multiple websites",
        imgURL2: "https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=400",
        listitem21: "Program gets data from numerous websites",
        listitem22: "Program aggregates this data in one place",
        listitem23: "Filters for the correct date and only displays those items",

        subtitle3: "CSV",
        subtext3: "Data organization",
        imgURL3: "https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        listitem31: "Program writes and reads CSVs to ensure data's integiry",
        listitem32: "Data passed into a database for efficient display",
        listitem33: "Filterable table to display data",
    },
    // NEW
    {
        id: 100,
        bigtitle: "Wholesale Sorter",
        titledescription: "In a business project my partner and I had trouble ordering from wholesalers becuase they all required a login to view their stock. This project logs into all their websites and downloads the data as a csv and also displays the data in a paginated table for other users.",
        gitbaseURL: "https://fflwholesale.herokuapp.com/",

        subtitle1: "Website",
        subtext1: "Built with Flask, SQLAlchemy, Werkzeug Security, and Bootstrap",
        imgURL1: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        listitem11: "Authenticates users",
        listitem12: "Searchable tables",
        listitem13: "Protected pages",
        
        subtitle2: "Web Scraping",
        subtext2: "Uses Selenium Webdriver to extract data from multiple websites",
        imgURL2: "https://images.pexels.com/photos/6654031/pexels-photo-6654031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        listitem21: "Logs in and distills data from wholesale websites",
        listitem22: "Organizes data into Python-friendly formats",
        listitem23: "Displays data on an login-protected page",

        subtitle3: "Backend",
        subtext3: "SQL Database",
        imgURL3: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        listitem31: "SQL database for users and data",
        listitem32: "Hashing and Salting login information",
        listitem33: "Writes from database to table",
    },
    {
        id: 101,
        bigtitle: "Business Automation",
        titledescription: "Various smaller programs that automate business tasks I found repetitive while running my business.",
        gitbaseURL: "https://github.com/citysushi89/BusinessAutomation",

        subtitle1: "Sales Tax Remittance",
        subtext1: "Program takes a csv of order information and returns a document instructing the user how to fill out the NC sales tax remittance form",
        imgURL1: "https://images.pexels.com/photos/8927687/pexels-photo-8927687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        listitem11: "CSV",
        listitem12: "Tax Automation",
        listitem13: "Data organization",

        subtitle2: "Instagram Liker",
        subtext2: "Built with Selenium Webdriver",
        imgURL2: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        listitem21: "Web Automation",
        listitem22: "Time Module",
        listitem23: "Social Media",
        
        subtitle3: "Email Reply Reminder",
        subtext3: "User logs when and to what email they want to follow up on then the Program seaches the inbox for a response, and if none is there, it autopopulates a follow up email to send",
        imgURL3: "https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        listitem31: "Email automation",
        listitem32: "User input",
        listitem33: "Reading and writing to csv",

    },

    {
        id: 102,
        bigtitle: "Cracking the Coding Interview",
        titledescription: "Solutions (or attempts at solutions) to problems in Cracking the Coding Interivew, 6th edition.",
        gitbaseURL: "https://github.com/citysushi89/CrackingTheCodingInterview",

        subtitle1: "Data Structures and Algorithms",
        subtext1: "Created data structures and various accompanying algorithms to utilize them",
        imgURL1: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        listitem11: "Linked lists, graphs, and trees",
        listitem12: "Stacks and queues",
        listitem13: "Object-oriented programming",

        subtitle2: "Parallel learning",
        subtext2: "Suplemented the book with other resources, including Udemy and Jovian",
        imgURL2: "https://images.pexels.com/photos/1121296/pexels-photo-1121296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        listitem21: "Used several resources to avoid getting stuck on a single problem",
        listitem22: "Combined lectures, a physical book, short-form videos, with hands-on practice",
        listitem23: "Kept all notes in a single location",
        
        subtitle3: "Data Structure Templates",
        subtext3: "I built some templates to reference for various data structures while going throught the problems",
        imgURL3: "https://images.pexels.com/photos/7319274/pexels-photo-7319274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        listitem31: "Started each problem with a blank slate, while referencing templates",
        listitem32: "Created my own versions of the structures, using combined knowledge from different sources",
        listitem33: "Ensured consistency across sessions",

    },

];

export default largerProjectsList;