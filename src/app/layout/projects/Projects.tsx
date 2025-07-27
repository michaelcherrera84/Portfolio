import Project from './Project';

function Projects() {
    return (
        <div id="projects" className="py-14 px-4 bg-[#343944] text-white font-medium md:px-20">

            <h2 className="text-2xl font-black md:text-3xl pb-2">Projects</h2>

            <Project name="Reactivities"
                     description='This application is the culmination of the Udemy course entitled "Complete guide to building an app with .Net Core and React". It is a multi-project ASP.NET Core solution built using Clean Architecture and the CQRS and Mediator pattern. The app is an example social network application that allows users to sign up to events.'
                     imageUrls={[
                         '/src/assets/reactivities/reactivities1.png',
                         '/src/assets/reactivities/reactivities2.png',
                         '/src/assets/reactivities/reactivities3.png',
                         '/src/assets/reactivities/reactivities4.png',
                         '/src/assets/reactivities/reactivities5.png',
                         '/src/assets/reactivities/reactivities6.png',
                         '/src/assets/reactivities/reactivities7.png',
                         '/src/assets/reactivities/reactivities8.png',
                     ]}
                     url="https://github.com/michaelcherrera84/Reactivities"
            />

            <Project name="Portal"
                     description="This is a simple JSF (JavaServer Faces) project integrated with PrimeFaces, created as a demonstration for my portfolio. The project showcases a web application built using Jakarta EE technologies and PrimeFaces UI components. It's designed for educational purposes and to demonstrate how JSF and PrimeFaces can be used to build responsive and interactive user interfaces."
                     imageUrls={[
                         '/src/assets/portal/portal1.png',
                         '/src/assets/portal/portal2.png',
                         '/src/assets/portal/portal3.png',
                         '/src/assets/portal/portal4.png',
                         '/src/assets/portal/portal5.png',
                         '/src/assets/portal/portal6.png',
                         '/src/assets/portal/portal7.png',
                     ]}
                     url="https://github.com/michaelcherrera84/Portal"
            />

            <Project name="NYSE"
                     description="This is a simple JSF (JavaServer Faces) project integrated with PrimeFaces, created as a demonstration for my portfolio. The project showcases a web application build using Jakarta EE technologies and PrimeFaces UI components. It's designed for educational purposes and to demonstrate threads and method synchronization along with web application templating."
                     imageUrls={[
                         '/src/assets/nyse/nyse1.png',
                     ]}
                     url="https://github.com/michaelcherrera84/NYSE"
            />

            <Project name="ASDV Assignments"
                     description="This is a school project developed as a basic Learning Management System (LMS), inspired by platforms like Canvas. The application was built using Jakarta EE, JSF, and PrimeFaces, and it demonstrates the use of EJBs, web services, and common enterprise design patterns."
                     imageUrls={[
                         '/src/assets/asdv-assignments/asdv-assignments1.gif',
                         '/src/assets/asdv-assignments/asdv-assignments2.png',
                         '/src/assets/asdv-assignments/asdv-assignments3.png',
                         '/src/assets/asdv-assignments/asdv-assignments4.gif',
                     ]}
                     url="https://github.com/michaelcherrera84/ASDVAssignment"
            />
        </div>
    );
}

export default Projects;