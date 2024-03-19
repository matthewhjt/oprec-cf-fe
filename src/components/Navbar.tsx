import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
}

function Navbar() {
  const navLinks: NavLink[] = [
    { href: '/dashboard/divisi', label: 'Manage Division' },
    { href: '/dashboard/application', label: 'Manage Applications' },
    { href: '/logout', label: 'Logout' },
  ];

  return (
    <nav className={`bg-gray-800 h-20 flex justify-center`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/dashboard">
            <span className="font-bold text-xl text-white">Home</span>
          </Link>
        </div>
        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-white hover:text-gray-200 ${
                  link.label === 'Logout' ? 'bg-red-800 rounded px-2 py-1' : ''
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
