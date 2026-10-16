import { useState } from 'react'
import './App.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const categoryTabs = ['All', 'Ethiopian Food', 'Main Dishes', 'Drinks']

const menuItems = [
  {
    name: 'Doro Wat',
    category: 'Ethiopian Food',
    description: 'Tender chicken in a rich berbere sauce, served with injera and fresh herbs.',
    price: 620,
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Kitfo',
    category: 'Ethiopian Food',
    description: 'Minced beef with mitmita, clarified butter, and a warm side of injera.',
    price: 690,
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Beef Tibs',
    category: 'Main Dishes',
    description: 'Sautéed strips of beef with onion, peppers, and house spices.',
    price: 720,
    image:
      'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Lentil Stew',
    category: 'Main Dishes',
    description: 'Slow-cooked lentils finished with ginger, garlic, and aromatic spice.',
    price: 540,
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Tej',
    category: 'Drinks',
    description: 'A fragrant Ethiopian honey wine with a light floral finish.',
    price: 310,
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Ethiopian Coffee',
    category: 'Drinks',
    description: 'Freshly roasted coffee served in the traditional ceremony style.',
    price: 220,
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
  },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
]

const highlights = [
  { value: '12+', label: 'signature dishes' },
  { value: 'Fresh', label: 'local ingredients' },
  { value: 'Open', label: 'daily with warm hospitality' },
]

const hours = [
  { day: 'Monday - Friday', time: '11:30 AM - 10:30 PM' },
  { day: 'Saturday', time: '12:00 PM - 11:00 PM' },
  { day: 'Sunday', time: '12:00 PM - 9:30 PM' },
]

const placeholderImage =
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80'

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'Facebook', href: 'https://www.facebook.com' },
  { label: 'X', href: 'https://www.x.com' },
]

function App() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredMenu =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  const handleReservationClick = () => {
    window.alert(
      'Demo reservation only — this button is for preview purposes and is not connected to a live booking service yet.',
    )
  }

  const handleImageError = (event) => {
    event.target.src = placeholderImage
    event.target.onerror = null
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="Addis Restaurant home">
            <span className="brand-mark">A</span>
            <span className="brand-name">Addis Restaurant</span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <button type="button" className="primary-btn nav-btn" onClick={handleReservationClick}>
            Reserve Table
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Authentic Ethiopian flavour</p>
              <h1>Celebrate the warmth of Addis in every bite.</h1>
              <p className="lead">
                From slow-simmered stews to fresh-baked injera and signature coffees, Addis
                Restaurant brings joyful dining, rich tradition, and modern hospitality to the
                heart of Addis Ababa.
              </p>

              <div className="cta-row">
                <a href="#menu" className="primary-btn">
                  Explore Menu
                </a>
                <button type="button" className="secondary-btn" onClick={handleReservationClick}>
                  Book a Demo Table
                </button>
              </div>

              <div className="highlights" aria-label="Restaurant highlights">
                {highlights.map((item) => (
                  <div key={item.label} className="stat-card">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="image-card large-card">
                <img
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80"
                  alt="Traditional Ethiopian platter on a table"
                  onError={handleImageError}
                />
              </div>
              <div className="floating-note">
                <span className="note-label">Chef’s special</span>
                <strong>Berbere Feast</strong>
                <small>Freshly prepared daily</small>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div className="about-media">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                alt="Chef preparing a traditional Ethiopian meal"
                onError={handleImageError}
              />
            </div>

            <div className="about-copy">
              <p className="section-kicker">About us</p>
              <h2>Modern dining inspired by Ethiopian warmth and tradition.</h2>
              <p>
                Addis Restaurant blends rich culinary heritage with contemporary comfort — a place
                where family gatherings, business dinners, and slow celebrations come together over
                vibrant flavours and thoughtful hospitality.
              </p>
              <p>
                Our kitchen celebrates local ingredients, communal dining, and beautifully balanced
                plates designed for connection, comfort, and memorable evenings in Addis Ababa.
              </p>

              <div className="about-points">
                <div>
                  <strong>Seasonal menus</strong>
                  <span>Curated with local produce and premium ingredients.</span>
                </div>
                <div>
                  <strong>Traditional soul</strong>
                  <span>Modern presentation inspired by classic Ethiopian recipes.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="section menu-section">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">Our menu</p>
              <h2>Curated favourites from our kitchen.</h2>
            </div>

            <div className="category-tabs" aria-label="Menu categories">
              {categoryTabs.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={category === activeCategory ? 'tab active' : 'tab'}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={category === activeCategory}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="menu-grid">
              {filteredMenu.map((item) => (
                <article key={item.name} className="menu-card">
                  <img src={item.image} alt={item.name} onError={handleImageError} />
                  <div className="menu-card-body">
                    <div className="menu-card-top">
                      <h3>{item.name}</h3>
                      <span>{item.price.toLocaleString()} ETB</span>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">Gallery</p>
              <h2>A welcoming atmosphere for every occasion.</h2>
            </div>

            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <figure key={image} className={`gallery-item item-${index + 1}`}>
                  <img src={image} alt={`Addis Restaurant scene ${index + 1}`} onError={handleImageError} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-card info-card">
              <p className="section-kicker">Visit us</p>
              <h2>Make your next meal unforgettable.</h2>
              <div className="contact-list">
                <div>
                  <span>Location</span>
                  <strong>Bole Road, Addis Ababa, Ethiopia</strong>
                </div>
                <div>
                  <span>Phone</span>
                  <a href="tel:+251115551234">+251 11 555 1234</a>
                </div>
                <div>
                  <span>Email</span>
                  <a href="mailto:hello@addisrestaurant.com">hello@addisrestaurant.com</a>
                </div>
              </div>
            </div>

            <div className="contact-card schedule-card">
              <p className="section-kicker">Opening hours</p>
              <h3>Fresh meals, warm service.</h3>
              <ul>
                {hours.map((entry) => (
                  <li key={entry.day}>
                    <span>{entry.day}</span>
                    <strong>{entry.time}</strong>
                  </li>
                ))}
              </ul>
              <div className="action-stack">
                <button type="button" className="primary-btn" onClick={handleReservationClick}>
                  Reserve a Table
                </button>
                <a
                  href="https://maps.google.com/?q=Addis+Ababa+Ethiopia"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn map-link"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a href="#home" className="brand footer-brand">
              <span className="brand-mark">A</span>
              <span className="brand-name">Addis Restaurant</span>
            </a>
            <p>
              A modern Ethiopian dining experience shaped by welcoming service, vibrant flavours,
              and unforgettable evenings in Addis Ababa.
            </p>
          </div>

          <div className="footer-links">
            <h4>Explore</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Connect</h4>
            <ul>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Addis Restaurant</span>
          <span>Demo reservation flow only</span>
        </div>
      </footer>
    </div>
  )
}

export default App
