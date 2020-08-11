import React from 'react';
import '../css/meme.css'

export default class MemeGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const url = "https://api.imgflip.com/get_memes";
        fetch(url)
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const memeCount = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randomMemeURL = this.state.allMemeImgs[memeCount].url;
        this.setState({
            randomImg: randomMemeURL,
        })
    }

    render() {
        return (
            <div className="meme-section">
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <div className="meme-text">
                        <input 
                            id="topInput"
                            type="text" 
                            name="topText" 
                            maxLength="30"
                            value={this.state.topText} 
                            onChange={this.handleChange}
                            placeholder="Enter top text"
                            />
                        <input 
                            id="bottomInput"
                            type="text" 
                            name="bottomText" 
                            maxLength="30"
                            value={this.state.bottomText} 
                            onChange={this.handleChange}
                            placeholder="Enter bottom text"
                            />
                    </div>

                    <button>Generate Meme</button>
                </form>

                <div className="meme">
                    <div className="text">
                        <h2 id="topText">{this.state.topText}</h2>
                    </div>

                    <img src={this.state.randomImg} alt="" />

                    <div className="text">
                        <h2 id="bottomText">{this.state.bottomText}</h2>
                    </div>
                </div>
            </div>
        )
    }
}