export default function Project() {
  const projects = [
        {
      title: "Portfolio Website",
      link: "https://github.com/dbhagria-2004/my-portfolio",
      dates: "January 2026",
      para1:
        "Designed and developed my personal portfolio website to showcase projects, skills, and experiences in a modern, interactive format.",
      para2:
        "Built using React, Vite, and Tailwind CSS, focusing on responsive design, animations, and smooth user experience.",
      skills: "React | Vite | TailwindCSS | Frontend Development",
    },
    {
      title: "Stock Price Prediction & Financial Data Analysis",
      link: "https://github.com/dbhagria-2004/Stock-Price-Modeling-with-Regression",
      dates: "December 2025",
      para1:
        "Analyzed daily stock market data from Yahoo Finance, engineering features such as daily percent change and moving averages to model closing prices.",
      para2:
        "Implemented and evaluated linear, polynomial, and interaction-based regression models in NumPy, using MSE, R², and residual analysis to compare performance and interpret results.",
      skills: "Python | NumPy | Regression | Financial Analysis",
    },
    {
      title: "Plant Disease Detection",
      link: "https://github.com/dbhagria-2004/Plant_Disease_Detection",
      dates: "March 2025",
      para1:
        "Trained a CNN using TensorFlow/Keras on the Kaggle Plant Disease dataset to classify plant diseases from image inputs.",
      para2:
        "Deployed the model via a Streamlit web application, enabling real-time image uploads and disease predictions to support early detection.",
      skills: "TensorFlow | Keras | Streamlit | Computer Vision",
    },
    {
      title: "MBTA Planner",
      link: "https://github.com/dbhagria-2004/MBTA-Planner",
      dates: "December 2024",
      para1:
        "Built a Java-based transit application that enables accurate real-time trip planning by integrating the MBTA public REST API to fetch and parse live JSON data for over 100+ routes and stops.",
      para2:
        "Designed an interactive UI that provides real-time arrival updates and supports accurate trip planning.",
      skills: "Java | REST APIs | JSON | UI Design",
    },
  ];

  return (
    <section id="projects" className="section">
      <h3 className="section__title">Projects</h3>

      {projects.map((project) => (
        <div key={project.title} style={{ marginBottom: "32px" }}>
          {/* Header */}
          <p className="project_title">
            {project.dates} •{" "}
            {project.title}{" "}
            <a href={project.link} target="_blank" rel="noreferrer" className="project__link">🔗</a>
          </p>

          {/* Paragraphs */}
          <p className="section__text">{project.para1}</p>
          <p className="section__text">{project.para2}</p>

          {/* Skills */}
          <p className="section__text">{project.skills}</p>
        </div>
      ))}
    </section>
  );
}
