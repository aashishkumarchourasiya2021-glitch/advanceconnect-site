import React from 'react';
import logo from './assets/logo.svg';

const PRIMARY = '#0B6CF3';
const PRIMARY_TEXT = '#ffffff';

function Nav({onNav}){
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Advance Connect" className="w-12 h-12 rounded-lg bg-transparent object-contain" />
          <div>
            <h1 className="text-lg font-semibold">Advance Connect</h1>
            <p className="text-xs text-gray-500">eCommerce Growth for Amazon, Flipkart & Meesho</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button onClick={()=>onNav('home')} className="hover:text-indigo-600">Home</button>
          <button onClick={()=>onNav('services')} className="hover:text-indigo-600">Services</button>
          <button onClick={()=>onNav('about')} className="hover:text-indigo-600">About</button>
          <button onClick={()=>onNav('contact')} style={{borderColor: PRIMARY, color: PRIMARY}} className="px-4 py-2 rounded-md border hover:bg-opacity-5">Contact</button>
        </nav>

        <div className="md:hidden">
          <button aria-label="menu">☰</button>
        </div>
      </div>
    </header>
  )
}

function Hero({onNav}){
  return (
    <section style={{background: `linear-gradient(180deg, #ffffff 0%, ${PRIMARY}10 100%)`}}>
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Grow on marketplaces — without the daily grind</h2>
          <p className="mt-4 text-gray-600">End-to-end seller account management, listing optimisation, A+ content, PPC campaigns and fulfillment consulting — tailored for Indian sellers.</p>

          <div className="mt-6 flex gap-3">
            <button onClick={()=>onNav('contact')} className="inline-block px-6 py-3 rounded-md font-medium" style={{backgroundColor: PRIMARY, color: PRIMARY_TEXT}}>Get a free audit</button>
            <button onClick={()=>onNav('services')} className="inline-block px-6 py-3 border rounded-md" style={{borderColor: PRIMARY}}>See case studies</button>
          </div>

          <ul className="mt-6 text-sm text-gray-500 space-y-2">
            <li>✔ 100+ successful listings</li>
            <li>✔ Average conversion lift 20%+</li>
            <li>✔ Specialized in self-ship and hybrid models</li>
          </ul>
        </div>

        <div className="rounded-lg shadow-lg p-6 bg-white">
          <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center">Image / Video placeholder</div>
          <div className="mt-4">
            <h3 className="font-semibold">Sample: A+ content redesign</h3>
            <p className="text-sm text-gray-500 mt-2">Before/after snapshot: improved conversion and click-through.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services(){
  const list = [
    {title: 'Account Management', desc: 'Full seller account operations, returns & A-to-Z support.'},
    {title: 'Listing Optimization', desc: 'Keyword research, titles, bullets & backend search terms.'},
    {title: 'A+ Content & Creatives', desc: 'Design-led A+ modules, infographics and lifestyle images.'},
    {title: 'PPC & Growth', desc: 'Campaign setup, optimisation and long-term strategy.'},
  ];
  return (
    <section className="container mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold">Services</h3>
      <p className="text-gray-600 mt-2">Modular services you can pick à la carte or as a managed package.</p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {list.map(s=> (
          <article key={s.title} className="p-4 border rounded-lg bg-white">
            <h4 className="font-semibold">{s.title}</h4>
            <p className="text-sm text-gray-500 mt-2">{s.desc}</p>
            <a className="mt-3 inline-block text-indigo-600 text-sm">Learn more →</a>
          </article>
        ))}
      </div>
    </section>
  )
}

function About(){
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold">Who we are</h3>
        <p className="text-gray-600 mt-2">Advance Connect is an eCommerce service provider helping Indian brands and sellers grow on leading marketplaces. Our mission is to make online selling easy, profitable & scalable for every Indian seller.</p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded shadow-sm">
            <h4 className="font-semibold">Transparency</h4>
            <p className="text-sm text-gray-500 mt-2">Clear reporting and direct access to account metrics.</p>
          </div>
          <div className="p-4 bg-white rounded shadow-sm">
            <h4 className="font-semibold">Integrity</h4>
            <p className="text-sm text-gray-500 mt-2">We treat client businesses as our own.</p>
          </div>
          <div className="p-4 bg-white rounded shadow-sm">
            <h4 className="font-semibold">Growth-first</h4>
            <p className="text-sm text-gray-500 mt-2">Practical strategies that move the needle.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact(){
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <form className="bg-white p-6 rounded shadow-sm">
          <label className="block text-sm">Name</label>
          <input className="w-full mt-1 p-2 border rounded" placeholder="Your name" />

          <label className="block text-sm mt-3">Email</label>
          <input className="w-full mt-1 p-2 border rounded" placeholder="you@example.com" />

          <label className="block text-sm mt-3">Phone</label>
          <input className="w-full mt-1 p-2 border rounded" placeholder="Mobile number" />

          <label className="block text-sm mt-3">Message</label>
          <textarea className="w-full mt-1 p-2 border rounded" rows={4} placeholder="Tell us your goals..."></textarea>

          <div className="mt-4 flex justify-end">
            <button type="button" className="px-4 py-2 rounded" style={{backgroundColor: PRIMARY, color: PRIMARY_TEXT}}>Send</button>
          </div>
        </form>

        <div className="bg-white p-6 rounded shadow-sm">
          <h4 className="font-semibold">Contact Info</h4>
          <p className="text-sm text-gray-600 mt-2">Email: support@advanceconnect.in</p>
          <p className="text-sm text-gray-600 mt-1">Phone: +91 62618XXXXX</p>
          <p className="text-sm text-gray-600 mt-1">Address: Bhopal, Madhya Pradesh</p>

          <div className="mt-4">
            <a className="inline-block px-4 py-2 border rounded text-indigo-600">WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="border-t">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} Advance Connect — All rights reserved</div>
        <div className="text-sm text-gray-600 mt-3 md:mt-0">Privacy · Terms · Sitemap</div>
      </div>
    </footer>
  )
}

export default function App(){
  const [route, setRoute] = React.useState('home');
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Nav onNav={setRoute} />
      <main>
        {route === 'home' && <Hero onNav={setRoute} />}
        {route === 'services' && <Services />}
        {route === 'about' && <About />}
        {route === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
}
