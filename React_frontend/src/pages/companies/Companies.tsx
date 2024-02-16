import { useEffect } from 'react';
import { useState } from 'react';
import './companies.scss';
import httpModule from '../../helpers/http.module';
import { ICompany } from '../../types/global.typing';
import { CircularProgress, Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import CompaniesGrid from '../../components/companies/CompaniesGrid';

const Companies = () => {
    const [companies, setCompanies] = useState<ICompany[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const redirect = useNavigate();

    useEffect(() => {
        setLoading(true);
        httpModule
            .get<ICompany[]>('/Company/Get')
            .then(response => {
                setCompanies(response.data);
                setLoading(false);
            })
            .catch(error => {
                alert('Error');
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='content companies'>
            <div className='heading'>
                <h2>Companies</h2>
                <Fab color='primary' onClick={() => redirect('/companies/add')}>
                    <Add />
                </Fab>
            </div>
            {loading ? (
                <CircularProgress size={100} />
            ) : companies.length === 0 ? (
                <h1>No Company</h1>
            ) : (
                <CompaniesGrid data={companies} />
            )}
        </div>
    );
};

export default Companies;
