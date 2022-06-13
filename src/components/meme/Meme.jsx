export default function Meme(){
  return(
    <section className="meme">
      <form className="meme--form">
        <input type="text" placeholder="top text"></input>
        <input type="text" placeholder="bottom text"></input>
      </form>
      <button className="meme--button">Get a new meme image</button>
    </section>
  )
}