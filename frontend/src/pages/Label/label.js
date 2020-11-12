import React from 'react';
import Header from '../../components/Common/Header';
import Content from '../../components/Label/content';
import Footer from '../../components/Common/Footer';
import { useHistory } from 'react-router-dom';

export default function Label() {
  const history = useHistory();
  if (!document.cookie.includes('jwt')) {
    history.push('/');
  }

  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
