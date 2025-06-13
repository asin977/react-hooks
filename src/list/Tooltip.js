import React,{useImperativeHandle} from 'react'

const Tooltip = React.forwardRef(
    function Tooltip(props,ref) {
        const {
            showTooltip
        }= props;

       
        if (!showTooltip) {
            return null;
        }
        useImperativeHandle(ref,()=> {
            return {
                MyTest : ()=> {
                    console.log('Hello I am in a test')
                }
            }
        })
      return (
        <label

            ref = {ref}
            // className = 'tooltip' ref={ref}>
            className = {`tooltip ${showTooltip ? 'show-tooltip' :'hide-tooltip'}`}>
                This is {props.isActive ? 'Active' : 'Non Active'} tooltip
        </label>
      )
    }
)


export default Tooltip
// export default React.forwardRef(Tooltip)
