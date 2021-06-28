import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getChannels} from "../redux/actions";

const Header = () => {
    const dispatch = useDispatch()
    const [channelName, setChannelName] = useState('')
    return (
        <div>
            <h3>Введите название канала: </h3>
            <input type="text" onChange={(e) => setChannelName(e.target.value)}/>
            <button
            onClick={() => dispatch(getChannels(channelName))}
            >search</button>

        </div>
    );
};

export default Header;