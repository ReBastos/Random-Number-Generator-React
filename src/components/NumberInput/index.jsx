import './index.css'

const NumberInput = ({setNumber,placeholder}) => {

    const set = (evt) => {
        setNumber(parseInt(evt.target.value));
    }
    return(
        <input type={'number'} onChange={set} placeholder={placeholder}></input>
    )
}

export default NumberInput;