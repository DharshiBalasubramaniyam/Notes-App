import compose from '../images/compose.png';
import trash from '../images/trash-can.png';
import { Link } from 'react-router-dom';

function Notecard(props) {
    const {id, title, description} = props.note;

    return (
        <div className='note'>
            <div className='title'>{title}</div>
            <div className='description'>{description}</div>
            <Link to={`/deletenote/${id}`} state={props.note}><img src={trash} alt='trash' /></Link>
            <img src={compose} alt='edit'/>
        </div>
    );
}

export default Notecard;