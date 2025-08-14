const header = {
 homepage: "https://porfolio.simbl.dev",
 title: "JS.",
};

const about = {
 name: "Benjamin DeRaps",
 role: "Data Analyst",
 description:
  " Specializing in cleaning, analyzing, and visualizing data to help organizations make informed, data-driven decisions",
 resume: "/api/resume",
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
   `Analyzed customer demographics and restaurant performance using Excel and Tableau to identify high value customer segments,
   Resulting in actionable marketing strategies for targeted promotions. Built interactive dashboards with advanced filters to 
   visualize customer behavior patterns across multiple demographic variables.`,
  stack: ["Excel", "Tableau"],
  liveUrl: "https://public.tableau.com/views/ZomatosCustomerSegmentationAnalysis/SalesbyIncomeEducation?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
 },
 {
  name: "NYC AirBNB Revenue analysis",
  year: "2025",
  description:
   `Analyzed Manhattan Air BNB listings using Excel pivot tables and data visualization to identify top performing neighborhoods 
   and property types, Projecting revenue potential exceeding 350K annually for high-demand listings. Delivered strategic 
   recommendations for optimizing vacation rental investments in high revenue markets.`,
  stack: ["Excel"],
  liveUrl: "https://docs.google.com/spreadsheets/d/1D0biCmo5TYe00wDNYJTio44n-6-x-fQxeUDynDXGd6w/edit?usp=sharing",
 },
 {
  name: " Superstore Profit Optimization Dashboard",
  year: "2025",
  description:
   ` Developed a comprehensive Tableau dashboard analyzing sales, returns, and advertising ROI to identify profit drivers
   and reduce return losses, providing data=driven recommendations for product discontinuation and targeted advertising 
   strategies. Created Interactive visualizations with color coded performance metrics for executive stakeholder presentation`,
  stack: ["Tableau","Excel"],
 },
];

const skills = [
 "Excel",
 "SQL",
 "Tableau",
 "Power BI",
 "Python",
 "Data Visualization",
 "Data Storytelling",
];

const education = [
 {
  name: "TripleTen Data Analytics Boot Camp",
  { date: "2024 - 2025", location: "Remote" },
  ],

  description:
   `Triple 10 is a rigorous, project based data analytics program designed to prepare students for real-world problem-solving. 
 Through an intensive curriculum, students develop expertise in SQL, excel, tableau, power BI, Python,, and data visualization 
 while working on practical business cases across multiple industries. The program emphasizes hands-on learning, critical thinking,
 and end-to-end project execution. From cleaning and analyzing raw data to delivering professional dashboards, by the end, graduates
 have a portfolio of real projects and the skills to succeed in fast paced, data driven environments.`,
 },
 
export { header, about, projects, skills, experience, contact };
