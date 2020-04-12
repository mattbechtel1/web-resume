import React from 'react'

const SideLink = ({text, url, bold, icon}) => <span className='text-primary' style={{paddingLeft: '10em'}}>
    <a href={url}>
        <i className={bold ? `fas ${icon}` : `fab ${icon}`}> {text}</i>
    </a>
</span>

const Project = ({title, tag, url, sideLinks, paragraph}) =>  <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
    <div className="resume-content">
        <h3 className="mb-0">{ url ? <a href={url}>{title}</a> : <>{title}</> }</h3>
        <div className="subheading mb-4">{tag}</div>
        <p>{paragraph}</p>
    </div>

    <div className="resume-date text-md-right">
        {sideLinks.map(({text, url, bold, icon}) => <SideLink 
            key={url}
            text={text}
            url={url}
            bold={bold}
            icon={icon} />)
        }
    </div>
</div>

export default Project