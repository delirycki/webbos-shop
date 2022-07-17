import { useRouter } from 'next/router';
import SingleProduct from '../../components/SingleProduct';

export default function singleProduct() {
  const router = useRouter();
  return <SingleProduct id={router.query.id} />;
}
