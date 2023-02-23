import style from './botao.module.css'

function botao({val}){
    return(
        <button className={style.bot} >{val}</button>
    )
}

export default botao