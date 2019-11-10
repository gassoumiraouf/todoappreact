import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:this.props.id,
            checked:true,
            item: []
         }
        
         } 
         checking=()=>{
            this.setState({cheked:!this.state.checked})
    }
    clearTodo = id => {
        this.setState({ item: 
            this.props.item.filter((todo, index) => todo.index !== id) 
        });
    }
    render() { 
        const {item}=this.props
        return (<div className='tasks'>
            {this.props.item.map((el, index) => (
                <ul>
                    <li>
                        <div className=' task-container row'>
                        <button className='btn btn-success col-2' onClick={this.checking}>{this.state.checked ?'complete':'Undo'}
                        </button>
                        <button className='btn btn-danger col-2' onClick={() => this.clearTodo(this.state.id)}>delete</button>
                        <p className='col'>{item}</p>
                        </div>
                    </li>
                </ul>
            ))}
    </div>   );
    }
}
 
export default List;