import {useState} from 'react';
function Message()
{
    const [showMessage,setshowMessage] = useState(false);

    function toggleMessage()
    {
        setshowMessage(!showMessage);
    }

    return(
        <div>
        <button onClick={toggleMessage}>
            {showMessage ? 'HideMessage' : 'ShowMessage'}
        </button>
        {showMessage && <p>Hi welcome All</p>}
         
        </div>
    )
}
export default Message;