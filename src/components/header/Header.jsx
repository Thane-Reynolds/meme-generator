export default function Header (){
  return(
    <Header className="header">
      <nav className="header--Nav">
        <div className="header--LeftNav">
          <img src="/images/troll-face.png" alt="It's the troll face!" />
          <h1 className="header--Title">Meme Generator</h1>
        </div>
        <div className="header--RightNav">
          <span className="header--SubTitle">React Course - Project 3</span>
        </div>
      </nav>
    </Header>
  )
}