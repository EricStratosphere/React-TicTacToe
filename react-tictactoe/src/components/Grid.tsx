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
                <div className='row'>
                    <Cell textContent={textContent} setTextContent={setTextContent}/>
                    <Cell textContent={textContent} setTextContent={setTextContent}/>
                    <Cell textContent={textContent} setTextContent={setTextContent}/>
                </div>
                <div className='row'>
                    <Cell textContent={textContent} setTextContent={setTextContent}/>
                    <Cell textContent={textContent} setTextContent={setTextContent}/>
                    <Cell textContent={textContent} setTextContent={setTextContent}/>
                </div>
                <div className='row'>
                    <Cell textContent={textContent} setTextContent={setTextContent}/>
                    <Cell textContent={textContent} setTextContent={setTextContent}/>
                    <Cell textContent={textContent} setTextContent={setTextContent}/>
                </div>
            </div>
        </div>
    );
}