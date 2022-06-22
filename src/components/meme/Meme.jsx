import React from "react"
export default function Meme(){
  const [meme, setMeme] = React.useState(
    {
      topText: "",
      bottomText:"",
      randomImage:"http://i.imgflip.com/1bij.jpg",
    }
  );
  const [allMemes, setAllMemes] = React.useState([])
  
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  },[])

  function randomMeme(e){
    e.preventDefault();
    const randomNum = Math.floor(Math.random()* allMemes.length);
    setMeme(prevState =>{
      return{
        ...prevState,
        randomImage: allMemes[randomNum].url,
      }
    });
  }
  function updateText(e){
    const {name, value} = e.target
    setMeme(prevState => {
      return{
        ...prevState,
        [name]: value
      }
    })
    console.log(meme)
  }
  
  return(
    <section className="meme">
      <form className="meme--form">
        <div className="meme--input-holder">
          <label htmlFor="topText">
            Top Text 
          </label>
          <input 
          id="topText" 
          name ="topText"          
          onChange={updateText}           
          type="text" 
          placeholder="top text" 
          value={meme.topText} 
          />
          
          <label htmlFor="bottomText">
            Bottom Text 
          </label>
          <input 
          id="bottomText" 
          name ="bottomText"           
          onChange={updateText}           
          type="text" 
          placeholder="bottom text" 
          value={meme.bottomText} 
          />
        </div>
        <button 
        onClick={randomMeme} 
        className="meme--button">
          Get a new meme image
        </button>
      </form>
      <div className="meme--image-holder">
        <img src={meme.randomImage} alt="A random meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </section>
  )
}