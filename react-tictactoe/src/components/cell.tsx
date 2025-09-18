import '../styles/grid.css'
interface CellProps{
    textContent : string;
    setTextContent : (text : string) => void;
}

const Cell = ({textContent, setTextContent} : CellProps) => {

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