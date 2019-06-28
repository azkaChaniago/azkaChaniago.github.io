// Body
class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="row">
          <Aside />
          <div className="col-md-10">
            <h1>This gonna be Main Content</h1>
          </div>
        </div>
      </div>
    );
  }
}

// Aside
class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="col-md-2">
        <ul className="list-group list-group-flush">
          <AsideList classStyles="list-group-item"
            linkName="about.html"
            itemName="About"/>
        </ul>
      </div>
    );
  }
}

// Aside items
const AsideList = props => {
  return (
    <li className={props.classStyles}>
      <a href={props.linkName}>
        {props.itemName}
      </a>
    </li>
  );
}

// Navbar
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blah: [
        {name: "About", link: "about.html"},
        {name: "Skills", link: "skills.html"},
        {name: "Education", link: "education.html"},
        {name: "Experiences", link: "experiences.html"},
        {name: "Achievements", link: "achievements.html"},
      ]
    } 
  }

  render() {
    const nav_items = this.state.blah.map( (item, key) => {
      return (
        <NavItem key={key}
          link={item.link}
          itemName={item.name}
          active={false}/>
      );
    });
    console.log(nav_items);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {nav_items}
          </div>
        </div>
      </nav>
    );
  }
}

// NavItem
const NavItem = (props) => {
  const active = props.active == true ? "nav-item nav-link active" : "nav-item nav-link";
  return(
    <a className={active} href={props.link}>
      {props.itemName}
      {props.active == true ? <span className="sr-only">(current)</span> : ""}
    </a>
  );
}

const element = <Body />;

ReactDOM.render(
  element,
  document.getElementById('root')
);