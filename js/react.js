// Body
class Body extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <About />
      </div>
    )
  }
}

// Navbar
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Nav />
        </div>
      </nav>
    )
  }
}

// Nav
class Nav extends React.Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavItem style="nav-item nav-link" url="#" linkName="About"/>
          <NavItem style="nav-item nav-link" url="#" linkName="Skills"/>
          <NavItem style="nav-item nav-link" url="#" linkName="Education"/>
          <NavItem style="nav-item nav-link" url="#" linkName="Experience"/>
        </div>
      </div>
    )
  }
}

// Nav Item
const NavItem = props => <a className={props.style} href={props.url}>{props.linkName}</a>;

// Jumbotron
class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
    )
  }
}

// About Section
class About extends React.Component {
  render() {
    return (
      <div className="container">
        <Card quote="Hello.." text="I'm an enthusiasm web developer. Currently working as Web Programming and Object Oriented Programming instructor in Universitas Teknokrat Indonesia." blockquote="Muhammad Fadhil Azka" source="my brain"/>
      </div>
    )
  }
}

// Card
class Card extends React.Component {
  render() {
    return (
      <div class="card">
        <div class="card-header">
          {this.props.quote}
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{this.props.text}</p>
            <footer class="blockquote-footer">{this.props.blockquote}<cite title="Source Title"> {this.props.source}</cite></footer>
          </blockquote>
        </div>
      </div>
    )
  }
}

const element = <Body />;

ReactDOM.render(
  element,
  document.getElementById('root')
);