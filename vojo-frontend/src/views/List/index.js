import React, { useEffect } from 'react';
import axios from 'axios';
import { Container, Header, Footer } from '@mindlab-vojo/component-library';
import { useState } from 'react';

import './style.sass';

const List = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    (async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/v3/jobs/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setJobs(data);
    })();
  }, []);

  return (
    <Container maxWidth='full'>
      <Header />
      <div className='List__Container'>
        <ul>
          {(jobs || []).map((job) => (
            <li>{job.title}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </Container>
  );
};

export default List;
