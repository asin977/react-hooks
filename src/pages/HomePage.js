
import React, {useState, useEffect, useMemo, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tools from '../components/Tools';
import SimpleList from '../list/SimpleList';
import {deleteAndUpdate, getDataInfo} from '../redux-toolkit/dataInfoReducer';

import './HomePage.css';

import {
    MyNewContext
} from './mycontexts';
import JustInfo from './JustInfo';

function HomePage() {

    const [activeState, setActiveState] = useState('all');
    const dispatch = useDispatch();
    const data = useSelector(state => state.dataInfo.data);
    const loading = useSelector(state => state.dataInfo.loading);
    const error = useSelector(state => state.dataInfo.error);

    useEffect(() => {
        dispatch(getDataInfo());
    }, [dispatch]);


    const handleRefresh = () => {
        getDataInfo(dispatch);
    }

    const onListChange = (evt) => {
        const value = evt.target.value;
        setActiveState(value);

    }

    const handleDelete = (item) => {
        dispatch(deleteAndUpdate(item.id))
    }

    const handleLabelClick = (arg) => {
        setActiveState(arg);
    }

    const handleAdd = (item) => {
        // setData([item, ...data]);
    }


    const newList = data.filter((item) => {
        if(activeState === 'all') {
            return true;
        }
        if(activeState === 'active') {
            return item.isActive === true;
        }
        if(activeState === 'non-active'){
            return item.isActive === false;
        }
        return false;   
    });
    // const value = useMemo(()=> {
    //     return {
    //         'key':'value1'
    //     }
    // },[]);

    // const handleClick = ()=> {
    //     console.log('clicked')
    // }

    // const handleClick = useMemo(()=> {
    //     return ()=> {
    //         console.log('Clicked',activeState);
    //     }  // dependency must be provided here in this case too...
    // },[activeState])

    // const handleClick = useCallback(()=> {
    //     console.log('Clicked',act iveState);
    // },[activeState]); // mostly used in the case of functions..
    return (
        ( 
            <div>

                {
                    loading && <div className="loading"> Loading ... </div>
                }
                {
                    error && <div className="error"> {error} </div>
                }
                <MyNewContext.Provider value={100}>
                        <Tools onAdd={handleAdd} labelValue={activeState} onAction={onListChange} count={data.length} onRefresh={handleRefresh}>
                            <SimpleList onLabelClick={handleLabelClick} data={newList} onAction={handleDelete} />
                        </Tools>
                        {/* <JustInfo onClick={handleClick} testValue = {value}/> */}
                </MyNewContext.Provider>
            </div>
        )
    );
    
}

export default HomePage;
