import './App.css';
import { useState } from 'react';
import CropDetails from './CropDetails';

const cropData = [
  {
    name: 'Wheat',
    scientificName: 'Triticum aestivum',
    season: 'Winter',
    climate: '10–25°C, 300–900 mm',
    soil: 'Loamy soil',
    growth: '5–6 months',
    sowing: 'October–November',
    harvest: 'March–April',
    pesticides: ['Use only after identifying the pest and checking local guidance'],
    fertilizers: ['Nitrogen', 'Phosphorus', 'Potassium'],
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Rice',
    scientificName: 'Oryza sativa',
    season: 'Monsoon',
    climate: 'Warm and humid',
    soil: 'Clayey soil',
    growth: '3–5 months',
    sowing: 'June–July',
    harvest: 'September–November',
    pesticides: ['Select treatment according to the identified pest'],
    fertilizers: ['Nitrogen', 'Phosphorus', 'Potassium'],
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Maize',
    scientificName: 'Zea mays',
    season: 'Kharif and Rabi',
    climate: 'Warm climate',
    soil: 'Well-drained loamy soil',
    growth: '3–4 months',
    sowing: 'Depends on region and season',
    harvest: 'According to crop maturity',
    pesticides: ['Identify the pest before choosing a treatment'],
    fertilizers: ['Nitrogen', 'Phosphorus', 'Potassium'],
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Soybean',
    scientificName: 'Glycine max',
    season: 'Kharif',
    climate: 'Warm with moderate rainfall',
    soil: 'Well-drained loamy soil',
    growth: '3–5 months',
    sowing: 'June–July',
    harvest: 'September–October',
    pesticides: ['Use locally approved pest management recommendations'],
    fertilizers: ['Nutrients based on soil testing'],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Sugarcane',
    scientificName: 'Saccharum officinarum',
    season: 'Region dependent',
    climate: 'Warm and humid',
    soil: 'Fertile, well-drained soil',
    growth: '10–18 months',
    sowing: 'Depends on regional planting season',
    harvest: 'At crop maturity',
    pesticides: ['Choose treatment based on the identified pest'],
    fertilizers: ['Nutrients based on soil testing'],
    image: 'https://images.unsplash.com/photo-1576068589074-0d2b2f5a2c3b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Potato',
    scientificName: 'Solanum tuberosum',
    season: 'Rabi in many Indian regions',
    climate: 'Cool climate',
    soil: 'Loose, well-drained soil',
    growth: '3–4 months',
    sowing: 'Region dependent',
    harvest: 'When tubers mature',
    pesticides: ['Identify the disease or pest before treatment'],
    fertilizers: ['Nutrients based on soil testing'],
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80',
  },
];

const productData = [
  {
    id: 1,
    name: 'Green Kaddu',
    category: 'Fresh Vegetables',
    price: 123,
    description: 'Fresh green pumpkin for everyday cooking.',
    image:
      'https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Organic',
    category: 'Organic',
    price: 123,
    description: 'Green kaddu from our organic product selection.',
    image:
      'https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Organic Products',
    category: 'Organic Products',
    price: 123,
    description: 'A selection of fresh produce for everyday use.',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
  },
];

function App() {
  const [page, setPage] = useState('website');
  const [role, setRole] = useState('user');
  const [signup, setSignup] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);

  const [location, setLocation] = useState('Pālam');
  const [weatherLocation, setWeatherLocation] = useState('Pālam, IN');
  const [searched, setSearched] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [bookings, setBookings] = useState([]);

  const [farms, setFarms] = useState([]);
  const [editingFarm, setEditingFarm] = useState(null);
  const [farmName, setFarmName] = useState('');
  const [farmLocation, setFarmLocation] = useState('');
  const [farmArea, setFarmArea] = useState('');
  const [cropType, setCropType] = useState('');
  const [farmState, setFarmState] = useState('');
  const [establishedDate, setEstablishedDate] = useState('');

  const [crops, setCrops] = useState([]);
  const [editingCrop, setEditingCrop] = useState(null);
  const [cropName, setCropName] = useState('');
  const [cropVariety, setCropVariety] = useState('');
  const [cropQuantity, setCropQuantity] = useState('');
  const [plantedDate, setPlantedDate] = useState('');
  const [harvestDate, setHarvestDate] = useState('');

  const convenienceFee = 45;

  const totalAmount = selectedProduct
    ? selectedProduct.price * quantity + convenienceFee
    : 0;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const openLogin = (selectedRole) => {
    setRole(selectedRole);
    setSignup(false);
    setPage('login');
    scrollToTop();
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === 'user') {
      alert('User Login Successful!');
      setSelectedCrop(null);
      setPage('weather');
      scrollToTop();
    } else {
      alert('Admin Login Successful!');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    alert('Account Created Successfully!');
    setSelectedCrop(null);
    setPage('weather');
    scrollToTop();
  };

  const handleWeatherSearch = (e) => {
    e.preventDefault();

    const city = location.trim();

    if (!city) {
      alert('Please enter a location.');
      return;
    }

    setWeatherLocation(`${city}, IN`);
    setSearched(true);
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setPage('booking');
    scrollToTop();
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (!selectedProduct) {
      alert('Please select a product first.');
      return;
    }

    const form = e.currentTarget;

    const newBooking = {
      id: Date.now(),
      product: selectedProduct,
      name: form.elements['booking-name'].value.trim(),
      email: form.elements['booking-email'].value.trim(),
      phone: form.elements['booking-phone'].value.trim(),
      quantity,
      total: totalAmount,
    };

    setBookings((previous) => [...previous, newBooking]);

    alert('Booking Successful!');

    setSelectedProduct(null);
    setQuantity(1);
    setPage('mybookings');
    scrollToTop();
  };

  const openAddFarm = () => {
    setEditingFarm(null);
    setFarmName('');
    setFarmLocation('');
    setFarmArea('');
    setFarmState('');
    setCropType('');
    setEstablishedDate('');
    setPage('farm-form');
    scrollToTop();
  };

  const saveFarm = (e) => {
    e.preventDefault();

    const farmData = {
      id: editingFarm ? editingFarm.id : Date.now(),
      name: farmName.trim(),
      location: farmLocation.trim(),
      area: farmArea,
      state: farmState.trim(),
      cropType: cropType.trim(),
      establishedDate,
      createdAt: editingFarm
        ? editingFarm.createdAt
        : new Date().toLocaleDateString('en-IN'),
    };

    if (editingFarm) {
      setFarms((previous) =>
        previous.map((farm) =>
          farm.id === editingFarm.id ? farmData : farm
        )
      );
      alert('Farm updated successfully!');
    } else {
      setFarms((previous) => [...previous, farmData]);
      alert('Farm added successfully!');
    }

    setEditingFarm(null);
    setPage('farm-list');
    scrollToTop();
  };

  const editFarm = (farm) => {
    setEditingFarm(farm);
    setFarmName(farm.name);
    setFarmLocation(farm.location);
    setFarmArea(farm.area);
    setCropType(farm.cropType);
    setFarmState(farm.state);
    setEstablishedDate(farm.establishedDate);
    setPage('farm-form');
    scrollToTop();
  };

  const deleteFarm = (id) => {
    if (window.confirm('Are you sure you want to delete this farm?')) {
      setFarms((previous) => previous.filter((farm) => farm.id !== id));
    }
  };

  const openAddCrop = () => {
    setEditingCrop(null);
    setCropName('');
    setCropVariety('');
    setCropQuantity('');
    setPlantedDate('');
    setHarvestDate('');
    setPage('crop-form');
    scrollToTop();
  };

  const saveCrop = (e) => {
    e.preventDefault();

    const cropDataItem = {
      id: editingCrop ? editingCrop.id : Date.now(),
      name: cropName.trim(),
      variety: cropVariety.trim(),
      quantity: cropQuantity.trim(),
      plantedDate,
      harvestDate,
    };

    if (editingCrop) {
      setCrops((previous) =>
        previous.map((crop) =>
          crop.id === editingCrop.id ? cropDataItem : crop
        )
      );
      alert('Crop updated successfully!');
    } else {
      setCrops((previous) => [...previous, cropDataItem]);
      alert('Crop added successfully!');
    }

    setEditingCrop(null);
    setPage('crop-list');
    scrollToTop();
  };

  const editCrop = (crop) => {
    setEditingCrop(crop);
    setCropName(crop.name);
    setCropVariety(crop.variety);
    setCropQuantity(crop.quantity);
    setPlantedDate(crop.plantedDate);
    setHarvestDate(crop.harvestDate);
    setPage('crop-form');
    scrollToTop();
  };

  const deleteCrop = (id) => {
    if (window.confirm('Are you sure you want to delete this crop?')) {
      setCrops((previous) => previous.filter((crop) => crop.id !== id));
    }
  };

  return (
    <div className="app">
      {page === 'website' ? (
        <>
          <nav className="navbar">
            <h2 className="logo">Agri-Tech</h2>

            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#services">Services</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>

              <button
                className="nav-btn"
                onClick={() => openLogin('user')}
              >
                Login
              </button>
            </div>
          </nav>

          <section className="hero" id="home">
            <div className="hero-content">
              <h1>Innovative Agriculture Solutions</h1>

              <p className="hero-text">
                Empowering farmers with technology to enhance productivity
                and sustainable farming.
              </p>

              <div className="hero-buttons">
                <button
                  onClick={() =>
                    document.getElementById('about')?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }
                >
                  Get Started
                </button>
              </div>
            </div>
          </section>

          <section className="about-section" id="about">
            <div className="section-heading">
              <p>ABOUT US</p>
              <h2>Welcome to Agro Tech</h2>
              <span>
                We support farmers through innovative technology and
                sustainable farming solutions.
              </span>
            </div>

            <div className="about-grid">
              <article className="about-card">
                <div className="feature-icon">◷</div>
                <div>
                  <h3>Our Mission</h3>
                  <p>Enhancing farming productivity through technology.</p>
                </div>
              </article>

              <article className="about-card">
                <div className="feature-icon">▣</div>
                <div>
                  <h3>Our Vision</h3>
                  <p>Helping farmers and agribusinesses grow.</p>
                </div>
              </article>

              <article className="about-card">
                <div className="feature-icon">♧</div>
                <div>
                  <h3>Our Values</h3>
                  <p>Innovation, sustainability, and collaboration.</p>
                </div>
              </article>

              <article className="about-card">
                <div className="feature-icon">≡</div>
                <div>
                  <h3>Our Impact</h3>
                  <p>Supporting better agricultural decisions.</p>
                </div>
              </article>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <h2>10K+</h2>
                <p>Farmers Empowered</p>
              </div>
              <div className="stat-card">
                <h2>30%</h2>
                <p>Yield Improvement</p>
              </div>
              <div className="stat-card">
                <h2>50%</h2>
                <p>Water Savings</p>
              </div>
              <div className="stat-card">
                <h2>100+</h2>
                <p>Innovations</p>
              </div>
            </div>
          </section>

          <section className="features" id="features">
            <div className="section-heading">
              <h2>OUR FEATURES</h2>
            </div>

            <div className="feature-grid">
              <article className="feature-card">
                <div className="feature-icon">🌱</div>
                <h3>Crop Management</h3>
                <p>Track crops, sowing dates, and harvests.</p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">🚜</div>
                <h3>Farm Management</h3>
                <p>Manage farm operations and daily activities.</p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">💧</div>
                <h3>Smart Irrigation</h3>
                <p>Make better use of water resources.</p>
              </article>
            </div>
          </section>

          <section className="services-section" id="services">
            <div className="section-heading">
              <h2>Our Services</h2>
            </div>

            <div className="feature-grid">
              <article className="feature-card">
                <div className="feature-icon">👩‍🌾</div>
                <h3>Consultancy</h3>
                <p>Get guidance for better farming practices.</p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">🧪</div>
                <h3>Soil Testing</h3>
                <p>Understand soil health and nutrient needs.</p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">🌾</div>
                <h3>Market Access</h3>
                <p>Explore agricultural selling opportunities.</p>
              </article>
            </div>
          </section>

          <section className="testimonials" id="testimonials">
            <h2>What Our Clients Say</h2>

            <div className="testimonial-grid">
              <div className="testimonial-card">
                <p>“The consultancy service helped improve my farming.”</p>
                <h3>John Doe</h3>
              </div>

              <div className="testimonial-card">
                <p>“Soil testing helped me understand soil quality.”</p>
                <h3>Jane Smith</h3>
              </div>

              <div className="testimonial-card">
                <p>“Market access helped me explore selling opportunities.”</p>
                <h3>Alice Johnson</h3>
              </div>

              <div className="testimonial-card">
                <p>“A useful platform for farm management.”</p>
                <h3>Robert Brown</h3>
              </div>
            </div>
          </section>

          <footer id="contact">
            <p>© 2026 Agri-Tech. All rights reserved.</p>

            <div className="footer-links">
              <span>Privacy Policy</span>
              <span>Terms of Services</span>
              <span>Contact Us</span>
            </div>
          </footer>
        </>
      ) : page === 'products' ? (
        <div className="agri-page">
          <nav className="agri-navbar">
            <h2>Agri-Tech</h2>

            <div className="agri-nav-links">
              <button onClick={() => setPage('website')}>Home</button>
              <button onClick={() => setPage('weather')}>Weather</button>
              <button onClick={() => setPage('products')}>Products</button>
              <button onClick={() => setPage('crops-menu')}>Crops</button>
              <button onClick={() => setPage('mybookings')}>MyBookings</button>
              <button onClick={() => setPage('website')}>Logout</button>
            </div>
          </nav>

          <section className="products-page">
            <h1>Products List</h1>
            <p className="products-subtitle">
              Explore our fresh and organic products.
            </p>

            <div className="products-grid">
              {productData.map((product) => (
                <article className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name} />

                  <div className="product-card-content">
                    <h2>{product.name}</h2>
                    <p className="product-category">{product.category}</p>
                    <h3>₹{product.price}</h3>
                    <p>{product.description}</p>

                    <button
                      className="buy-now-button"
                      onClick={() => handleBuyNow(product)}
                    >
                      Buy Now
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      ) : page === 'booking' ? (
        <div className="booking-page">
          <div className="booking-card">
            <button
              type="button"
              className="back-to-products"
              onClick={() => {
                setPage('products');
                scrollToTop();
              }}
            >
              ← Back to Products
            </button>

            <h1>Booking Form</h1>

            {selectedProduct && (
              <div className="booking-product">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                />
                <div>
                  <h2>{selectedProduct.name}</h2>
                  <p>{selectedProduct.category}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleBooking}>
              <label htmlFor="booking-name">Name</label>
              <input
                id="booking-name"
                name="booking-name"
                type="text"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="booking-email">Email</label>
              <input
                id="booking-email"
                name="booking-email"
                type="email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="booking-phone">Phone Number</label>
              <input
                id="booking-phone"
                name="booking-phone"
                type="tel"
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                title="Enter a 10-digit phone number"
                required
              />

              <div className="quantity-row">
                <span>Quantity</span>

                <div className="quantity-controls">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((current) => Math.max(1, current - 1))
                    }
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <strong>{quantity}</strong>

                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {selectedProduct && (
                <>
                  <div className="price-row">
                    <span>Product Price</span>
                    <strong>₹{selectedProduct.price * quantity}</strong>
                  </div>

                  <div className="price-row">
                    <span>Convenience Fee</span>
                    <strong>₹{convenienceFee}</strong>
                  </div>

                  <div className="price-row total-row">
                    <span>Total Amount</span>
                    <strong>₹{totalAmount}</strong>
                  </div>
                </>
              )}

              <button className="book-button" type="submit">
                Book
              </button>
            </form>
          </div>
        </div>
      ) : page === 'mybookings' ? (
        <div className="agri-page">
          <nav className="agri-navbar">
            <h2>Agri-Tech</h2>

            <div className="agri-nav-links">
              <button onClick={() => setPage('website')}>Home</button>
              <button onClick={() => setPage('products')}>Products</button>
              <button onClick={() => setPage('weather')}>Weather</button>
              <button onClick={() => setPage('farms-menu')}>Farms</button>
              <button onClick={() => setPage('mybookings')}>MyBookings</button>
              <button onClick={() => setPage('website')}>Logout</button>
            </div>
          </nav>

          <section className="bookings-page">
            <div className="bookings-heading">
              <h1>My Bookings</h1>

              <button
                className="add-booking-button"
                onClick={() => {
                  setSelectedProduct(null);
                  setQuantity(1);
                  setPage('products');
                  scrollToTop();
                }}
              >
                + Add New Booking
              </button>
            </div>

            <div className="booking-form-card">
              <h2>Booking Form</h2>

              <form onSubmit={handleBooking}>
                <label htmlFor="booking-product">Select Product</label>
                <select
                  id="booking-product"
                  value={selectedProduct?.id || ''}
                  onChange={(e) => {
                    const product = productData.find(
                      (item) => item.id === Number(e.target.value)
                    );
                    setSelectedProduct(product || null);
                    setQuantity(1);
                  }}
                  required
                >
                  <option value="">Choose a product</option>
                  {productData.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name} — ₹{product.price}
                    </option>
                  ))}
                </select>

                <label htmlFor="booking-name">Full Name</label>
                <input
                  id="booking-name"
                  name="booking-name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />

                <label htmlFor="booking-email">Email</label>
                <input
                  id="booking-email"
                  name="booking-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />

                <label htmlFor="booking-phone">Phone Number</label>
                <input
                  id="booking-phone"
                  name="booking-phone"
                  type="tel"
                  pattern="[0-9]{10}"
                  placeholder="Enter 10-digit phone number"
                  title="Enter a 10-digit phone number"
                  required
                />

                {selectedProduct && (
                  <div className="price-row total-row">
                    <span>Total Amount (including ₹45 fee)</span>
                    <strong>₹{totalAmount}</strong>
                  </div>
                )}

                <div className="booking-form-actions">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProduct(null);
                      setPage('products');
                      scrollToTop();
                    }}
                  >
                    Cancel
                  </button>

                  <button type="submit">Confirm Booking</button>
                </div>
              </form>
            </div>

            <h2>Booking History</h2>

            {bookings.length === 0 ? (
              <p>No bookings found.</p>
            ) : (
              bookings.map((booking) => (
                <div className="booking-history-card" key={booking.id}>
                  <div>
                    <span>Booking ID</span>
                    <strong>{String(booking.id).slice(-8)}</strong>
                  </div>

                  <div>
                    <span>Product</span>
                    <strong>
                      {booking.product?.name || 'Product not selected'}
                    </strong>
                  </div>

                  <div>
                    <span>Date</span>
                    <strong>
                      {new Date(booking.id).toLocaleDateString('en-IN')}
                    </strong>
                  </div>

                  <div>
                    <span>Quantity</span>
                    <strong>{booking.quantity}</strong>
                  </div>

                  <div>
                    <span>Amount</span>
                    <strong>₹{booking.total}</strong>
                  </div>

                  <div>
                    <span>Status</span>
                    <strong className="booking-status">Completed</strong>
                  </div>

                  <div className="booking-customer">
                    <span>Customer: {booking.name}</span>
                    <span>Email: {booking.email}</span>
                    <span>Phone: {booking.phone}</span>
                  </div>
                </div>
              ))
            )}
          </section>
        </div>
      ) : page === 'farms-menu' ? (
        <div className="agri-page">
          <nav className="agri-navbar">
            <h2>Agri-Tech</h2>
            <div className="agri-nav-links">
              <button onClick={() => setPage('website')}>Home</button>
              <button onClick={() => setPage('products')}>Products</button>
              <button onClick={() => setPage('crops-menu')}>Crops</button>
              <button onClick={() => setPage('mybookings')}>MyBookings</button>
            </div>
          </nav>

          <section className="farm-options">
            <h1>Farms</h1>
            <div className="farm-option-buttons">
              <button onClick={() => setPage('farm-list')}>Get Farm</button>
              <button onClick={openAddFarm}>Add Farm</button>
            </div>
          </section>
        </div>
      ) : page === 'farm-list' ? (
        <div className="agri-page">
          <nav className="agri-navbar">
            <h2>Agri-Tech</h2>
            <div className="agri-nav-links">
              <button onClick={() => setPage('website')}>Home</button>
              <button onClick={() => setPage('products')}>Products</button>
              <button onClick={() => setPage('crops-menu')}>Crops</button>
              <button onClick={() => setPage('farms-menu')}>Farms</button>
              <button onClick={() => setPage('mybookings')}>MyBookings</button>
            </div>
          </nav>

          <section className="farm-list-page">
            <div className="farm-list-heading">
              <h1>Farm List</h1>
              <button onClick={openAddFarm}>+ Add New Farm</button>
            </div>

            <div className="farm-table-wrapper">
              <table className="farm-table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Area Size</th>
                    <th>Crop Type</th>
                    <th>Created At</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {farms.length === 0 ? (
                    <tr>
                      <td colSpan="7">No farms found. Add your first farm.</td>
                    </tr>
                  ) : (
                    farms.map((farm, index) => (
                      <tr key={farm.id}>
                        <td>{index + 1}</td>
                        <td>{farm.name}</td>
                        <td>
                          {farm.location}, {farm.state}
                        </td>
                        <td>{farm.area} acres</td>
                        <td>{farm.cropType}</td>
                        <td>{farm.createdAt}</td>
                        <td>
                          <button onClick={() => editFarm(farm)}>Edit</button>
                          <button onClick={() => deleteFarm(farm.id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      ) : page === 'farm-form' ? (
        <div className="agri-page">
          <nav className="agri-navbar">
            <h2>Agri-Tech</h2>
            <div className="agri-nav-links">
              <button onClick={() => setPage('farm-list')}>Farm List</button>
            </div>
          </nav>

          <section className="farm-form-page">
            <h1>{editingFarm ? 'Edit Farm' : 'Add New Farm'}</h1>

            <form onSubmit={saveFarm} className="farm-form">
              <label htmlFor="farm-name">Farm Name</label>
              <input
                id="farm-name"
                value={farmName}
                onChange={(e) => setFarmName(e.target.value)}
                placeholder="Enter farm name"
                required
              />

              <label htmlFor="farm-location">Location</label>
              <input
                id="farm-location"
                value={farmLocation}
                onChange={(e) => setFarmLocation(e.target.value)}
                placeholder="Enter location"
                required
              />

              <label htmlFor="farm-area">Area Size (acres)</label>
              <input
                id="farm-area"
                type="number"
                min="0.01"
                step="any"
                value={farmArea}
                onChange={(e) => setFarmArea(e.target.value)}
                placeholder="Area in acres"
                required
              />

              <label htmlFor="farm-crop-type">Crop Type</label>
              <input
                id="farm-crop-type"
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
                placeholder="e.g. Wheat, Rice"
                required
              />

              <label htmlFor="farm-state">State</label>
              <input
                id="farm-state"
                value={farmState}
                onChange={(e) => setFarmState(e.target.value)}
                placeholder="Enter state"
                required
              />

              <label htmlFor="farm-established-date">Established Date</label>
              <input
                id="farm-established-date"
                type="date"
                value={establishedDate}
                onChange={(e) => setEstablishedDate(e.target.value)}
                required
              />

              <div className="farm-form-actions">
                <button type="submit" className="farm-register-btn">
                  {editingFarm ? 'Update Farm' : 'Register Farm'}
                </button>

                <button
                  type="button"
                  className="farm-cancel-btn"
                  onClick={() => {
                    setEditingFarm(null);
                    setPage('farm-list');
                    scrollToTop();
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </div>
      ) : page === 'crops-menu' ? (
        <div className="agri-page">
          <nav className="agri-navbar">
            <h2>Agri-Tech</h2>
            <div className="agri-nav-links">
              <button onClick={() => setPage('website')}>Home</button>
              <button onClick={() => setPage('weather')}>Back</button>
            </div>
          </nav>

          <section className="farm-options">
            <h1>Crop Management</h1>
            <p>Manage your crops easily</p>

            <div className="farm-option-buttons">
              <button onClick={() => setPage('crop-list')}>Get Crops</button>
              <button onClick={openAddCrop}>Add Crop</button>
            </div>
          </section>
        </div>
      ) : page === 'crop-list' ? (
        <div className="agri-page">
          <nav className="agri-navbar">
            <h2>Agri-Tech</h2>
            <div className="agri-nav-links">
              <button onClick={() => setPage('crops-menu')}>Back</button>
              <button onClick={() => setPage('website')}>Home</button>
              <button onClick={() => setPage('farms-menu')}>Farms</button>
            </div>
          </nav>

          <section className="farm-list-page">
            <div className="farm-list-heading">
              <h1>Crop List</h1>
              <button className="crop-add-btn" onClick={openAddCrop}>
                + Add Crop
              </button>
            </div>

            <div className="farm-table-wrapper">
              <table className="farm-table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Variety</th>
                    <th>Quantity</th>
                    <th>Planted Date</th>
                    <th>Estimated Harvest Date</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {crops.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="crop-empty">
                        No crops added yet. Click Add Crop to get started.
                      </td>
                    </tr>
                  ) : (
                    crops.map((crop, index) => (
                      <tr key={crop.id}>
                        <td>{index + 1}</td>
                        <td>{crop.name}</td>
                        <td>{crop.variety}</td>
                        <td>{crop.quantity}</td>
                        <td>{crop.plantedDate}</td>
                        <td>{crop.harvestDate}</td>
                        <td>
                          <div className="crop-actions">
                            <button
                              className="crop-edit-btn"
                              onClick={() => editCrop(crop)}
                            >
                              Edit
                            </button>

                            <button
                              className="crop-delete-btn"
                              onClick={() => deleteCrop(crop.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      ) : page === 'crop-form' ? (
        <div className="agri-page">
          <nav className="agri-navbar">
            <h2>Agri-Tech</h2>
            <div className="agri-nav-links">
              <button onClick={() => setPage('crop-list')}>Crop List</button>
            </div>
          </nav>

          <section className="crop-form-page">
            <h1>{editingCrop ? 'Edit Crop' : 'Add New Crop'}</h1>

            <form className="crop-form" onSubmit={saveCrop}>
              <label htmlFor="crop-name">Crop Name</label>
              <input
                id="crop-name"
                value={cropName}
                onChange={(e) => setCropName(e.target.value)}
                placeholder="Enter crop name"
                required
              />

              <label htmlFor="crop-variety">Variety</label>
              <input
                id="crop-variety"
                value={cropVariety}
                onChange={(e) => setCropVariety(e.target.value)}
                placeholder="Enter variety"
                required
              />

              <label htmlFor="crop-quantity">Quantity</label>
              <input
                id="crop-quantity"
                value={cropQuantity}
                onChange={(e) => setCropQuantity(e.target.value)}
                placeholder="e.g. 20 kg"
                required
              />

              <label htmlFor="planted-date">Planted Date</label>
              <input
                id="planted-date"
                type="date"
                value={plantedDate}
                onChange={(e) => setPlantedDate(e.target.value)}
                required
              />

              <label htmlFor="harvest-date">Estimated Harvest Date</label>
              <input
                id="harvest-date"
                type="date"
                value={harvestDate}
                onChange={(e) => setHarvestDate(e.target.value)}
                required
              />

              <div className="crop-form-actions">
                <button type="submit" className="crop-save-btn">
                  {editingCrop ? 'Update Crop' : 'Add Crop'}
                </button>

                <button
                  type="button"
                  className="crop-cancel-btn"
                  onClick={() => {
                    setEditingCrop(null);
                    setPage('crop-list');
                    scrollToTop();
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </div>
      ) : page === 'weather' ? (
        selectedCrop ? (
          <CropDetails
            crop={selectedCrop}
            onBack={() => setSelectedCrop(null)}
          />
        ) : (
          <div className="agri-page">
            <nav className="agri-navbar">
              <h2>Agri-Tech</h2>

              <div className="agri-nav-links">
                <button onClick={() => setPage('website')}>Home</button>

                <button
                  onClick={() => {
                    setPage('products');
                    scrollToTop();
                  }}
                >
                  Products
                </button>

                <button onClick={() => setPage('farms-menu')}>Farms</button>

                <button onClick={() => setPage('crops-menu')}>Crops</button>

                <button onClick={() => setPage('mybookings')}>
                  MyBookings
                </button>

                <button
                  onClick={() => {
                    setSelectedCrop(null);
                    setPage('website');
                    scrollToTop();
                  }}
                >
                  Logout
                </button>
              </div>
            </nav>

            <section className="forecast-section">
              <h1>Weather Forecast</h1>

              <p className="current-location">
                Current Location: {location || 'Enter your location'}
              </p>

              <form className="weather-search" onSubmit={handleWeatherSearch}>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your city"
                />

                <button type="submit">Search</button>
              </form>

              {searched && (
                <div className="weather-card">
                  <div className="weather-card-heading">
                    <h2>{weatherLocation}</h2>
                    <p>☁️ Broken Clouds</p>
                  </div>

                  <div className="weather-metrics">
                    <div className="weather-metric">
                      <span>Temperature</span>
                      <strong>35.2°C</strong>
                    </div>

                    <div className="weather-metric">
                      <span>Humidity</span>
                      <strong>51%</strong>
                    </div>

                    <div className="weather-metric">
                      <span>Wind Speed</span>
                      <strong>4.76 m/s</strong>
                    </div>

                    <div className="weather-metric">
                      <span>Pressure</span>
                      <strong>996 hPa</strong>
                    </div>
                  </div>

                  <p className="weather-note">
                    Demo weather values — live readings are not connected yet.
                  </p>
                </div>
              )}
            </section>

            <section className="crop-section" id="crop-list">
              <h1>Agricultural Information</h1>

              <div className="crop-grid">
                {cropData.map((crop) => (
                  <article className="crop-card" key={crop.name}>
                    <img src={crop.image} alt={crop.name} />

                    <div className="crop-card-content">
                      <h2>{crop.name}</h2>

                      <button onClick={() => setSelectedCrop(crop)}>
                        Learn More <span>›</span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        )
      ) : (
        <div className="login-screen">
          <nav className="login-navbar">
            <h2>Agri-Tech</h2>

            <div>
              <button
                onClick={() => setPage('website')}
                className="login-nav-button"
              >
                Home
              </button>

              <button
                onClick={() => openLogin('user')}
                className={
                  role === 'user'
                    ? 'login-nav-button active'
                    : 'login-nav-button'
                }
              >
                User Login
              </button>

              <button
                onClick={() => openLogin('admin')}
                className={
                  role === 'admin'
                    ? 'login-nav-button active'
                    : 'login-nav-button'
                }
              >
                Admin Login
              </button>
            </div>
          </nav>

          <main className="login-main">
            <div className="login-card">
              <div className="login-form">
                <h1>
                  {signup
                    ? role === 'admin'
                      ? 'Create Admin Account'
                      : 'Create User Account'
                    : role === 'admin'
                      ? 'Admin Login'
                      : 'User Login'}
                </h1>

                {signup ? (
                  <form onSubmit={handleSignup}>
                    <label htmlFor="signup-name">Full Name</label>
                    <input
                      id="signup-name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />

                    <label htmlFor="signup-email">Email address</label>
                    <input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />

                    <label htmlFor="signup-password">Password</label>
                    <input
                      id="signup-password"
                      type="password"
                      placeholder="Create a password"
                      minLength={6}
                      required
                    />

                    <button className="submit-login" type="submit">
                      Create Account
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleLogin}>
                    <label htmlFor="login-email">Email address</label>
                    <input
                      id="login-email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />

                    <label htmlFor="login-password">Password</label>
                    <input
                      id="login-password"
                      type="password"
                      placeholder="Enter your password"
                      required
                    />

                    <button className="submit-login" type="submit">
                      Log in
                    </button>
                  </form>
                )}

                <p className="signup-text">
                  {signup
                    ? 'Already have an account? '
                    : "Don't have an account? "}

                  <button
                    type="button"
                    className="signup-link"
                    onClick={() => setSignup(!signup)}
                  >
                    {signup
                      ? 'Log in'
                      : role === 'admin'
                        ? 'Create Admin Account'
                        : 'Create User Account'}
                  </button>
                </p>
              </div>

              <div className="login-image">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
                  alt="Agricultural field"
                />
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;