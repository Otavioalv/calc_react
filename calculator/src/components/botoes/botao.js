import styles from './botao.module.css'

function Botao({val, color}) {
  function Click() {
    var tel = document.getElementById('iTela');

    if(val === '='){
        tel.value = Calc(tel.value);
    }
    else if(val === 'c'){
        tel.value = tel.value.slice(0, -1);
    }
    else{
        if(val === "X")
            val = "*"
        tel.value += val;
    }
  }
  /* ----------------------- */
  function Calc(val){
    return val = eval(val);
  }

  /* ----------------------- */

  return (
    <div className={styles.div}>
      <button 
        className={styles.bot} 
        style={{ backgroundColor: color }}
        onClick={Click}>
        {val}
      </button>
    </div>
  );
}

Botao.defaultProps = {
  val: 'B',
  color: '#f00',
  onClick: () => {},
};

export default Botao;