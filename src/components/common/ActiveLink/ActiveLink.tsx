import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ href, children, ...otherProps }) => {
  const router = useRouter();
  let className = '';
  if(router.pathname === href) {
    className = `selected`
  }
  return <Link href={href} {...otherProps}>{React.cloneElement(children, { className })}</Link>
};

export default ActiveLink;