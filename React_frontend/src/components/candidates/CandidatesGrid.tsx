import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import "./candidates-grid.scss"
import { ICandidate } from '../../types/global.typing';
import { baseUrl } from '../../constants/url.constants';
import { PictureAsPdf } from '@mui/icons-material';

const column: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Id',
        width: 100,
    },
    {
        field: 'firstName',
        headerName: 'First Name',
        width: 200,
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 200,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 250,
    },
    {
        field: 'phone',
        headerName: 'Phone Number',
        width: 150,
    },
    {
        field: 'coverLetter',
        headerName: 'Cover Letter',
        width: 200,
    },
    {
        field: 'jobTitle',
        headerName: 'Resume Title',
        width: 500,
    },
    {
        field: 'resumeUrl',
        headerName: 'Download CV',
        width: 100,
        renderCell: params => (
            <a
                href={`${baseUrl}/Candidate/download/${params.row.resumeUrl}`}
                download
            >
                <PictureAsPdf />
            </a>
        ),
    },
];

interface ICandidatesGridProps {
    data: ICandidate[];
}

const CandidatesGrid = ({ data }: ICandidatesGridProps) => {
    return (
        <Box sx={{ width: '100%', height: 450 }} className='candidates-grid'>
            <DataGrid
                rows={data}
                columns={column}
                getRowId={row => row.id}
                rowHeight={50}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 25,
                        },
                    },
                }}
            />
        </Box>
    );
};

export default CandidatesGrid;
