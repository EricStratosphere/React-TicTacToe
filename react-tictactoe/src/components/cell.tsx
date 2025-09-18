import '../styles/grid.css'
// import { useState } from 'react';

export interface CellProps {
    row: number;
    column: number;
    matrix: string[][];
    xTurn: boolean;
    setXTurn: (xTurn: boolean) => void;
    setMatrix: (matrix: string[][]) => void;
}

const Cell = ({ row, column, xTurn, setXTurn, matrix, setMatrix }: CellProps) => {

    const updateContext = () => {
        const newCellValue = xTurn ? "X" : "O";
        setXTurn(!xTurn);
        matrix[row][column] = newCellValue;
        setMatrix(matrix);
        //console.log(matrix);
    }

    return (
        <div className="cell" onClick={() => {
            if (matrix[row][column]) {
                alert("This cell is already taken!");
                return;
            } else {
                updateContext();
            }
        }}>
            <h1>
                {matrix[row][column]}
            </h1>
        </div>
    )
}
export default Cell