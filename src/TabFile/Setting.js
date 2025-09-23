import React from "react";

export const Settings = ({ fields, setData }) => {

    let { settingFiled } = fields;

    const handleChage = (e) => {
        const { value } = e.target;
        fields["settingFiled"] = value;
        setData((prev) => ({
            ...prev,
            ...fields
        }))
    }

    return (
        <>
            <div className="text-box-container">
                <input
                    type="radio"
                    name="setting-theme"
                    value="Dark"
                    checked={settingFiled === "Dark" ? true : false}
                    onChange={handleChage}
                />
                <span>Dark</span>
            </div>
            <div className="text-box-container">
                <input
                    type="radio"
                    name="setting-theme"
                    value="Light"
                    checked={settingFiled === "Light" ? true : false}
                    onChange={handleChage}
                />
                <span>Light</span>
            </div>
            <div className="text-box-container">
                <input
                    type="radio"
                    name="setting-theme"
                    value="No Effect"
                    checked={settingFiled === "No Effect" ? true : false}
                    onChange={handleChage}
                />
                <span>No Effect</span>
            </div>
        </>
    )
}