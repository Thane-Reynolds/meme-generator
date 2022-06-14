import MemeData from '../../memesData'
export default function Meme(){
  function randomMeme(){
    const memesArray = MemeData.data.memes
    const randomNum = Math.floor(Math.random()* MemeData.data.memes.length)
    const url = memesArray[randomNum].url
    console.log(url)
  }
  return(
    <section className="meme">
      <div className="meme--form">
        <div className="meme--input-holder">
          <input type="text" placeholder="top text"></input>
          <input type="text" placeholder="bottom text"></input>
        </div>
        <button onClick={randomMeme} className="meme--button">Get a new meme image</button>
      </div>
    </section>
  )
}
console.log(MemeData.data.memes.length)