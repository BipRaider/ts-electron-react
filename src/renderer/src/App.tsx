import { Layout } from 'antd';
import React, { Suspense, useEffect } from 'react';
import { HashRouter, Routes, Navigate, Route } from 'react-router-dom';
import { PrivateRoute, PublicRoute, routes, AdminRouter, RotesList } from './routes';
import Header from './components/Header/Header';
import Loading from './components/common/Loading';
import { useOptions } from './context/OptionContext';
import { useElementHeightWidth } from './hook';

const { Content } = Layout;

const App: React.FC = (): JSX.Element => {
  const [ref, height, width] = useElementHeightWidth();
  const { setWidth, setHeight } = useOptions();

  useEffect((): void => {
    if (setWidth) setWidth(width);
  }, [width]);

  useEffect((): void => {
    if (setHeight) setHeight(height);
  }, [height]);

  return (
    <Layout style={{ height: '100%', position: 'relative', top: '2rem' }} ref={ref}>
      <HashRouter>
        <Header />
        <Layout style={{ left: '150px', position: 'relative' }}>
          <Content>
            <Suspense fallback={<Loading />}>
              <Routes>
                {routes.map((route: RotesList): JSX.Element => {
                  if (route.private)
                    return <Route {...route} key={route.path} element={PrivateRoute(route)} />;
                  if (route.admin)
                    return <Route {...route} key={route.path} element={AdminRouter(route)} />;
                  return <Route {...route} key={route.path} element={PublicRoute(route)} />;
                })}
                <Route path='*' element={<Navigate to='/' replace />} />
              </Routes>
            </Suspense>
          </Content>
        </Layout>
      </HashRouter>
    </Layout>
  );
};

export default App;
