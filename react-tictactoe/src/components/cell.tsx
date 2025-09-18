import '../styles/grid.css'
interface CellProps{
    row : number;
    column : number;
    textContent : string;
    setTextContent : (text : string) => void;
}

const Cell = ({row, column, textContent, setTextContent} : CellProps) => {

    return(
    <div className="cell" onClick={() => {
        setTextContent(textContent)
    }
    }>
        {textContent}
    </div>
    )
}
export type {CellProps}
export default Cell