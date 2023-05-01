import React, { Component } from 'react'

export default class Todo_class extends Component {
    state = {
        nameOfList: "",
        items: [],
        toggle: true,
        editItem: null
    };
    handlechange(e) {
        this.setState({
            nameOfList: e.target.value
        });
    }
    additem() {
        const data = JSON.parse(localStorage.getItem('items'))
        if (!this.state.nameOfList) {
            console.log("no value")
        }
        else if (this.state.nameOfList && !this.state.toggle) {
            var abc = data.map((elem, ind) => {
                if (elem.id === this.state.editItem) {
                    return { ...elem, name: this.state.nameOfList }
                }
                return elem;
            })
            window.localStorage.setItem("items", JSON.stringify(abc))
            this.setState({
                toggle: true,
                nameOfList: "",
                editItem: null
            })
        }
        else {
            const allinputdata = { id: new Date().getTime().toString(), name: this.state.nameOfList }
            this.setState({
                items: [...this.state.items, allinputdata],
                nameOfList: "",
            })
            window.localStorage.setItem("items", JSON.stringify([...this.state.items, allinputdata]))
        }
    }
     deleteitem(id){
        const data = JSON.parse(localStorage.getItem('items'))
        const updateditem = data.filter((elem) => {
            return id !== elem.id
        })
        window.localStorage.setItem("items", JSON.stringify(updateditem))
        window.location="/"
    }

    edititem(id) {
        const data = JSON.parse(localStorage.getItem('items'))
        let newedititems = data.find((elem) => {
            return elem.id === id
        })
        this.setState({
            toggle: false,
            nameOfList: newedititems.name,
            editItem: id
        })
    }
    render() {
        var a = JSON.parse(window.localStorage.getItem("items"))
        return (

            <div>
              
                <div>
                    <input onChange={this.handlechange.bind(this)} value={this.state.nameOfList} className="box" />
                    {
                        this.state.toggle ? <button onClick={this.additem.bind(this)} className="btn2">{this.props.name}</button> : <button onClick={this.additem.bind(this)} className="btn2">Update</button>
                    }
                </div>
                <div>
                    {
                        a.length > 0 ?
                            a.map((elem) => {
                                return (
                                    <div key={elem.id} className="todo-containt row">
                                        <div className='col-sm-9' style={{ display: "flex", justifyContent: "start" }}>
                                            <h4>{elem.name}</h4>
                                        </div>
                                        <div className='col-sm-3' style={{ display: "flex", justifyContent: "end" }}>
                                            <button onClick={() => this.edititem(elem.id)} className="edit"><i className="fa fa-edit"></i></button>
                                            <button onClick={() => this.deleteitem(elem.id)} className="delete"><i className="fa fa-trash-o"></i></button>
                                        </div>
                                    </div>
                                )
                            })
                            : ""
                    }
                </div>
            </div>
        )
    }
}

// import React from 'react';

// class Todo_class extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       count: 0,
//       a:"updated",

//     }
//   }

//   increment() {
//     this.setState(previousValue => ({
//       count: previousValue.count + 1,
//     }));
//   }

//   decrement() {
//     this.setState(previousValue => ({
//       count: previousValue.count - 1,
//     }));
//   }
//   componentWillUnmount() {
//     alert('Deleted User successfully');
//  }
//   componentDidMount(){
//       console.warn("created")
//     }
//     componentDidUpdate(){
//       console.log(this.state.a)
//   }
//   render() {
//     return (
//       <div className="counter">
//         <h1>{this.state.count}</h1>
//         <button onClick={this.increment.bind(this)}>+</button>
//         <button onClick={this.decrement.bind(this)}>-</button>
//       </div>
//     );
//   }
// }

// export default Todo_class;