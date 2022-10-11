import React, { useRef } from 'react'
import { useGetAllTodosQuery} from '../../services/getInfo'
import Loader from '../Loader/Loader'
import {
    List,
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache    
} from "react-virtualized"
import "react-virtualized/styles.css"; 
import "./Todos.scss"
import TodoHeader from "./TodoHeader"
import TodoList from './TodoList'


function Todos() {

    const {data:todos, isFetching} = useGetAllTodosQuery()
    

    const cache = useRef(new CellMeasurerCache({
        fixedWidth:true,
        defaultHeight: 100
    }))

    if(isFetching) return <Loader/>

    console.log(todos)

    

  return (
    <div className='todos-wrapper'>

            <div style={{width:"100%", height:"600px"}}>
                
                <TodoHeader  />

                <AutoSizer>
                    {({width,height}) => (
                        <List 
                            width={width}
                            height={height}
                            rowHeight={75}
                            deferredMeasurementCache={cache.current}
                            rowCount={todos?.data?.length}
                            rowRenderer={({key, index,style,parent})=>{
                                const todo=todos?.data[index]

                                return (
                                    <CellMeasurer
                                        key={key}
                                        cache={cache.current}
                                        parent={parent}
                                        columnIndex={0}
                                        rowIndex={index}
                                    >
                                        
                                        <TodoList todo={todo} style={style}/>
                                        
                                    </CellMeasurer>
                                )
                            }}
                        />
                    )}
                </AutoSizer>
            </div>
            
    
    </div>
  )
}

export default Todos