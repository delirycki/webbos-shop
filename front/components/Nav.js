import React from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

function Nav() {
  return (
    <NavStyles>
      <Link href="/products">products</Link>
      <Link href="/sell">sell</Link>
      <Link href="/orders">orders</Link>
      <Link href="/account">account</Link>
    </NavStyles>
  );
}

export default Nav;
