import React from 'react';

const Company = props => {
    const {img, company, title, rating, review} = props.company;

    return (
        <div className="col">
            <div className="card h-100 mx-auto">
                <div>
                    <img src={img} className="card-img-top w-50 rounded-circle" alt="..."></img>
                </div>

                <div className="card-body">
                    <h5 className="card-title">{company}</h5>
                    <p className="card-text">{title}</p>
                </div>

                <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    );
};

export default Company;