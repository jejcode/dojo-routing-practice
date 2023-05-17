import React from 'react'
import {useNavigate} from 'react-router-dom'

const Index = (props) => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/home')
    }
    
    return (
        <div className="App">
            <button onClick={ goHome }>Go Home</button>
        </div>
    )
}

export default Index