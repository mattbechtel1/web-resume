import React from 'react'


const School = ({name, degree, description, dates}) => <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
    <div className="resume-content">
        <h3 className="mb-0">{name}</h3>
        <div className="subheading mb-3">{degree}</div>
        <div>{description}</div>
    </div>
    <div className="resume-date text-md-right">
        <span className="text-primary">{dates}</span>
    </div>
</div>

export default School