import styles from './botao.module.css'
import PropTypes from 'prop-types'


/* 
    'val' e o valor do botão que vai aparecer
    'color' e a cor do botão
*/
function botao({val, color}){
    return(
    <div className={styles.div}>
        <button 
            className={styles.bot}
            style={{ backgroundColor: `${color}`}}
        >{val}</button>
    </div>
    )
}

botao.defaultProps = {
    val: 'B',
    color: '#f00'
}

export default botao