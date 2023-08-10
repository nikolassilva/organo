import './Colaborador.css';

export const Colaborador = ({ corCabecalho, nome, imagem, cargo, email, telefone }) => {
  return (
    <div className='colaborador'>
      <div className='cabecalho' style={{backgroundColor: corCabecalho}}>
        <img src={imagem ? imagem : '/imagens/no-image.png'} alt=''  />
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <p>{`Email: ${email}`}</p>
        <p>{`Telefone: ${telefone}`}</p>
      </div>
    </div>
  );
};
