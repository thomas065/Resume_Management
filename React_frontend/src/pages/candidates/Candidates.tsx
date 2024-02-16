import { useEffect } from 'react';
import { useState } from 'react';
import './candidates.scss';
import httpModule from '../../helpers/http.module';
import { ICandidate } from '../../types/global.typing';
import { CircularProgress, Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import CandidatesGrid from '../../components/candidates/CandidatesGrid';

const Candidates = () => {
    const [candidates, setCandidate] = useState<ICandidate[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const redirect = useNavigate();

    useEffect(() => {
        setLoading(true);
        httpModule
            .get<ICandidate[]>('/Candidate/Get')
            .then(response => {
                setCandidate(response.data);
                setLoading(false);
            })
            .catch(error => {
                alert('Error');
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='content candidates'>
            <div className='heading'>
                <h2>Candidate Listing</h2>
                <Fab
                    color='primary'
                    onClick={() => redirect('/candidates/add')}
                >
                    <Add />
                </Fab>
            </div>
            {loading ? (
                <CircularProgress size={100} />
            ) : candidates.length === 0 ? (
                <h1>No Candidates</h1>
            ) : (
                <CandidatesGrid data={candidates} />
            )}
        </div>
    );
};

export default Candidates;
