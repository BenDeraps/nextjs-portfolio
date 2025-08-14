const header = {
 homepage: "https://porfolio.simbl.dev",
 title: "JS.",
};

const about = {
 name: "Benjamin DeRaps",
 role: "Data Analyst",
 description:
  " Specializing in cleaning, analyzing, and visualizing data to help organizations make informed, data-driven decisions",
 social: {
  linkedin: "www.linkedin.com/in/benjaminderaps",
  github: "https://github.com/BenDeRaps",
 },
};

const projects = [
  {
    name: "Zomato Customer Segment Analysis",
    year: "2025",
    description:
      "Analyzed customer demographics and restaurant performance using Excel and Tableau to identify high value customer segments. Built interactive dashboards with advanced filters to visualize behavior patterns across multiple variables.",
    stack: ["Excel", "Tableau"],
    liveUrl: "https://public.tableau.com/views/ZomatosCustomerSegmentationAnalysis/SalesbyIncomeEducation?:language=en-US&:sid&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  {
    name: "NYC AirBNB Revenue analysis",
    year: "2025",
    description:
      "Analyzed Manhattan Airbnb listings with Excel pivot tables and data visualization to identify top neighborhoods and property types. Projected revenue potential exceeding 350K annually for high-demand listings and delivered recommendations.",
    stack: ["Excel"],
    liveUrl: "https://docs.google.com/spreadsheets/d/1D0bICmo5TYE0wDMN7J10a4n-6-x-fQxeUDnyIDXG6w/edit?usp=sharing"
  },
  {
    name: "Superstore Profit Optimization Dashboard",
    year: "2025",
    description:
      "Developed a Tableau dashboard analyzing sales, returns, and advertising ROI to identify profit drivers and reduce return losses. Created interactive visuals with color-coded performance metrics for exec presentations.",
    stack: ["Tableau", "Excel"],
    liveUrl: "https://docs.google.com/spreadsheets/d/1D0bICmo5TYE0wDMN7J10a4n-6-x-fQxeUDnyIDXG6w/edit?usp=sharing"
  }
];

const skills = [
  "Excel",
  "SQL",
  "Tableau",
  "Power BI",
  "Python",
  "Data Visualization",
  "Data Storytelling"
];

const education = [
  {
    name: "TripleTen Data Analytics Boot Camp",
    date: "2024 - 2025",
    location: "Remote",
    description:
      "TripleTen is a rigorous, project-based data analytics program designed to prepare students for real-world problem solving. Through an intensive curriculum, students develop expertise in SQL, Excel, Tableau, Power BI, Python, and data visualization while working on practical business cases across multiple industries. The program emphasizes hands-on learning, critical thinking, and end-to-end project execution. From cleaning and analyzing raw data to delivering professional dashboards, by the end, graduates have a portfolio of real projects and the skills to succeed in fast-paced, data-driven environments.",
  }
];

export { header, about, projects, skills, education }; 
