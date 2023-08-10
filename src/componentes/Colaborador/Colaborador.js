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
        <h6>{`Email: ${email}`}</h6>
        <h6>{`Telefone: ${telefone}`}</h6>
      </div>
    </div>
  );
};
