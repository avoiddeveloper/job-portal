import React from 'react';

const HotJobCard = ({ job }) => {
    const { title, location, jobType, category, description, company, requirements, company_logo } = job;
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className='flex items-center gap-3'>
                <figure>
                    <img
                        src={company_logo}
                        alt={title} />
                </figure>
                <div className='space-y-3'>
                    <div>
                        <h2>{company}</h2>
                        <p>{location}</p>
                    </div>
                    <div>
                        <p>{jobType}</p>
                        <p>{category}</p>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {requirements.map((req, idx) => <div key={idx} className="badge badge-outline">{req}</div>)}
                </div>
            </div>
            <button className='btn btn-primary'>Apply Now</button>
        </div>
    );
};

export default HotJobCard;