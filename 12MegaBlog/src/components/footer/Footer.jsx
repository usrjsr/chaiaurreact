import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-10 border-t-2 border-indigo-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Logo and copyright */}
          <div className="w-full md:w-1/2 lg:w-5/12 px-4 mb-6">
            <div className="mb-4 inline-flex items-center">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-gray-200">
              &copy; {new Date().getFullYear()} BlogVerse. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-200">
              Company
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline text-sm">Features</Link></li>
              <li><Link to="/" className="hover:underline text-sm">Pricing</Link></li>
              <li><Link to="/" className="hover:underline text-sm">Affiliate</Link></li>
              <li><Link to="/" className="hover:underline text-sm">Press Kit</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-200">
              Support
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline text-sm">Account</Link></li>
              <li><Link to="/" className="hover:underline text-sm">Help</Link></li>
              <li><Link to="/" className="hover:underline text-sm">Contact</Link></li>
              <li><Link to="/" className="hover:underline text-sm">Customer Care</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="w-full md:w-1/2 lg:w-3/12 px-4 mb-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-200">
              Legal
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline text-sm">Terms & Conditions</Link></li>
              <li><Link to="/" className="hover:underline text-sm">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:underline text-sm">Licensing</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
