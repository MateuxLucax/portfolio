import hideNavbar from '@/lib/hideNavbar';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Container } from '../../styles/navbar/navbar';

export interface NavbarItem {
  title: string;
  destination: string;
  image: string;
  isActive?: boolean;
}

export interface NavbarProps {
  items: NavbarItem[];
}

export default function Navbar(props: NavbarProps) {
  let visible = false;
  visible = hideNavbar();

  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });

  return (
    <Container
      ref={ref}
      style={{
        transform: `translate(0, ${visible ? `${height}px` : '0px'})`,
        transition: 'transform .3s ease',
      }}
    >
      {props.items.map(item => (
        <Link href={item.destination} key={item.title}>
          <li className={item.isActive && 'active'}>
            <>
              <img
                src={`/assets/icons/navbar/${item.image}`}
                alt={item.title}
              />
              <span>{item.title}</span>
            </>
          </li>
        </Link>
      ))}
    </Container>
  );
}
