import Link from 'next/link';
const links = [
    { name: 'About', href: '/about' },
    {
      name: 'Products',
      href: '/products',
    },
  ];

export default function Navbar() {
    return (
      <div>
        {
            links.map((link) => {
                return (
                    <Link key={link.name} href={link.href}>{link.name}</Link>
                )
            })
        }
      </div>
    )
  }