import React, { Component } from 'react';
import shortid from 'shortid';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: [],
            checked: true,
            id:shortid.generate()
            
        }

    } 
    onchange = (event) => {

        this.setState({ term: event.target.value });

    }
   
    checking = () => {
        this.setState({ checked: !this.state.checked })
        
    }
    Submit = (event) => {
        event.preventDefault()
        this.setState({
            items: [this.state.term , ...this.state.items ],
            term:'',
            id:this.state.id+1
           
    },
       

        );

    }
   
     clearTodo = id => {
        this.setState({
            items:this.state.items.filter((todo => id !== this.state.id))
           
        });
    }
   
    render() {
        return (<div className='container'>
            <h1>To do App</h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="write task"
                    aria-label="Add task" aria-describedby="button-addon2"
                    onChange={this.onchange} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button"
                        id="button-addon2" onClick={this.Submit}>Add task</button>
                </div>
            </div>
            <div className='tasks'>
                {this.state.items.map((el, index) => (
                    <ul>
                        <li>
                            <div className=' task-container row'>
                                <button className='btn btn-success col-2' onClick={this.checking}>{this.state.checked ? 'complete' : 'Undo'}
                                </button>
                                <button className='btn btn-danger col-2' onClick={() => this.clearTodo(this.state.id)}>delete</button>
                                <p className='col' style={this.state.checked ?{textDecoration:'none'}:{textDecoration:'line-through'}}>{el}</p>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
        </div>

        );
    }
}

export default ToDo;