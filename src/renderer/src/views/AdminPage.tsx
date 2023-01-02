import React, { Suspense } from 'react';
import Admin from '../components/Admin/Admin';
import Loading from '../components/common/Loading';

const AdminPage: React.FC = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <Admin />
    </Suspense>
  );
};

export default AdminPage;
