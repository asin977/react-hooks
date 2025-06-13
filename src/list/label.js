
import React from 'react';
import './Label.css';
import Tooltip from './Tooltip';
import { useTooltip } from '../hooks/ourHooks';
import { useSelector } from 'react-redux';


function Label(props) {
    const [showTooltip, setShowTooltip, labelRef, refObj] = useTooltip();
    // const refObj = useTest()
    // const refObj = useRef() instead of useRef we can also use the useMemo...

    // const refObj = useMemo(()=> {
    //     return {
    //         current:undefined
    //     }
    // },[])
    // console.log(refObj) // we can also use the useCallback too ...
    
    // const labelRef = useRef();
    // const refObj = useRef()

    useLayoutEffect(()=> {
        if (showTooltip) {
            console.log(labelRef.current);
            console.log(refObj.current)

            const width1 = labelRef.current.getBoundingClientRect().width;
            const width2 = refObj.current.getBoundingClientRect().width;

        refObj.current.style.left = `${-(width2-width1)/2}px`;
        }
    },[showTooltip]);

    const refCallback = useCallback((domItem)=> {
        console.log('Inside function');
        console.log(domItem);
    },[]);

    const val = useSelector((state) => state.showLabel);
    const style = props.isActive ? {background: 'green'} : {background: 'orange'}
    if(val === false) {
        return null;
    }

    const handleMouseEnter = () => {
        // console.log(evt.target);
        // console.log(refObj.current)

        // const width1 = evt.target.getBoundingClientRect().width;
        // const width2 = refObj.current.getBoundingClientRect().width;

        // refObj.current.style.left = `${-(width2-width1)/2}px`;

        setShowTooltip(true);


    }

    const handleMouseLeave = () => {
        setShowTooltip(false);
    }


    const text = props.isActive ? 'Active': 'Non Active';

    return (
        <div className="list-label-item-container">
            <span
                ref={labelRef}
                onClick={() => {
                    props.onAction(props.isActive ? 'active': 'non-active');
                }}
                className="list-label-item"
                style={style}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {text}
            </span>
            {/* <label 
                ref = {refCallback}
                // ref = {refObj}
                className='{`tooltip ${showTooltip} `}'>
                This is {props.isActive ? 'Active' : 'Non Active'} tooltip
            </label> */}
            <Tooltip ref={refObj} showTooltip={showTooltip} message={`This is ${text}`}/>
        </div>
    );
}
 
export default Label;
