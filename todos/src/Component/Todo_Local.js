import React, { useState,useEffect } from 'react'

export default function Todo_Local() {
    const [val, setVal] = useState('')
    const [items, setItems] = useState([])
    const [toggle, setToggle] = useState(true)
    const [editItem, setEditItem] = useState(null)
    const [a, seta] = useState()

    const handlechange = (e) => {
        setVal(e.target.value)
    }
    const additem = () => {
        let data= JSON.parse(localStorage.getItem("items"))
        if (!val) {
            console.log("no value")
        }
        else if (val && !toggle) {
           let array= data.map((elem) => {
                    if (elem.id === editItem) {
                        return { ...elem, name: val }
                    }
                    return elem;
                })
                localStorage.setItem("items",JSON.stringify(array) )

            setToggle(true);
            setVal("")
            setEditItem(null)
        }
        else {
            const allinputdata = { id: new Date().getTime().toString(), name: val }
            setItems([...items, allinputdata])
            setVal('')
            localStorage.setItem("items",JSON.stringify([...items, allinputdata]) )
        }
    }
    const deleteitem = (id) => {
       let data= JSON.parse(localStorage.getItem("items"))
        const updateditem = data.filter((elem) => {
            return id !== elem.id
        })
       localStorage.setItem("items",JSON.stringify(updateditem))
       window.location="/todo-local"  
    }

    const edititem = (id) => {
        let data= JSON.parse(localStorage.getItem("items"))
        let newedititems = data.find((elem) => {
            return elem.id === id
        })
        setToggle(false);
        setVal(newedititems.name)
        setEditItem(id)
    }
    let bfhj = JSON.parse(localStorage.getItem("items"))
    return (
        <div>
            <div>
                <input onChange={handlechange} value={val} />
                {
                    toggle ? <button onClick={additem}>add</button> : <button onClick={additem}>Update</button>
                }
            </div>
            <div>
                {
                    bfhj.length !==0 ?
                    bfhj.map((elem,ind) => {
                        return (
                            <div style={{ display: "flex", justifyContent: "center" }} key={elem.id}>
                                <h3 >{elem.name}</h3>
                                <button onClick={() => edititem(elem.id)}>Edit</button>
                                <button onClick={() => deleteitem(elem.id)}>delete</button>
                            </div>
                        )
                    })
                    :""
                   
                }
            </div>
        </div>
    )
}
