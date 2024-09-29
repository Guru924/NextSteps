import React from 'react'
import Script from 'next/script';

function contact() {
  return (
    <div>
      <Script>
        { `alert("Welcome to contact page");` }
      </Script>
      contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact Website",
  description: "metadata export in component for better seo",
};