import React from 'react'
import API from '../../../../api';
import styles from './Todo.module.scss';
import { format} from 'date-fns';

export default function Todo(props) {
    const {_id, name, state , dueDate } =props.todo;
   // console.log(props.callBackDelete);

    const setState = async () => {
        await API.patch('/todo/',{
            _id:{_id}
        },
        {
            headers: {'Authorization': `Bearer ${props.token}`}      
          });

    }
    
    return (
        <div className={styles.container}>
            <p>{format(new Date(dueDate),'MM.dd.yyyy')}</p>  
            <p className={styles.name}>{name}</p>            
            <input  className={styles.checkbox} type="checkbox" defaultChecked={state && 'checked'} onChange={setState}></input>
            <p className={styles.delete} onClick={()=>props.callBackDelete(_id)}>delete</p>
            
        </div>
    )
}
