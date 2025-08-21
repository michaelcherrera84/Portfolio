function About() {
    return (
        <>
            <div id="about" className="py-14 px-4 bg-white text-[#382711] font-medium md:px-20">
                <h2 className="text-[#ce4233] text-2xl font-black md:text-3xl">About Me</h2>
                <div className="mt-3 w-full shadow-[2px_2px_4px_rgba(56,39,17,0.7)] bg-[#ce4233] border text-center
                text-white text-shadow-[1px_1px_rgba(56,39,17,0.7)] font-tahoma font-black text-2xl py-3 rounded-lg
                md:w-64 md:float-right md:bg-white md:text-[rgba(52,57,68,0.8)] md:text-shadow-none md:text-6xl
                md:p-8 md:m-6 lg:ml-24 md:border-[#ce4233] md:border-4 md:shadow-[1px_1px_3px_rgba(56,39,17)]
                md:hover:-translate-x-1 md:hover:-translate-y-1 transition transform duration-300
                md:hover:shadow-[3px_3px_6px_rgba(56,39,17,0.7)] ease-in-out">
                    3.9 GPA
                </div>
                <p className="py-3.5">
                    Hi! My name is Michael Herrera (preferred name Chris). I recently completed the Application Software
                    Development program at South Louisiana Community College, earning an Associate of Applied Science
                    degree. During my final year, I was honored to be hired as a lab assistant and tutor for the
                    2024–2025 academic year.
                </p>

                <p className="py-3.5">
                    Throughout my studies, I developed strong proficiency in Java, with an emphasis on web application
                    development using JavaServer Faces (JSF) and the PrimeFaces component library. I also gained
                    experience with C#, C++, SQL, HTML, CSS, and JavaScript. In addition to programming, I built a solid
                    foundation in database systems, including data modeling and design, and completed coursework in data
                    structures and algorithms. These experiences have equipped me with the technical skills and
                    problem-solving mindset necessary to begin a successful career in software development.
                </p>

                <p className="py-3.5">
                    Beyond the core curriculum, I chose to pursue additional mathematics courses—trigonometry,
                    statistics, and calculus—beyond the college algebra requirement. These studies have sharpened my
                    logical reasoning, analytical thinking, and understanding of data and probability.
                </p>

                <p className="py-3.5">
                    Since graduating, I’ve continued to grow as a developer through personal projects and self-directed
                    learning. I’ve been exploring technologies such as React (including Material UI, Tailwind CSS, and
                    Bootstrap), .NET, Spring Boot, React Native, Next.js, and Swift. I’m passionate about building
                    intuitive, maintainable software and eager to apply my skills in a professional setting.
                </p>

                <p className="py-3.5">
                    I’m excited by the opportunity to contribute to a forward-thinking team and look forward to
                    discussing how I can add value to your organization.
                </p>
            </div>
        </>
    );
}

export default About;