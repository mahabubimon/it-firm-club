import React, { useEffect, useState } from 'react';
import Company from '../Company/Company';

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    useEffect( () => {
        fetch('./companies.json')
        .then(res => res.json())
        .then(data => setCompanies(data))
    }, []);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                companies.map(company => <Company
                    key={company.company}
                    company={company}
                >
                </Company>)
            }
        </div>
    );
};

export default Companies;