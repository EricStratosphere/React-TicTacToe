import '../styles/grid.css'
import {useState} from 'react'
import Cell from './cell'

const ticTacToe : string[][] = [ 
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

export default function Grid(){
    const x : string = "";
    const [textContent, setTextContent] = useState(x);
    const [matrix, setMatrix] = useState(ticTacToe);
    
    return(
        <div className="outer-grid">
            <div className='cell-container'>
                <div className='row 0'>
                    <Cell row = {0} column={0} textContent={textContent} setTextContent={setTextContent}/>
                    <Cell row = {0} column={1} textContent={textContent} setTextContent={setTextContent}/>
                    <Cell row = {0} column={2} textContent={textContent} setTextContent={setTextContent}/>
                </div>
                <div className='row 1'>
                    <Cell row = {1} column={0} textContent={textContent} setTextContent={setTextContent}/>
                    <Cell row = {1} column={1} textContent={textContent} setTextContent={setTextContent}/>
                    <Cell row = {1} column={2} textContent={textContent} setTextContent={setTextContent}/>
                </div>
                <div className='row 2'>
                    <Cell row = {2} column={0} textContent={textContent} setTextContent={setTextContent}/>
                    <Cell row = {2} column={1} textContent={textContent} setTextContent={setTextContent}/>
                    <Cell row = {2} column={2} textContent={textContent} setTextContent={setTextContent}/>
                </div>
            </div>
        </div>
    );
}