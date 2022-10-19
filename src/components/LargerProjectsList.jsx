
const largerProjectsList = [

    {
        id: 100,
        bigtitle: "Wholesale Sorter",
        titledescription: "In a business project my partner and I had trouble ordering from wholesalers becuase they all required a login to view their stock. This project logs into all their websites and downloads the data as a csv and also displays the data in a paginated table for other users.",
        gitbaseURL: "https://fflwholesale.herokuapp.com/",

        subtitle1: "Website",
        subtext1: "First iteration was built with Flask, SQLAlchemy, Werkzeug Security, and Bootstrap before switching over to Django",
        imgURL1: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        listitem11: "Authenticates users",
        listitem12: "Tables",
        listitem13: "Pagination",
        
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
        listitem33: "Uses standard Django admin page",
    },
    {
        id: 101,
        bigtitle: "Business Automation",
        titledescription: "Various smaller programs that automate business tasks I found repetitive while running my business.",
        gitbaseURL: "https://github.com/citysushi89/BusinessAutomation",

        subtitle1: "Instagram Liker",
        subtext1: "Built with Selenium Webdriver",
        imgURL1: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        listitem11: "Web Automation",
        listitem12: "Time Module",
        listitem13: "Social Media",
        
        subtitle2: "Email Reply Reminder",
        subtext2: "User logs when and to what email they want to follow up on then the Program seaches the inbox for a response, and if none is there, it autopopulates a follow up email to send",
        imgURL2: "https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        listitem21: "Email automation",
        listitem22: "User input",
        listitem23: "Reading and writing to csv",

        subtitle3: "Pdf Reading",
        subtext3: "Program Extracts Data with PdfPlumber (The data and some code has been hidden because it contains personal information)",
        imgURL3: "https://images.pexels.com/photos/586019/pexels-photo-586019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        listitem31: "Pdf plumber",
        listitem32: "Data organization",
        listitem33: "Pdf and csv",
    },

];

export default largerProjectsList;