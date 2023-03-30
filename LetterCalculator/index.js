import {Component} from "react"
import "./index.css"
class LettersCalculator extends Component{
    state={
        searchInput:""
        
        
    }
    CountTheLetter=(event)=>{
        
        this.setState({searchInput:event.target.value})
        
    }

    render(){
        const{searchInput}=this.state
        console.log(searchInput)
        console.log(searchInput.length)
        
        return(
            <div className="bg-container">
                <div className="container">
                    <div className="card">
                        <h1>Calculate the Letter you enter</h1>
                        <p>Enter the pharse:</p>
                        <input type="text" onClick={this.CountTheLetter} className="type"/>
                        <button className="btn">
                            No.of letters:{searchInput.length}
                        </button>
                    </div>
                    <div>
                        <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" alt="letter-calculator" className="image"/>    
                    </div>    
                </div>
            </div>
        )
    }
}
export default LettersCalculator