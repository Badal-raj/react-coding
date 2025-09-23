import React, { useEffect, useState } from "react";
import { Profile } from "./Profile";
import { Settings } from "./Setting";
import { Interest } from "./Interest";



export const TabForm = ({ setThemeColor }) => {
    const tabName = [
        { element: Profile, tabName: "Profile" },
        { element: Interest, tabName: "Interest" },
        { element: Settings, tabName: "Setting" }
    ];

    const [fieldsData, setFieldsData] = useState({
        profileFields: { userName: "", email: "", mobileNo: "" },
        interestFields: [],
        settingFiled: "No Effect"
    })

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (arg) => {
        setActiveTab(arg)
    }

    const ActiveTabFormName = tabName[activeTab].element;

    const handleSubmit = () => {
        console.log("---->", fieldsData)
    }

    useEffect(() => {
        setThemeColor(fieldsData.settingFiled)
    }, [fieldsData.settingFiled])

    return (
        <div className="form-wrapper">
            <h3>Tab Form</h3>
            <div className="tab-container">
                {tabName.map((d, index) => (
                    <div key={index} className={activeTab === index ? "activetab-section" : "tab-section"} onClick={() => handleTabClick(index)}>{d.tabName}</div>
                ))}
            </div>
            <div className="form-container">
                <ActiveTabFormName fields={fieldsData} setData={setFieldsData} />
            </div>
            <div className="button-container">
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}