import '../styles/grid.css'
import { useState } from 'react';

export interface CellProps {
    row: number;
    column: number;
    matrix: string[][];
    xTurn: boolean;
    setXTurn: (xTurn: boolean) => void;
    setMatrix: (matrix: string[][]) => void;
}

const Cell = ({ row, column, xTurn, setXTurn, matrix, setMatrix }: CellProps) => {
    const [cellValue, setcellValue] = useState('');

    const updateContext = () => {
        const newCellValue = xTurn ? "X" : "O";
        setcellValue(newCellValue);
        setXTurn(!xTurn);
        matrix[row][column] = newCellValue;
        setMatrix(matrix);
        //console.log(matrix);
    }

    return (
        <button className="cell" onClick={() => {
            if (cellValue) {
                alert("This cell is already taken!");
                return;
            } else {
                updateContext();
            }
        }}>
            <h1>
                {cellValue}
            </h1>
        </button>
    )
}
export default Cell