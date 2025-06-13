import { useDebugValue, useLayoutEffect, useRef, useState } from "react"

function useTest() {
  const labelRef = useRef();
    return labelRef;
}

function useTooltip() {
    const [showTooltip,setShowTooltip] = useState(false)
    const labelRef = useRef();
    const refObj = useRef();

    useDebugValue('Tooltip showing'+ showTooltip,(val)=> {
        ///....this is done outside the code..
        return val;
    })

    useLayoutEffect(()=> {
        if(showTooltip) {
            const width1 = labelRef.current.getBoundingClientRect().width;
            const width2 = labelRef.current.getBoundingClientRect().width;
            refObj.current.style.left = `${-(width2-width1)/2}px`
        }
    },[showTooltip])
    
    return [showTooltip,setShowTooltip,labelRef,refObj]
}
export {
    useTest,
    useTooltip
}