import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';

function TableElement({headers, rows}) {
    return (
        <TableContainer sx={{border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '4px'}}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <TableCell
                                key={header.id}
                                align={header.align}
                                style={header.style}>
                                {header.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((cells, rowIndex) => {
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={`row-${rowIndex}`}>
                                {cells.map((cell, cellIndex) => {
                                    const align = cellIndex === 1 ? 'left' : 'center';
                                    return (
                                        <TableCell key={`row-${rowIndex}-cell-${cellIndex}`} sx={{padding: '10px'}} {...{align}}>
                                            {cell}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableElement;