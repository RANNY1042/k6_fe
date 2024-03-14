
import logo from "./logo_w.png" ;
import "./HelloCss.css";
import HelloWhite from "./HelloWhite";
import HelloYellow from "./HelloYellow";


function HelloCss () {
  return (
    <div className="Hellomain">
      <img className="ImgLogo" src={logo} alt="pusanlogo"/>
      
      <HelloWhite />
      <HelloYellow />
      
    </div>
  );
}

export default HelloCss
