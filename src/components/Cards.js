import {useState} from 'react'
import Card from './Card'

function Cards(){
    const DanteHTBLink = 'https://raw.githubusercontent.com/DanteHTB/anime-memory-game/main/public';    
    
    const [items, setItems] = useState([
        {id: 1, img: DanteHTBLink +'/img/brainsbase.png', stat: ""},
        {id: 1, img: DanteHTBLink +'/img/brainsbase.png', stat: ""},
        {id: 2, img: DanteHTBLink +'/img/cloverworks.png', stat: ""},
        {id: 2, img: DanteHTBLink +'/img/cloverworks.png', stat: ""},
        {id: 3, img: DanteHTBLink +'/img/davidproduction.png', stat: ""},
        {id: 3, img: DanteHTBLink +'/img/davidproduction.png', stat: ""},
        {id: 4, img: DanteHTBLink +'/img/feel.png', stat: ""},
        {id: 4, img: DanteHTBLink +'/img/feel.png', stat: ""},
        {id: 5, img: DanteHTBLink +'/img/lidenfilms.png', stat: ""},
        {id: 5, img: DanteHTBLink +'/img/lidenfilms.png', stat: ""},
        {id: 6, img: DanteHTBLink +'/img/madhouse.png', stat: ""},
        {id: 6, img: DanteHTBLink +'/img/madhouse.png', stat: ""},
        {id: 7, img: DanteHTBLink +'/img/mappa.png', stat: ""},
        {id: 7, img: DanteHTBLink +'/img/mappa.png', stat: ""},
        {id: 8, img: DanteHTBLink +'/img/shueisha.png', stat: ""},
        {id: 8, img: DanteHTBLink +'/img/shueisha.png', stat: ""}
    ].sort(() => Math.random()-0.5))
    

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setPrev(-1)
        }
        else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() =>{
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }   

    return (
        <div className="">
            <div className="">
            <div className="container">
                {items.map((item, index) => (
                        <Card key = {index} item={item} id={index} handleClick={handleClick} />
                    ))
                }
        </div>
            </div>
        </div>
        
    )
}
    

export default Cards