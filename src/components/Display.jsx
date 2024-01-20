/* eslint-disable react/prop-types */
export function Display({ data, isShown }) {
    return (
        <div className={!isShown.display ? "hidden" : ""}>
            <div id="display_general">
                <h2>General</h2>
                <p>Name: {data.general.name}</p>
                <p>Email: {data.general.email}</p>
                <p>Phone Number: {data.general.phoneNumber}</p>
            </div>
            <hr></hr>
            <div id="display_education">
                <h2>Education</h2>
                {data.education.map((education, index) => {
                    return (
                        <div key={education.id}>
                            <h3>Education {index + 1}:</h3>
                            <p>School Name: {education.schoolName}</p>
                            <p>Title of Study: {education.titleOfStudy}</p>
                            <p>Date of Study: {education.dateOfStudy}</p>
                        </div>
                    )
                })}                
            </div>
            <hr></hr>
            <div id="display_experience">
                <h2>Experience</h2>
                {data.experience.map((experience, index) => {
                    return (
                        <div key={experience.id}>
                            <h3>Experience {index + 1}:</h3>
                            <div>
                                <p>Company Name: {experience.companyName}</p>
                            </div>
                            <div>
                                <p>Position Title: {experience.positionTitle}</p>
                            </div>
                            <div>
                                <p>Main Responsibilities: {experience.mainResponsibilities}</p>
                            </div>
                            <div>
                                <p>Date From: {experience.dateFrom}</p>
                            </div>
                            <div>
                                <p>Date Until: {experience.dateUntil}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}