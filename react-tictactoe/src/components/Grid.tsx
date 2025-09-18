import '../styles/grid.css'
import {useState, useEffect} from 'react'
import Cell from './cell'

const ticTacToe : string[][] = [ 
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

export default function Grid(){
    const [matrix, setMatrix] = useState(ticTacToe);
    const [xTurn, setXTurn] = useState(true);
    const checkWinner = ()  => void  {

    }

    useEffect(checkWinner,[matrix]);
    return(
        <>
        <h2>
            {xTurn ? "It is X's Turn" : "It is O's Turn"}
        </h2>
        <div className="outer-grid">
            <div className='cell-container'>
                {/* <div className='row 0'>
                    <Cell row = {0} column={0} xTurn={xTurn} setXTurn={setXTurn} matrix={matrix} setMatrix={setMatrix}/>
                    <Cell row = {0} column={1} xTurn={xTurn} setXTurn={setXTurn} matrix={matrix} setMatrix={setMatrix}/>
                    <Cell row = {0} column={2} xTurn={xTurn} setXTurn={setXTurn} matrix={matrix} setMatrix={setMatrix}/>
                </div>
                <div className='row 1'>
                    <Cell row = {1} column={0} xTurn={xTurn} setXTurn={setXTurn} matrix={matrix} setMatrix={setMatrix}/>
                    <Cell row = {1} column={1} xTurn={xTurn} setXTurn={setXTurn} matrix={matrix} setMatrix={setMatrix}/>
                    <Cell row = {1} column={2} xTurn={xTurn} setXTurn={setXTurn} matrix={matrix} setMatrix={setMatrix}/>
                </div>
                <div className='row 2'>
                    <Cell row = {2} column={0} xTurn={xTurn} setXTurn={setXTurn} matrix={matrix} setMatrix={setMatrix}/>
                    <Cell row = {2} column={1} xTurn={xTurn} setXTurn={setXTurn} matrix={matrix} setMatrix={setMatrix}/>
                    <Cell row = {2} column={2} xTurn={xTurn} setXTurn={setXTurn} matrix={matrix} setMatrix={setMatrix}/>
                </div> */}
            {matrix.map((row, rowIndex) => (
                <div className={`row ${rowIndex}`} key={rowIndex}>
                    {row.map((_, colIndex) => (
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            row={rowIndex}
                            column={colIndex}
                            xTurn={xTurn}
                            setXTurn={setXTurn}
                            matrix={matrix}
                            setMatrix={setMatrix}
                        />
                    ))}
                </div>
            ))}
            </div>
        </div>
        </>

    );
}