/* eslint-disable react/prop-types */
export function General({ updateGeneral, data, isShown }) {
    return (
        <div className={!isShown.general ? "hidden" : ""}>
            <h2>General</h2>
            <div>
                <label htmlFor="name">
                    Name
                </label>
                <input type="text" id="name" placeholder="Enter name..." value={data.name} onChange={updateGeneral} />
            </div>
            <div>
                <label htmlFor="email">
                    Email
                </label>
                <input type="text" name="email" id="email" placeholder="Enter email..." value={data.email} onChange={updateGeneral} />
            </div>
            <div>
                <label htmlFor="phoneNumber">
                    Phone Number
                </label>
                <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Enter phone number..." value={data.phoneNumber} onChange={updateGeneral} />
            </div>
        </div>
    )
}