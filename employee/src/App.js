import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Header from "./components/Header";
import Player from "./components/Player";
import avatar from "./atla.json"
import Col from "./components/Col/index.js";

class App extends React.Component {
  state = {
    score: 0,
    avatar:avatar

  }
  handleClick = id => {
    var rand;
  }
  //   var rand;
  //   var x;
  //   var i;
  //   for (i = haikyuu.length - 1; i > 0; i--) {
  //       rand = Math.floor(Math.random() * (i + 1));
  //       x = haikyuu[i];
  //       haikyuu[i] = haikyuu[rand];
  //       haikyuu[rand] = x;
  //   }
  //   this.setState({randHaikyuu:haikyuu});
  //   ///////////////////////////////////
  //   this.setState({score:this.state.score + 1});
  //   ////////////////////////////////////
  //   if (this.state.score === 9){
  //     alert("You've reached the high score!")
  //     this.setState({score:0});

  //   }
    // this.setState({keeptrack:[...this.state.keeptrack,name]})
    // alert(name)

    ///////////////////////////////////
    //PSEUDO CODE ==> needs to keep track of each card it clicks.
    // if (this.state.keeptrack.includes(id))
    // {
    //   this.setState({score:0})
    //   this.setState({keeptrack:[]})
    //   if (this.state.score > this.state.highscore)
    //   {
    //     this.setState({highscore:this.state.score});

    //   }

    // }

    // this.setState({score:this.score})
    // if (this.randHaikyuu.includes(haikyuu.id)){
    //   this.setState({highscore:this.score})

    // }
  // }
  
  render()
{
    return (
    <Wrapper>
      <Title>Employee Directory</Title>
      <Col><Header
      handleClick= {this.handleClick}>

      </Header>
      {avatar.map((character)=>{
       return <Player 
        name={character.name}
        image={character.image}
        bending={character.bending}
        age = {character.age}
      />
      })
      }    </Col>
        
    </Wrapper>
  );
}
}
  


export default App;
