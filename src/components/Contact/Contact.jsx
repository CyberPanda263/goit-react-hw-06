import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deletContact } from '../../redux/contacts/slice'

const Contact = ({id, name, number}) => {

    const dispath = useDispatch();
   
        return (
            <>
                <div>
                    <p><BsFillPersonFill /> {name}</p>
                    <p><BsFillTelephoneFill /> {number}</p>
                </div>
                <div>
                    <button onClick={() => dispath(deletContact(id))}>Delet</button>
                </div>
            </>
        )
    }


export default Contact