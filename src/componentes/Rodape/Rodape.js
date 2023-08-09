import './Rodape.css';

export const Rodape = () => {
  return (
    <footer className='footer'>
      <div className='redes-sociais'>
        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
          <img src='/imagens/fb.png' alt='Facebook'/>
        </a>
        <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
          <img src='/imagens/tw.png' alt='Twitter'/>
        </a>
        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
          <img src='/imagens/ig.png' alt='Instagram'/>
        </a>
      </div>
      <div className='logo'>
        <img src='/imagens/logo.png' alt='Logo'/>
      </div>
      <div className='assinatura'>
        <p>Desenvolvido por Nikolas.</p>
      </div>
    </footer>
  );
};
