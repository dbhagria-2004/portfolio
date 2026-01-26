export default function Experience() {
  const jobs = [
    {
      title: "AI Annotator",
      company: "Gentuity, LLC",
      link: "https://www.gentuity.com",
      dates: "June 2025 - Present",
      para1:
        "Currenty, I work as an AI Annotator at Gentuity, LLC, where I annotate healthcare images and data used to train and evaluate machine learning models. This role has helped me understand how real-world data flows through AI systems.",
      para2:
        "I collaborate closely with the ML team to improve workflows, learn how models are developed and refined, and solve practical problems using machine learning techniques.",
      skills: "Computer Vision | Pytorch | AI Annotation | React-Flask",
    },
    {
      title: "Technical Support Assistant",
      company: "MassBay",
      link: "https://www.massbay.edu",
      dates: "Feb 2023 - Feb 2025",
      para1:
        "In past, I've worked as a Technical Support Assistant at MassBay Community College, where I supported students and staff by troubleshooting software, hardware, and network issues. I regularly diagnosed problems and ensured systems were functioning reliably.",
      para2:
        "I also deployed, imaged, and tested computers and software packages, gaining hands-on experience with system setup, maintenance, and institutional IT workflows.",
      skills: "Technical Support | Troubleshooting | Hardware & Software Deployment",
    },
    {
      title: "Peer Tutor",
      company: "MassBay",
      link: "https://www.massbay.edu",
      dates: "Feb 2023 - Feb 2025",
      para1:
        "Additionally, I've served as a Peer Tutor at MassBay Community College, where I worked directly with students in math and computer science. I focused on breaking down complex concepts into clear, understandable ideas.",
      para2:
        "I led individual and group study sessions, helping students strengthen problem-solving skills, build confidence, and improve their academic performance.",
      skills: "Tutoring | Math & CS | Communication | Leadership",
    },
  ];

  return (
    <section id="experience" className="section">
      <h3 className="section__title">Experience</h3>

      {jobs.map((job) => (
        <div className = "project_section" key={job.title} style={{ marginBottom: "32px" }}>
          {/* Header */}
          <p className="project_title">
            {job.dates} •{" "}
              {job.title}
            • {job.company}{" "}
            <a href={job.link} target="_blank" rel="noreferrer">🔗</a>
          </p>

          {/* Paragraphs */}
          <p className="section__text">{job.para1}</p>
          <p className="section__text">{job.para2}</p>

          {/* Skills */}
          <p className="section__text">{job.skills}</p>
        </div>
      ))}
    </section>
  );
}
