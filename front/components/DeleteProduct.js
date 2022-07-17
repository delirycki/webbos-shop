import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;
function update(cache, payload) {
  console.log(payload);
  cache.evict(cache.identify(payload.data.deleteProduct));
}

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id },
    update: update,
  });
  const onClickHandler = () => {
    if (confirm('Are yoy sure you want do delate this item?')) {
      deleteProduct(id).catch((err) => alert(err.message));
    }
  };

  return (
    <button type="button" onClick={onClickHandler} disabled={loading}>
      {children}
    </button>
  );
}
