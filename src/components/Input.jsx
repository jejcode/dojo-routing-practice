import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Input = (props) => {
    const {input, text='black', bg='white'} = useParams()

    const formatInput = (input) => {
        if(isNaN(input)) {
            //create formatted string
            document.getElementById('content').innerText = `The word is: ${input}`
        } else {
            // display the number
            document.getElementById('content').innerText = `The number is: ${input}`
        }
    }

    const pStyle = {
        color: text,
        background: bg,
        marginTop: '15px',
        padding: '15px',
        fontSize: '2em'
    }
    useEffect(() => formatInput(input))
    
    return (
        <p id="content" className="App" style={ pStyle }></p>
    )
}

export default Input