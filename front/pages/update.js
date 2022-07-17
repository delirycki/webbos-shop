import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import UpdateProduct from '../components/UpdateProduct';

function UpdatePage(props) {
  const router = useRouter();
  const { id } = router.query;
  return <UpdateProduct id={id} />;
}
export default UpdatePage;
