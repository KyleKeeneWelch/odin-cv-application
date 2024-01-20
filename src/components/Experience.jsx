/* eslint-disable react/prop-types */
export function Experience({ updateExperience, data, isShown }) {
    return (
        <>
            <h2>Experience</h2>
            {data.map((experience, index) => {
                return (
                    <div className={!isShown.experience ? "hidden" : ""} key={experience.id + "_input"}>
                        <h3>Experience {index + 1}:</h3>
                        <div>
                            <label htmlFor={experience.id + "_companyName"}>
                                Company Name
                            </label>
                            <input type="text" name="companyName" id={experience.id + "_companyName"} placeholder="Enter Company name..." value={experience.companyName} onChange={updateExperience} />
                        </div>
                            <div>
                                <label htmlFor={experience.id + "_positionTitle"}>
                                    Position Title
                                </label>
                                <input type="text" name="positionTitle" id={experience.id + "_positionTitle"} placeholder="Enter title..." value={experience.positionTitle} onChange={updateExperience} />
                            </div>
                        <div>
                            <label htmlFor={experience.id + "_mainResponsibilities"}>
                                Main Responsibilities
                            </label>
                            <textarea name="mainResponsibilities" id={experience.id + "_mainResponsibilities"} placeholder="Enter responsibilities..." onChange={updateExperience} value={experience.mainResponsibilities}></textarea>
                        </div>
                        <div>
                            <label htmlFor={experience.id + "_dateFrom"}>
                                Date From
                            </label>
                            <input type="date" name="dateFrom" id={experience.id + "_dateFrom"} value={experience.dateFrom} onChange={updateExperience} />
                        </div>
                        <div>
                            <label htmlFor={experience.id + "_dateUntil"}>
                                Date Until
                            </label>
                            <input type="date" name="dateUntil" id={experience.id + "_dateUntil"} value={experience.dateUntil} onChange={updateExperience} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}