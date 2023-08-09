import './ListaSuspensa.css';

export const ListaSuspensa = (props) => {
  return (
    <div className='lista-suspensa'>
      <label>{props.label}</label>
      <select onChange={event => props.aoAlterado(event.target.value)} required={props.obrigatorio} value={props.valor} >
        <option value=""></option>
        {props.itens.map(
          // Para cada item da lista, retorna uma option
          item => <option key={item}>{item}</option>
        )}
      </select>
    </div>
  )
}
