import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import moment from 'moment';
import React from 'react';
import { ICompany } from '../../types/global.typing';
import "./companies-grid.scss"

const column: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Id',
        width: 100,
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 300,
    },
    {
        field: 'companySize',
        headerName: 'Company Size',
        width: 200,
    },
    {
        field: 'createdDate',
        headerName: 'Creation time',
        width: 200,
        renderCell: params =>
            moment(params.row.createdDate).format('YYYY-MM-DD'),
    },
];

interface ICompaniesGridProps {
    data: ICompany[];
}

const CompaniesGrid = ({ data }: ICompaniesGridProps) => {
    return (
        <Box sx={{ width: '100%', height: 450 }} className='companies-grid'>
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

export default CompaniesGrid;
