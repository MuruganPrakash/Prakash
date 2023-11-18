import {useState} from 'react';
function ToggleState()
{
    const [times,setTimes] = useState(0);
    const [states,setStates] = useState('Kaioken');
    function addTimes()
    {
        setTimes(times+1);
        if(times===3)
        {
            setTimes(0);
            setStates(states==='Kaioken' ? 'SuperSaiyan' : 'Kaioken')
        }
    }
   
    return(
        <div>
        <h2>{states}</h2>
        <button onClick={addTimes}>clickMe</button>
        </div>
    )
}
export default ToggleState;