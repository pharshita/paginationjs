import React, { useState } from 'react'

export default function Todo() {
    const [val, setVal] = useState('')
    const [items, setItems] = useState([])
    const [toggle, setToggle] = useState(true)
    const [editItem, setEditItem] = useState(null)

    const handlechange = (e) => {
        setVal(e.target.value)
    }
    const additem = () => {
        if (!val) {
            console.log("no value")
        }
        else if (val && !toggle) {
            setItems(
                items.map((elem) => {
                    if (elem.id === editItem) {
                        return { ...elem, name: val }
                    }
                    return elem;
                })

            )
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
        const updateditem = items.filter((elem) => {
            return id !== elem.id
        })
        setItems(updateditem)
    }

    const edititem = (id) => {
        let newedititems = items.find((elem) => {
            return elem.id === id
        })
        setToggle(false);
        setVal(newedititems.name)
        setEditItem(id)
    }
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
                    items.map((elem) => {
                        return (
                            <div style={{ display: "flex", justifyContent: "center" }} key={elem.id}>
                                <h3 >{elem.name}</h3>
                                <button onClick={() => edititem(elem.id)}>Edit</button>
                                <button onClick={() => deleteitem(elem.id)}>delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
