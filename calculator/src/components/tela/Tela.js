import style from './Tela.module.css'

function Tela(){
    return( 
        <div className={style.tela}>
            <input type='text' readOnly className={style.inpt}></input>
        </div>
    )
}

export default Tela