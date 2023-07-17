import Image from 'next/image';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon, ChevronRightIcon } from '@heroicons/react/solid';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-blue-900 text-white shadow-sm">
     
        <>
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="flex justify-between h-14">
              <div className="flex items-center">
                <Link href="/">
                  <a className="text-2xl font-bold">Home</a>
                </Link>
              </div>

              <div className="flex items-center">
                <Link href="/admin">
                  <a className="px-4 py-2 font-medium rounded-md hover:text-gray-200 duration-300">
                    Admin
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </>
   
    </Disclosure>
  );
}
