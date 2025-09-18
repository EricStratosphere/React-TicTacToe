import '../styles/grid.css'
import {useState} from 'react';
interface CellProps{
    row : number;
    column : number;
    matrix : string[][];
    xTurn : boolean;
    setXTurn : (xTurn : boolean) => void;
    setMatrix : (matrix : string[][]) => void;
}

const Cell = ({row, column, xTurn, setXTurn, matrix, setMatrix} : CellProps) => {
    const x : string = ""
    const [textContent, setTextContent] = useState(x);
    return(
    <div className="cell" onClick={() : void => {
        if(textContent){
            alert("This cell is already taken!");
            return;
        }
        const tempContent : string = xTurn ? "X" : "O";
        setTextContent(tempContent);
        setXTurn(!xTurn);
        const newMatrix : string[][] = JSON.parse(JSON.stringify(matrix));
        newMatrix[row][column] = xTurn ? "X" : "O";
        console.log(newMatrix);
        setMatrix(newMatrix);
    }
    }>
        {textContent}
    </div>
    )
}
export type {CellProps}
export default Cell