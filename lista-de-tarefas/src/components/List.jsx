import React, {useState} from 'react'
import Form from './Form'
import Item from './Item'
import Infos from './Infos'
import Filter from './Filter'


function List() {
    const [itens, setItens] = useState([])
    const [itensFilter, setItensFilter] = useState('')
    const [isFilter, setIsFilter] = useState('')

    const addItem = item => {
        if(!item.text || /^\s*$/.test(item.text)){
            return
        }

        const newItens = [item, ...itens]
        
        setItens(newItens)
        setIsFilter(false)
    }

    const check = id => {
        let updatedItens = itens.map(item => {
            if(item.id === id) {
                item.isChecked = true
                item.showBackIcon = true
                item.showCheckIcon = false
            }
            return item
        });
        
        setItens(updatedItens)
    }

    const uncheck = id => {
        let updatedItens = itens.map(item => {
            if(item.id === id) {
                item.isChecked = false
                item.showBackIcon = false
                item.showCheckIcon = true
            }
            return item
        });

        setItens(updatedItens)
    }

    const filter = text => {
        console.log(text)
        console.log(itens)
        if (text){
            setItensFilter(itens.filter((item) => item.text.includes(text))) 
            setIsFilter(true)
        } else {      
            setIsFilter(false)
        }
    }
    
    return (
        <div>
            <Form onSubmit={addItem} />
            <Item 
                itens={isFilter ? itensFilter : itens}
                check={check}
                uncheck={uncheck}
            />
            
            <div className='footer'>
                <Infos 
                    unchecked={
                        isFilter ?
                        itensFilter.filter((obj) => obj.isChecked === false).length :
                        itens.filter((obj) => obj.isChecked === false).length
                    }
                    total={isFilter ? itensFilter.length : itens.length}
                />
                <Filter filter={filter}/>
            </div>
        </div>
    )
}

export default List
