import './Formulario.css';
import CampoInput from '../CampoInput';
import ListaSuspensa from '../ListaSuspensa';
import { Botao } from '../Botao/Botao';
import { useState } from 'react';

export const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [time, setTime] = useState('');

  const aoSalvar = (event) => {
    event.preventDefault();

    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      email,
      telefone,
      time,
    });

    setNome('');
    setCargo('');
    setImagem('');
    setEmail('');
    setTelefone('');
    setTime('');
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoInput
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          type="text"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoInput
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          type="text"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoInput
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          type="text"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <CampoInput
          obrigatorio={true}
          label="Email"
          placeholder="Digite seu email"
          type="email"
          valor={email}
          aoAlterado={valor => setEmail(valor)}
        />
        <CampoInput
          obrigatorio={true}
          label="Telefone"
          placeholder="Digite seu telefone"
          type="tel"
          valor={telefone}
          aoAlterado={valor => setTelefone(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time" itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};
