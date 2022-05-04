import React from 'react'
import { AiOutlineCheck, AiOutlineRollback } from "react-icons/ai";

function Item({itens, check, uncheck}) {
    
    return itens.map((item, index) => (
        <div
            className={item.isChecked ? 'item-row checked' : 'item-row'}
            key={index}
        >
            <div key={item.id}>
                {index}. {item.text}
            </div>
            <div className='icons'>
                {item.showCheckIcon ? <AiOutlineCheck
                    onClick={
                        () => check(item.id)
                    }
                    className='checked-item'
                /> : null}

                {item.showBackIcon ? <AiOutlineRollback
                    onClick={
                        () => uncheck(item.id)
                    }
                    className='unchecked-item'
                /> : null}
            </div>
        </div>
    ))
}

export default Item
