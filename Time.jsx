import React,{useState} from 'react';

const App = () =>{
    const [time,setTime] = useState();
    var currentTime = new Date();
    time = currentTime.getTime();
    return (
        <>
        <h3>{time}</h3>
        </>
    );
}
export default App;