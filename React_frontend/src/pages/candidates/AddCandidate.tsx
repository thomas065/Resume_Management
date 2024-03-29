import { useState, useEffect } from 'react';
import './candidates.scss';
import { ICreateCandidateDto, IJob } from '../../types/global.typing';
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import httpModule from '../../helpers/http.module';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const AddCandidate = () => {
    const [candidate, setCandidate] = useState<ICreateCandidateDto>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        coverLetter: '',
        jobId: '',
    });

    const [jobs, setJobs] = useState<IJob[]>([]);
    const [pdfFile, setPdfFile] = useState<File | null>();

    const redirect = useNavigate();

    useEffect(() => {
        httpModule
            .get<IJob[]>('/Job/Get')
            .then(response => {
                setJobs(response.data);
            })
            .catch(error => {
                alert('Error');
                console.log(error);
            });
    }, []);

    const handleClickSaveBtn = () => {
        if (
            candidate.firstName === '' ||
            candidate.lastName === '' ||
            candidate.email === '' ||
            candidate.phone === '' ||
            candidate.coverLetter === '' ||
            candidate.jobId === '' ||
            !pdfFile
        ) {
            alert('Fill all fields');
            return;
        }

        const newCandidateFormData = new FormData();
        newCandidateFormData.append('firstName', candidate.firstName);
        newCandidateFormData.append('lastName', candidate.lastName);
        newCandidateFormData.append('email', candidate.email);
        newCandidateFormData.append('phone', candidate.phone);
        newCandidateFormData.append('coverLetter', candidate.coverLetter);
        newCandidateFormData.append('jobId', candidate.jobId);
        newCandidateFormData.append('pdfFile', pdfFile);

        httpModule
            .post('/Candidate/Create', newCandidateFormData)
            .then(response => redirect('/candidates'))
            .catch(error => console.log(error));
    };

    const handleClickBackBtn = () => {
        redirect('/candidates');
    };

    return (
        <div className='content'>
            <div className='add-candidate'>
                <h2 className=''>Add New Candidate</h2>
                <FormControl fullWidth>
                    <InputLabel>Job</InputLabel>
                    <Select
                        value={candidate.jobId}
                        label='Job'
                        onChange={e =>
                            setCandidate({
                                ...candidate,
                                jobId: e.target.value,
                            })
                        }
                    >
                        {jobs.map(item => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.title}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    autoComplete='off'
                    label='First Name'
                    variant='outlined'
                    value={candidate.firstName}
                    onChange={e =>
                        setCandidate({
                            ...candidate,
                            firstName: e.target.value,
                        })
                    }
                />
                <TextField
                    autoComplete='off'
                    label='Last Name'
                    variant='outlined'
                    value={candidate.lastName}
                    onChange={e =>
                        setCandidate({ ...candidate, lastName: e.target.value })
                    }
                />
                <TextField
                    autoComplete='off'
                    label='Email'
                    variant='outlined'
                    value={candidate.email}
                    onChange={e =>
                        setCandidate({
                            ...candidate,
                            email: e.target.value,
                        })
                    }
                />
                <TextField
                    autoComplete='off'
                    label='Phone Number'
                    variant='outlined'
                    value={candidate.phone}
                    onChange={e =>
                        setCandidate({ ...candidate, phone: e.target.value })
                    }
                />
                <TextField
                    autoComplete='off'
                    label='Cover Letter Name'
                    variant='outlined'
                    value={candidate.coverLetter}
                    onChange={e =>
                        setCandidate({
                            ...candidate,
                            coverLetter: e.target.value,
                        })
                    }
                    multiline
                />

                {/* <input
                    title='pdfFile'
                    type='file'
                    onChange={event =>
                        setPdfFile(
                            event.target.files ? event.target.files[0] : null
                        )
                    }
                /> */}

                <Button
                    component='label'
                    role={undefined}
                    variant='contained'
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload file
                    <VisuallyHiddenInput
                        type='file'
                        onChange={event =>
                            setPdfFile(
                                event.target.files
                                    ? event.target.files[0]
                                    : null
                            )
                        }
                    />
                </Button>

                <div className='btns'>
                    <Button
                        variant='contained'
                        color='success'
                        onClick={handleClickSaveBtn}
                    >
                        Save
                    </Button>
                    <Button
                        variant='contained'
                        color='warning'
                        onClick={handleClickBackBtn}
                    >
                        Back
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AddCandidate;
