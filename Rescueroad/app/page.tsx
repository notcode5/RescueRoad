'use client'

import { ArrowLeft, ArrowRight, Car, ChevronRight, Edit3, HelpCircle, LogOut, MessageCircle, Phone, ShieldCheck, Star, UserRound, Wallet } from 'lucide-react'

const menuItems = [
  { label: 'Emergency Contacts', icon: Phone },
  { label: 'Payment Methods', icon: Wallet },
  { label: 'Help & Support', icon: HelpCircle },
  { label: 'Rate the App', icon: Star },
]

export default function Page() {
  return (
    <main className="rescue-app profile-app">
      <div className="profile-glow profile-glow-one" aria-hidden="true" />
      <div className="profile-glow profile-glow-two" aria-hidden="true" />
      <div className="app-shell profile-shell">
        <header className="profile-topbar">
          <button className="icon-button" aria-label="Go back"><ArrowLeft /></button>
          <div className="screen-title">My Profile<span>ACCOUNT</span></div>
          <button className="icon-button" aria-label="Profile settings"><UserRound /></button>
        </header>

        <section className="profile-hero">
          <div className="avatar-wrap"><div className="avatar"><span>RV</span></div><span className="verified-dot"><ShieldCheck /></span></div>
          <div className="profile-details"><h1>Rahul Verma</h1><p>+91 98765 43210</p><div className="verified-label"><ShieldCheck /> Verified account</div></div>
        </section>

        <section className="vehicle-card">
          <div className="card-label">MY VEHICLE <span>PRIMARY</span></div>
          <div className="vehicle-row"><div className="vehicle-icon"><Car /></div><div className="vehicle-copy"><h2>Honda City</h2><p>MH 12 AB 1234</p></div><button className="edit-button" aria-label="Edit vehicle"><Edit3 /></button></div>
        </section>

        <section className="stats-row" aria-label="Profile statistics">
          <div><strong>3</strong><span>SOS used</span></div><div className="stat-divider" /><div><strong>4.9</strong><span>Your rating <Star className="stat-star" /></span></div><div className="stat-divider" /><div><strong>2024</strong><span>Member since</span></div>
        </section>

        <section className="menu-section" aria-label="Profile options">
          <div className="card-label">ACCOUNT &amp; SUPPORT</div>
          <div className="menu-card">{menuItems.map(({ label, icon: Icon }) => <button className="menu-item" key={label}><span className="menu-icon"><Icon /></span><span>{label}</span><ChevronRight className="menu-arrow" /></button>)}<button className="menu-item logout-item"><span className="menu-icon"><LogOut /></span><span>Logout</span><ChevronRight className="menu-arrow" /></button></div>
        </section>
        <p className="profile-footer">RESCUEROAD <span>•</span> YOUR JOURNEY, OUR PRIORITY</p>
      </div>
    </main>
  )
}
