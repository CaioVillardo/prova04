import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Img2 from "../../assets/img/Img2.svg"
import '../../assets/css/img.css'

class NotFound extends Component{
    render(){
        return(
            <>
            <img className="robo" src={Img2} alt=""/>
            <div texto>
            <h4>Erro 404<br></br><br></br></h4>
            Ohh no!!!<br></br><br></br>
            Parece que a página que você estava procurando não foi encontrada
            </div>
            </>
        );
    }
}
export default NotFound;
