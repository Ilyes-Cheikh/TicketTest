import { Col } from "react-bootstrap";
import {Link} from "react-router-dom";
import { Button } from "react-bootstrap";
 const MatchesCard = ({id, title, description, team1, team2, imgUrl1 , imgUrl2, idteam1, idteam2 }) => {
  return(
    
    <Col sm={6} md={4}>
       
      <div className="proj-imgbx">  
        <h2 className="team1"> {team1 }</h2>
        <img src={imgUrl1}  className="img1" />
        <img src={imgUrl2} className="img2" />
        <h2 className="team2"> {team2 }</h2>
       
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span> {description} </span>
          <Link 
              to={{
                pathname: `/matchTickets/${id}`
                
              }}>
             <Button className="ticket_button">
              Get my ticket NOW ! 
             </Button>
          </Link>
          <h3>Match ID : {id}</h3>
        </div>
        
      </div>
     
    </Col>
  )
}
export default MatchesCard;