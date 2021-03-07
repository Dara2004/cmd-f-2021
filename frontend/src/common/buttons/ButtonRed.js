export const ButtonRed = ({value = "", onClick}) => {
    return (
        <button onClick={onClick} className="buttonRed">
            <h3>{value}</h3>
        </button>
    )
}