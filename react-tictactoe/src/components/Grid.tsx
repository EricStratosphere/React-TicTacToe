import '../styles/grid.css'
import {useState, useEffect} from 'react'
import Cell from './cell'

const ticTacToe : string[][] = [ 
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

// const Tuple : [number, number][] = []

export default function Grid(){
    const [matrix, setMatrix] = useState(ticTacToe);
    const [xTurn, setXTurn] = useState(true);
    // const [tuple, setTuple] = useState(Tuple);
    const [gameIsWon, setGameIsWon] = useState(false);

    const checkWinner = () : void =>  {
        //check rows
        let winnerFlag = true;
        const referenceCharacter : string = xTurn ? "O" : "X"
        for(let i = 0; i < 3; i++){
            winnerFlag = true
            for(let j = 0; j < 3; j++){
                if(matrix[i][j] !== referenceCharacter){
                    winnerFlag = false;
                    break;
                }
            }
            if(winnerFlag)
                break;
        }
        setGameIsWon(winnerFlag)
        if(winnerFlag){
            console.log(xTurn ? "O is the winner!" : "X is the winner!")
            return
        }

        console.log("CHECKING COLUMNS");

        for(let i = 0; i < 3; i++){
            winnerFlag = true
            for(let j = 0; j < 3; j++){
                console.log(matrix[j][i]);
                if(matrix[j][i] !== referenceCharacter){
                    winnerFlag = false;
                    break;
                }
            }
            if(winnerFlag)
                break;
            console.log();
        }
        setGameIsWon(winnerFlag)
        if(winnerFlag){
            console.log(xTurn ? "O is the winner!" : "X is the winner!")
            return
        }
        //check forward diagonal
        winnerFlag = true;
        for(let i = 0; i < 3; i++){
            if(matrix[i][i] !== referenceCharacter){
                winnerFlag = false;
                break;
            }
        }
        setGameIsWon(winnerFlag);
        if(winnerFlag){
            console.log(xTurn ? "O is the winner!" : "X is the winner!")
            return
        }
        winnerFlag = true
        //check backward diagonal
        for(let i = 0; i < 3; i++){
            if(matrix[i][2 - i] !== referenceCharacter){
                winnerFlag = false;
                break;
            }
        }
        setGameIsWon(winnerFlag);
        if(winnerFlag){
            console.log(xTurn ? "O is the winner!" : "X is the winner!")
            return;
        }
        console.log(matrix);
        console.log("No winner has been decided yet!"); 
    }

    useEffect(checkWinner,[matrix, xTurn]);
    return(
        <>
        <h2>
            {gameIsWon ? (xTurn ? "O is the winner!" : "X is the winner!")
            : 
            (xTurn ? "It is X's Turn" : "It is O's Turn")
            }
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