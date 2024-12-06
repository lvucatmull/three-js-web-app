const Table = ({
    data,
    columns,
    sorting,
    setSorting,
    getCoreRowModel = () => ({ rows: [] }),
    getSortedRowModel = () => ({ rows: [] }),
}) => {

    return (
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg shadow-sm">
            <thead className="bg-gray-50">
                <tr>
                    {columns.map(column => (
                        <th
                            key={column.id}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                            onClick={() => column.sortable && setSorting([{id: column.id, desc: sorting[0]?.desc}])}
                        >
                            <div className="flex items-center space-x-1">
                                <span>{column.header}</span>
                                {sorting[0]?.id === column.id && (
                                    <span className="text-gray-400">
                                        {sorting[0]?.desc ? ' ▼' : ' ▲'}
                                    </span>
                                )}
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {getCoreRowModel().rows.map(row => (
                    <tr key={row.id} className="hover:bg-gray-50 transition-colors duration-150">
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {cell.renderCell()}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;