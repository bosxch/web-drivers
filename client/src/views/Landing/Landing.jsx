import { Link } from "react-router-dom";

export default function Landing () {
    return (
        <div className="landing-container"> 
            <div className="landing-title">Abrochense los cinturones</div>
           
            <button class="btn-23">
  <span class="text">START</span>
  <span aria-hidden="" class="marquee"> <Link to="/home" className="start-link">
                    START
                </Link></span>
</button>
        </div>
    );
}