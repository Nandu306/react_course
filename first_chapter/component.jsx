function HeaderComponent() {
  return (
    <header>
      <nav className="center">
      <img src="react_logo.png" alt="" className="nav-logo"/>
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return(
    <footer>
    <small> © 2021 NR Development. All rights reserved. </small>
    </footer>
  )
}

function MainContent() {
  return(
    <div>
      <h1>Why I like React</h1>
      <ul>
        <li>It's fun</li>
        <li>It's useful</li>
        <li>It's nice</li>
      </ul>
    </div>
  )
}


function PageComponent() {
  return (
    <div>
      <HeaderComponent/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(<PageComponent/>, document.getElementById("app"))
