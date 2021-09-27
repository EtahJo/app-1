import HomeCSS from './Home.module.css';
import { Link } from 'react-router-dom';

const Eventlist = ({events}) => {
   
    return ( 
        <div className="event-list">
              {events.map((event)=>(
                <div className={HomeCSS.eventpreview}>
                 <ul className={HomeCSS.grid}>
                     <li>
                    <h1>{event.date}</h1>
                    <h1>{event.month}</h1>
                    </li>
                    <li>
                   
                    <h2>{event.title}</h2>
                    <hr/>
                    <p>{event.des}</p>
                    <Link to={`/details/${event.id}`}>+ Event Detail</Link>
                    </li>
                 
                <li>
                    <h2>{event.time}</h2>
                    <hr/>
                    <p>{event.place}</p>
                    </li>
                    </ul>
                  
                    <hr/>
                   

                </div>
            ))}
        </div>
     );
}
 
export default Eventlist;