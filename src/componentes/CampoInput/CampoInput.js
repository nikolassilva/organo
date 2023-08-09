import './CampoInput.css';

export const CampoInput = (props) => {
  return (
    <div className="campo-input">
      <label>
        {props.label}
      </label>
      <input value={props.valor} onChange={event => props.aoAlterado(event.target.value)} required={props.obrigatorio} placeholder={props.placeholder} type={props.type}/>
    </div>
  );
};

