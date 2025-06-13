import React from 'react'
import Label from './Label';
import '/.ListItem.css'
import { useTooltip } from '../Hooks/ourHooks';


function ListItem(props) {
  const {
      title,
      descr,
      isActive,
      onDelete,
      onLabelClick
    } = props;

    const [showTooltip,setShowTooltip,labelRef,refObj] = useTooltip();
    return (
        <div className='List-item'>
          <div className='List-title'>
              <h4>{title}</h4>
              <label 
                  onClick={onDelete}
                  ref={labelRef}
                  onMouseEnter={()=>setShowTooltip(true)}
                  onMouseLeave={()=>setShowTooltip(false)}>
                      Delete 
                      <ToolTip ref={refObj} showTooltip={showTooltip} message='Delete this'></ToolTip>
              </label>
          </div>
        <div className='list-descr'>
             {descr}
        </div>
        <div className='list-label'>
            <label isActive={isActive} onAction= {onLabelClick}></label>
        </div>
    </div>
  )
}

export default ListItem
