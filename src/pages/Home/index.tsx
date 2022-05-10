import React from 'react';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import PaymentTable from '../../components/PaymentTable';

const Home = () => {
  return (
    <Layout>
      <Card/>
      <PaymentTable/>
    </Layout>
  );
}

export default Home;
