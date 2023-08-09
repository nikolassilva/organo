import Colaborador from '../Colaborador';
import './Time.css';

export const Time = (props) => {
  return (
    // O que está depois do '&&' vai ser executado se a condição antes dele
    // for verdadeira
    (props.colaboradores.length) > 0 &&
      <section className='time' style={{ backgroundColor: props.corSecundaria }}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className='colaboradores'>
          {props.colaboradores.map(
            colaborador => <Colaborador
              key={colaborador.nome}
              corCabecalho={props.corPrimaria}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              email={colaborador.email}
              telefone={colaborador.telefone}
            />
          )}
        </div>
      </section>
  );
};
