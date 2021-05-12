import Image from 'next/image';
import Link from 'next/link';
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
  return (
    <Container>
      {props.items.map(item => (
        <li className={item.isActive && 'active'}>
          <Link href={item.destination}>
            <>
              <Image
                src={`/assets/icons/navbar/${item.image}`}
                alt={item.title}
                width={24}
                height={24}
              />
              <span>{item.title}</span>
            </>
          </Link>
        </li>
      ))}
    </Container >
  )
}