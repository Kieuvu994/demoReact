const DataGridStyle = () => {
    return {
        boxShadow: 2,
        borderRadius: 2,
        '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'rgba(192, 192, 192, 0.7)',
        },
        '& .MuiDataGrid-virtualScrollerRenderZone': {
            '& .MuiDataGrid-row': {
                '&:nth-of-type(2n)': {
                    backgroundColor: 'rgba(192, 192, 192, 0.24)',
                },
                '& .MuiDataGrid-cell': {
                    '&:nth-of-type(n)': {
                        borderRight: 'groove 1px rgba(235, 235, 235, 0.45)',
                    }
                }
            }
        },
        '& .MuiDataGrid-footerContainer': {
            backgroundColor: 'rgba(235, 235, 235, 0.9)',
        },
        '& .MuiDataGrid-selectedRowCount': {
            visibility: "hidden"
        },
    }
}
export default DataGridStyle