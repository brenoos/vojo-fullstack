import React from 'react';
import { Container, Header, Footer } from '@mindlab-vojo/component-library';
import { useEditJob } from '../../context/EditJob';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './style.sass';

const Edit = () => {
  const { editJob } = useEditJob();
  const history = useHistory();
  const { register, handleSubmit } = useForm({
    defaultValues: { ...editJob },
  });

  const onSubmit = async (data) => {
    const formatedData = {
      ...data,
      description: data.description.split(',').map((item) => item.trim()),
      requirements: data.requirements.split(',').map((item) => item.trim()),
    };

    await api.put(`jobs/${editJob._id}`, formatedData);
    history.push('/list');
  };

  return (
    <Container maxWidth='full'>
      <Header />
      <div className='Edit__Container'>
        <form onSubmit={handleSubmit(onSubmit)} className='Edit__Form'>
          <label htmlFor='title'>Título</label>
          <input type='text' name='title' ref={register} />

          <div>
            <label htmlFor='active'>Ativo?</label>
            <select name='active' ref={register}>
              <option value='true'>Sim</option>
              <option value='false'>Não</option>
            </select>
          </div>

          <div>
            <label htmlFor='open'>Aberto?</label>
            <select name='open' ref={register}>
              <option value='true'>Sim</option>
              <option value='false'>Não</option>
            </select>
          </div>

          <label htmlFor='description'>Descrição (separar com vírgulas)</label>
          <input type='text' name='description' ref={register} />

          <label htmlFor='requirements'>
            Requerimentos (separar com vírgulas)
          </label>
          <input type='text' name='requirements' ref={register} />

          <button type='submit'>Enviar</button>
        </form>
      </div>
      <Footer />
    </Container>
  );
};

export default Edit;
