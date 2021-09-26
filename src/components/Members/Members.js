import React from 'react';



const Members = (props) => {
    const {members} = props;

    let employees = 0;
    members.map(member => employees += member.employees);
    
    // let employees = 0;
    return (
        <div className="col-md-3">
            <h4>Total Members Added: {members.length}</h4>
            <h4>Total Employees: {employees}</h4>
            {
                members.map(member => <div className="card py-3">
                        <img src={member.img} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h4 className="card-text">
                          {member.name}</h4>
                        <h5>{member.title}</h5>
                          <p>Total Employees: {member.employees}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Members;