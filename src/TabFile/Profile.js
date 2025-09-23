import React from "react";

export const Profile = ({ fields, setData }) => {
    const { profileFields } = fields;

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        profileFields[name] = value;
        setData((prev) => ({
            ...prev,
            ...fields
        }))
    };

    return (
        <div className="">
            <h3>User Profile page</h3>
            <div>
                <div className="field-container">
                    <label className="label-style">User Name*</label>
                    <input
                        type="text"
                        name="userName"
                        className="field-style"
                        onChange={handleChange}
                        value={profileFields.userName}
                    />
                </div>
                <div className="field-container">
                    <label className="label-style">User EmailId*</label>
                    <input
                        type="text"
                        className="field-style"
                        name="email"
                        onChange={handleChange}
                        value={profileFields.email}
                    />
                </div>
                <div className="field-container">
                    <label className="label-style">User Mobile No.*</label>
                    <input
                        type="text"
                        className="field-style"
                        name="mobileNo"
                        onChange={handleChange}
                        value={profileFields.mobileNo}
                    />
                </div>
            </div>
        </div>
    )
}