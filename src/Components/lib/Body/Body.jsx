import React, {Component} from 'react';
import './Body.css';

class Body extends Component{
    constructor(props){
        super(props);
        this.state ={
            img: 'avengers.jpg',
        }
        this.hendlePrevent = this.hendlePrevent.bind(this)
    }

    hendlePrevent(e){
        e.preventDefault();
    }

    render(){
        return(
            <div className="body-container">
                <div className="content">
                    <img src={this.props.img} alt=""></img>
                    <h3>{this.props.judul}</h3>
                    <p>{this.props.desc}</p>
                </div>
                <div className="button">
                    <div className="content-button">
                        <button type="button" name="button">Watch Now</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;