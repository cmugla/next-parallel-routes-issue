'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export const ClientComponent = () => {
  const params = useParams();

  const href = params.threeLevel ? '/one/two' : params.twoLevel ? '/one/two/three' : '/one/two';

  const currentHref = params.threeLevel ? `/${params.oneLevel}/${params.twoLevel}/${params.threeLevel}` : `/${params.oneLevel}/${params.twoLevel}`;

  return (
    <>
      <div>Route according to params: {currentHref}</div>
      <Link href={href}>Go to {href}</Link>
      <br />
    </>
  )
}