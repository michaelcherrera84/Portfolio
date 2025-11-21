import Project from './Project';

function Projects() {
    return (
        <div id="projects" className="py-14 px-4 bg-[#343944] text-white font-medium md:px-20">

            <h2 className="text-2xl font-black md:text-3xl pb-2">Projects</h2>

            <Project name="Smart Athlete"
                     description="The project is a new work-in-progress. It is a practice .NET RESTful API, with a React frontend using the PrimeReact UI library. It feature a clean service-layer architecture, built with .Net 10 Web API and using Entity Framework Core and AutoMapper."
                     imageUrls={[
                         '/images/smart-athlete/smart-athlete1.png',
                         '/images/smart-athlete/smart-athlete2.png',
                         '/images/smart-athlete/smart-athlete3.png',
                     ]}
                     url="https://github.com/michaelcherrera84/SmartAthlete"
            />

            <Project name="Reactivities"
                     description='This application is the culmination of the Udemy course entitled "Complete guide to building an app with .Net Core and React". It is a multi-project ASP.NET Core solution built using Clean Architecture and the CQRS and Mediator pattern. The app is an example social network application that allows users to sign up to events.'
                     imageUrls={[
                         '/images/reactivities/reactivities1.png',
                         '/images/reactivities/reactivities2.png',
                         '/images/reactivities/reactivities3.png',
                         '/images/reactivities/reactivities4.png',
                         '/images/reactivities/reactivities5.png',
                         '/images/reactivities/reactivities6.png',
                         '/images/reactivities/reactivities7.png',
                         '/images/reactivities/reactivities8.png',
                     ]}
                     url="https://github.com/michaelcherrera84/Reactivities"
            />

            <Project name="Portal"
                     description="This is a simple JSF (JavaServer Faces) project integrated with PrimeFaces, created as a demonstration for my portfolio. The project showcases a web application built using Jakarta EE technologies and PrimeFaces UI components. It's designed for educational purposes and to demonstrate how JSF and PrimeFaces can be used to build responsive and interactive user interfaces."
                     imageUrls={[
                         '/images/portal/portal1.png',
                         '/images/portal/portal2.png',
                         '/images/portal/portal3.png',
                         '/images/portal/portal4.png',
                         '/images/portal/portal5.png',
                         '/images/portal/portal6.png',
                         '/images/portal/portal7.png',
                     ]}
                     url="https://github.com/michaelcherrera84/Portal"
            />

            <Project name="NYSE"
                     description="This is a simple JSF (JavaServer Faces) project integrated with PrimeFaces, created as a demonstration for my portfolio. The project showcases a web application build using Jakarta EE technologies and PrimeFaces UI components. It's designed for educational purposes and to demonstrate threads and method synchronization along with web application templating."
                     imageUrls={[
                         '/images/nyse/nyse1.png',
                     ]}
                     url="https://github.com/michaelcherrera84/NYSE"
            />

            <Project name="ASDV Assignments"
                     description="This is a school project developed as a basic Learning Management System (LMS), inspired by platforms like Canvas. The application was built using Jakarta EE, JSF, and PrimeFaces, and it demonstrates the use of EJBs, web services, and common enterprise design patterns."
                     imageUrls={[
                         '/images/asdv-assignments/asdv-assignments1.gif',
                         '/images/asdv-assignments/asdv-assignments2.png',
                         '/images/asdv-assignments/asdv-assignments3.png',
                         '/images/asdv-assignments/asdv-assignments4.gif',
                         '/images/asdv-assignments/asdv-assignments5.png',
                         '/images/asdv-assignments/asdv-assignments6.png',
                         '/images/asdv-assignments/asdv-assignments7.gif',
                     ]}
                     url="https://github.com/michaelcherrera84/ASDVAssignment"
            />

            <Project name="GitHub"
                     description="Check out my GitHub for more projects and tutorials that are in progress or that I have completed since graduating."
                     url="https://github.com/michaelcherrera84"
            />
        </div>
    );
}

export default Projects;