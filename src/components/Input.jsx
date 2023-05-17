import { useParams } from 'react-router-dom'

const Input = (props) => {
    const {input, text='black', bg='white'} = useParams()
    const pStyle = {
        color: text,
        background: bg,
        marginTop: '15px',
        padding: '15px',
        fontSize: '2em'
    }
    // My original attempt:
    // const formatInput = (input) => {
    //     if(isNaN(input)) {
    //         //create formatted string
    //         document.getElementById('content').innerText = `The word is: ${input}`
    //     } else {
    //         // display the number
    //         document.getElementById('content').innerText = `The number is: ${input}`
    //     }
    // }
    // useEffect(() => formatInput(input))
    
    //After reviewing the solution, I want to use {} in the return to statement to have
    // it processed immmediately rather than render, then call function
    return (
        <div className="App">
            {
                isNaN(input)?
                <p id="content"  style={ pStyle }>The word is: {input}</p>
                :
                <p id="content"  style={ pStyle }>The number is: {input}</p>
                
    
            }

        </div>
    )
}

export default Input