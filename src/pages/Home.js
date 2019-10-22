import React, { Component } from 'react';
import Tag from './Tag';
import Axios from 'axios';

class Home extends Component {
    state = {
        nickname: "",
        tag: [
            {
                sub: "TEST1",
                main: "TEST2"
            }
        ]
    }
    
    onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        this.setState({
            [name]: value
        });
    }
    
    onClick = (e) => {
        this.setState({
            tag: this.state.tag.concat({sub: "TEST7", main: "TEST8"})
        });
    }

    axiosTest = async () => {
        let photos = await Axios.get("https://jsonplaceholder.typicode.com/photos");
        console.log(photos);
    }

    render() {
        return (
            <div>
                <h3>
                    <div>닉네임 : <input name="nickname" onChange={this.onChangeInput}/></div>
                </h3>
                <h2>
                    닉네임 : {this.state.nickname}
                </h2>
                <h3>
                    <button name="click" onClick={this.onClick}>태그 생성</button>
                </h3>
                <h2>
                    {this.state.tag.map((item, i) => {
                        return(
                            // <Name main={item.main} sub={item.sub} key={i}/>
                            <Tag json={item} key={i}/>
                        );
                    })}
                </h2>
                <h3>
                    <button onClick={this.axiosTest}>AXIOS</button>
                </h3>
            </div>
        );
    }
}

export default Home;