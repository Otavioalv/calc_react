import style from './Tela.module.css'

function Tela({id}){
    return( 
        <div className={style.tela}>
            <input 
                type='text' 
                readOnly 
                className={style.inpt}
                id = {id}
            ></input>
        </div>
    )
}

Tela.defaultProps = {    
    id: 'iTela'
}

export default Tela