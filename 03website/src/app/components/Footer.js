import React from 'react'

function Footer() {
  return (
    <footer className="flex justify-around bg-slate-800 text-white py-4" >
        <div className="text-center">Copyright @ Website || All rights reserved</div>
        <ul className="flex gap-8 text-sm">
            <a href="/" className="text-sm">Home</a>
            <a href="/about" className="text-sm">About</a>
            <a href="/contact" className="text-sm">Contact</a>
        </ul>
    </footer>
  )
}

export default Footer
