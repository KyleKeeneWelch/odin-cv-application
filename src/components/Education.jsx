/* eslint-disable react/prop-types */
export function Education({ updateEducation, data, isShown }) {
    return (
        <>
            <h2>Education</h2>
            {data.map((education, index) => {
                return (
                    <div className={!isShown.education ? "hidden" : ""} key={education.id + "_display"}>
                        <h3>Education {index + 1}:</h3>
                        <div>
                            <label htmlFor={education.id + "_schoolName"}>
                                School Name
                            </label>
                            <input type="text" name="school_name" id={education.id + "_schoolName"} placeholder="Enter School name..." value={education.schoolName} onChange={updateEducation} />
                        </div>
                        <div>
                            <label htmlFor={education.id + "_titleOfStudy"}>
                                Title of Study
                            </label>
                            <input type="text" name="title" id={education.id + "_titleOfStudy"} placeholder="Enter title..." value={education.titleOfStudy} onChange={updateEducation} />
                        </div>
                        <div>
                            <label htmlFor={education.id + "_dateOfStudy"}>
                                Date of Study
                            </label>
                            <input type="date" name="date" id={education.id + "_dateOfStudy"} placeholder="Enter date..." value={education.dateOfStudy} onChange={updateEducation} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}