import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="flex justify-between bg-slate-800 text-white py-4 px-4">
        <div className="logo font-bold">Website</div>
        <ul className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </ul>
    </nav>
  )
}

export default Navbar
