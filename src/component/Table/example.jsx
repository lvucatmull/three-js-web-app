import { useState } from 'react';
import Table from './index';
  
  // Example usage
  const ExampleTable = () => {
    const [sorting, setSorting] = useState([]);
    
    const data = [
        { id: 1, name: 'John Doe', age: 30, city: 'New York' },
        { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
        { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' },
    ];
  
    const columns = [
        {
            id: 'name',
            header: 'Name',
            sortable: true,
            cell: (row) => row.name,
        },
        {
            id: 'age',
            header: 'Age',
            sortable: true, 
            cell: (row) => row.age,
        },
        {
            id: 'city',
            header: 'City',
            sortable: true,
            cell: (row) => row.city,
        },
    ];
  
    const getCoreRowModel = () => ({
        rows: data.map(item => ({
            id: item.id,
            getVisibleCells: () => columns.map(col => ({
                id: `${item.id}_${col.id}`,
                renderCell: () => col.cell(item)
            }))
        }))
    });
  
    return (
        <Table
            data={data}
            columns={columns}
            sorting={sorting}
            setSorting={setSorting}
            getCoreRowModel={getCoreRowModel}
        />
    );
  };

  export default ExampleTable;