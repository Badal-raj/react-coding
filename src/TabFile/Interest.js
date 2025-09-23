import React from "react";

export const Interest = ({ fields, setData }) => {
    const { interestFields } = fields;

    const handleChage = (e) => {
        const { name } = e.target;
        if (interestFields.includes(name)) {
            let indexVal = interestFields.indexOf(name)
            if (indexVal >= 0) {
                interestFields.splice(indexVal, 1)
            }
        } else {
            interestFields.push(name)
        }

        setData((prev => ({
            ...prev,
            ...fields
        })))
    };

    return (
        <>
            <div className="text-box-container">
                <input
                    type="checkbox"
                    name="Cricket"
                    checked={interestFields.includes("Cricket")}
                    onChange={handleChage}
                />
                <span>Cricket</span>
            </div>
            <div className="text-box-container">
                <input
                    type="checkbox"
                    name="Football"
                    checked={interestFields.includes("Football")}
                    onChange={handleChage}
                />
                <span>Football</span>
            </div>
            <div className="text-box-container">
                <input
                    type="checkbox"
                    name="Hockey"
                    checked={interestFields.includes("Hockey")}
                    onChange={handleChage}
                />
                <span>Hockey</span>
            </div>
        </>
    )
}