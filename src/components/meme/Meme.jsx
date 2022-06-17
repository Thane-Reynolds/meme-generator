import React from "react"
import MemeData from '../../memesData'
export default function Meme(){
  const [meme, setMeme] = React.useState(
    {
      topText: "",
      bottomText:"",
      randomImage:"http://i.imgflip.com/1bij.jpg",
    }
  );
  const [allMemeImages, setAllMemeImages] = React.useState(MemeData)
  
  function randomMeme(){
    const memesArray = allMemeImages.data.memes;
    const randomNum = Math.floor(Math.random()* allMemeImages.data.memes.length);
    setMeme(prevState =>{
      return{
        ...prevState,
        randomImage: memesArray[randomNum].url,
      }
    });
  }
  function updateTopText(e){
    setMeme(prevState => {
      return{
        ...prevState,
        topText: e.target.value
      }
    })
    console.log(meme)
  }
  function updateBottomText(e){
    setMeme(prevState => {
      return{
        ...prevState,
        bottomText: e.target.value
      }
    })
    console.log(meme)
  }
  return(
    <section className="meme">
      <div className="meme--form">
        <div className="meme--input-holder">
          <input onInput={updateTopText} type="text" placeholder="top text" />
          <input onInput={updateBottomText} type="text" placeholder="bottom text" />
        </div>
        <button onClick={randomMeme} className="meme--button">Get a new meme image</button>
      </div>
      <div className="meme--image-holder">
        <img src={meme.randomImage} alt="A random meme" />
      </div>
    </section>
  )
}