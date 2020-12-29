import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container, Header, Footer } from '@mindlab-vojo/component-library';
import { FaEdit } from 'react-icons/fa';
import { useEditJob } from '../../context/EditJob';
import { useHistory } from 'react-router-dom';

import './style.sass';

const List = () => {
  const [jobs, setJobs] = useState([]);
  const { setEditJob } = useEditJob();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const { data } = await api.get('jobs');
      setJobs(data);
    })();
  }, []);

  const handleClick = (job) => {
    setEditJob(job);
    console.log(job);
    history.push('/edit');
  };

  return (
    <Container maxWidth='full'>
      <Header />
      <div className='List__Container'>
        <ul>
          {(jobs || []).map((job) => (
            <li>
              <FaEdit
                className='List__Button'
                onClick={() => {
                  handleClick(job);
                }}
              />
              {job.title}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </Container>
  );
};

export default List;
