import React from 'react'

function JustInfo() {
//     const {
//        activeState
// } = props;
    console.log('render home')
  return (
    <div>
       {/* Home Info{activeState} */}
       Home Info
    </div>
  )
}
const NewComp = React.memo(JustInfo,(prevProps,nextProps)=> {
   return true; // it renders
  //  return false // donot renders
});

export default NewComp;
// React.memo has another argument too which is a function which is commonly used to  change the properties specifically...