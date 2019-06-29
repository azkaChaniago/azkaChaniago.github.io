// Body
class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      lists: [
        {name: "About", link: "about.html"},
        {name: "Skills", link: "skills.html"},
        {name: "Education", link: "education.html"},
        {name: "Experiences", link: "experiences.html"},
        {name: "Achievements", link: "achievements.html"},
      ]
    }
  }

  render() {
    return (
      <div>
        <Navbar lists={this.state.lists}
          theme='dark'/>
        <Headings />
      </div>
    );
  }
}

// Headings
class Headings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: [
        { iconName: 'icon ion-logo-facebook', linkName: 'https://www.facebook.com/azkachaniago', accountName: 'azkachaniago'},
        { iconName: 'icon ion-logo-instagram', linkName: 'https://www.instagram.com/azka_chaniago/', accountName: '@azka_chaniago'},
        { iconName: 'icon ion-md-mail', linkName: '#', accountName: 'azka24chaniago@gmail.com'},
        { iconName: 'icon ion-logo-whatsapp', linkName: '#', accountName: '+62896 3197 5464'},
        { iconName: 'icon ion-logo-github', linkName: 'https://github.com/azkaChaniago', accountName: 'azkaChaniago'},
      ]
    }
  }

  render() {
    return(
      <div className="jumbotron jumbotron-fluid" style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
        <ProfileImage imageUrl="../images/pic.jpg"
          width="185"
          height="185"
          classImage="img-fluid img-thumbnail rounded-circle"
          caption="Muhammad Fadhil Azka"
          subCaption="Mobile/Web Developer"/>
        <SocialIcons icons={this.state.icons}/>
      </div>
    );
  }
}

// Image Profile
const ProfileImage = (props) => {
  return(
    <div className="container text-center">
      <img src={ props.imageUrl } width={props.width} height={props.height} className={props.classImage} style={{ marginBottom: '1.5rem' }}/>
      <h2>{props.caption}</h2>
      <p>{props.subCaption}</p>
    </div>
  );
}

// Social Media Icons
const SocialIcons = props => {
  const items = props.icons.map((item, key) => <li key={key} data-toggle="tooltip" data-placement="bottom" title={item.accountName}><a href={item.linkName} target="_blank" ><i className={item.iconName}></i></a></li>); 

  return(
    <ul className="text-center list-inline">
      {items}
    </ul>
  );
}

// Aside
class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list_item: this.props.lists
    }
  }

  render() {
    const aside_list = this.state.list_item.map( (item, key) => {
      return (
        <AsideList key={key}
          liStyle="nav-item"
          feather={item.name}
          linkName={item.link}
          itemName={item.name}
          active={true} />
      );
    });
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky" id="navbarNavAltMarkup">
          <ul className="nav flex-column">
            {aside_list}
          </ul>
        </div>
      </nav>
    );
  }
}

const SidebarHeading = props => {
  return (
    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
      <span>{props.headingName}</span>
      <a className="d-flex align-items-center text-muted" href={props.linkName}>
        <span data-feather={props.feather}></span>
      </a>
    </h6>
  );
}

// Aside items
const AsideList = props => {
  const activated_item = props.active === true ? "nav-link active" : "nav-link";
  return (
    <li className={props.liStyle}>
      <a className={activated_item} href={props.linkName}>
        <span data-feather={props.feather}></span>
        {props.itemName} { props.active === true ? <span className="sr-only">(current)</span> : ""}
      </a>
    </li>
  );
}

// Navbar
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list_item: this.props.lists
    } 
  }

  nav_theme = (theme) => {
    if (theme === 'dark') {
      return 'navbar navbar-expand-lg navbar-dark bg-dark';
    } else if (theme === 'primary') {
      return 'navbar navbar-expand-lg navbar-dark bg-primary';
    } else {
      return 'navbar navbar-expand-lg navbar-light bg-light';
    } 
  }

  render() {
    const class_theme = this.nav_theme(this.props.theme);
    
    const nav_items = this.state.list_item.map( (item, key) => {
      return (
        <NavItem key={key}
          link={item.link}
          itemName={item.name}
          active={false}/>
      );
    });

    return (
      <nav className={class_theme}>
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon ion-md-menu"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {nav_items}
            </div>
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