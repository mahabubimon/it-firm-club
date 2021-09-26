import React, { useEffect, useState } from 'react';
import Company from '../Company/Company';
import Members from '../Members/Members';

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const [club, setClub] = useState([]);

    useEffect( () => {
        fetch('./companies.json')
        .then(res => res.json())
        .then(data => setCompanies(data))
    }, []);

    const handleJoinMember = (member) => {
        const newClub = [...club, member];
        setClub(newClub);
    }

    return (
        <div className="row py-5">
            <div className="col-md-9">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                companies.map(company => <Company
                    key={company.name}
                    company={company}
                    joinMember={handleJoinMember}

                >
                </Company>)
                }   
                </div>
            </div>
            <Members members={club}>
            </Members>
        </div>
    );
};

export default Companies;