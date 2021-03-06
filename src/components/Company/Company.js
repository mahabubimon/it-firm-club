import React from 'react';
import Button from '../Button/Button';

const Company = (props) => {
    const {img, name, title, employees, rating, reviews} = props.company;

    return (
        <div className="col">
            <div className="card h-100 text-center">
                <div>
                    <img src={img} className="card-img-top w-50 rounded-circle" alt="..."></img>
                </div>

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{title}</p>
                    <p>Employees: {employees} <i className="fas fa-user-friends text-info"></i></p>
                </div>

                <div className="card-footer border-0">
                    <div>
                        <h6>Total Ratings: {reviews} <i className="far fa-smile text-info"></i></h6>
                        <h6>Average Rating: {rating}</h6>
                    </div>
                    <Button
                    join={props.joinMember}
                    company={props.company}
                    ></Button>
                </div>
            </div>
        </div>    
    );
};

export default Company;