 import React from 'react'
 import PropTypes from 'prop-types';
 export default function Navbar(props){
    return (
      <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">{props.home}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">{props.utilities}</a>
      </li>
    </ul>                 
    <form className="d-flex" style={{padding: "0px 0px 0px 60vw"}}>
      <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-primary" type="submit"  >Search</button>
    </form>
  </div>

</nav>
<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light' }`} style={{padding:"0px 0px 0px 90vw"}}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
  <label className="form-check-label" for="flexSwitchCheckDefault">Enable Dark mode</label>
</div>
</>
    )
 }
 Navbar.propTypes={
  title:PropTypes.string.isRequired,
  home:PropTypes.string.isRequired,
  utilities:PropTypes.string
 };
 Navbar.defaultProps ={
  title:"Set title here",
  home:"Set home", 
  utilities:"set utilities"
 }