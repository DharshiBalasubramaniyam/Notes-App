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
            <Link to={`/updatenote/${id}`} state={props.note}><img src={compose} alt='edit'/></Link>
        </div>
    );
}

export default Notecard;