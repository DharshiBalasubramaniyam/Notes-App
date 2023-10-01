import compose from '../images/compose.png';
import trash from '../images/trash-can.png';

function Notecard(props) {
    const {id, title, description} = props.note;

    return (
        <div className='note'>
            <div className='title'>{title}</div>
            <div className='description'>{description}</div>
            <img 
                src={trash} 
                alt='trash'
                onClick={()=>{
                        props.getId(id)
                }}
            />
            <img src={compose} alt='edit'/>
        </div>
    );
}

export default Notecard;