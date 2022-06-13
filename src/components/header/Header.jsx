export default function Header (){
  return(
    <header className="header">
      <nav className="header--Nav">
        <div className="header--LeftNav">
          <div className="img-div">
            <img src="/images/troll-face.png" alt="It's the troll face!" />
          </div>
          <h1 className="header--Title">Meme Generator</h1>
        </div>
        <div className="header--RightNav">
          <span className="header--SubTitle">React Course - Project 3</span>
        </div>
      </nav>
    </header>
  )
}