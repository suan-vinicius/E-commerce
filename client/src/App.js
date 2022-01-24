import { Header } from './components/header';
import { MyContext } from './provider/provider';
import { Card } from './components/card';
import { Layout } from './components/layout';
import { Global } from './global';
import { useContext, useEffect } from 'react';
import { Filter } from './components/filter';

const App = () => {
  const  { getData } = useContext(MyContext);

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div>
      <Header />
      <Layout>
        <Filter />
        <Card />
      </Layout>
      <Global />
    </div>
  );
}

export default App;