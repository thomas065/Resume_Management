import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import moment from 'moment';
import "./jobs-grid.scss"
import { IJob } from '../../types/global.typing';

const column: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Id',
        width: 100,
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 500,
    },
    {
        field: 'jobLevel',
        headerName: 'Job Level',
        width: 150,
    },
    {
        field: 'companyName',
        headerName: 'Company Name',
        width: 400,
    },
    {
        field: 'createdDate',
        headerName: 'Creation time',
        width: 200,
        renderCell: params => moment(params.row.createdDate).fromNow(),
    },
];

interface IJobsGridProps {
    data: IJob[];
}

const JobsGrid = ({ data }: IJobsGridProps) => {
    return (
        <Box sx={{ width: '100%', height: 450 }} className='jobs-grid'>
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

export default JobsGrid;
