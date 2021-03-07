export const ButtonWhite = ({value = "", onClick}) => {
    return (
        <button onClick={onClick} className="buttonWhite">
            <h3>{value}</h3>
        </button>
    )
}