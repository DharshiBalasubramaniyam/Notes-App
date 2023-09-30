import compose from '../images/compose.png';
import trash from '../images/trash-can.png';

function Notecard(props) {
    const {key, title, description} = props.note;
    return (
        <div className='note'>
            <div className='title'>{title}</div>
            <div className='description'>{description}</div>
            <img src={trash}/>
            <img src={compose}/>
        </div>
    );
}

export default Notecard;