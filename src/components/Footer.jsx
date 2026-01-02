import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiInstagram, FiFacebook } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__wave">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            <div className="footer__content">
                <div className="container">
                    <div className="footer__grid">
                        {/* Brand */}
                        <div className="footer__brand">
                            <h3 className="footer__logo">
                                <span>🏝️</span> Sunari Beach Resort
                            </h3>
                            <p className="footer__description">
                                Destinasi liburan pantai terbaik di Kepulauan Selayar. Nikmati keindahan alam,
                                ketenangan, dan keramahan khas Sulawesi Selatan.
                            </p>
                            <div className="footer__social">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FiInstagram />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <FiFacebook />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer__links">
                            <h4>Menu</h4>
                            <ul>
                                <li><Link to="/">Beranda</Link></li>
                                <li><Link to="/about">Tentang Kami</Link></li>
                                <li><Link to="/facilities">Fasilitas</Link></li>
                                <li><Link to="/gallery">Galeri</Link></li>
                                <li><Link to="/packages">Paket Wisata</Link></li>
                                <li><Link to="/contact">Kontak</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer__contact">
                            <h4>Kontak</h4>
                            <ul>
                                <li>
                                    <FiMapPin />
                                    <span>Desa Patikarya, Kec. Bontosikuyu, Kepulauan Selayar, Sulawesi Selatan</span>
                                </li>
                                <li>
                                    <FiPhone />
                                    <a href="tel:+6282189033110">+62 821-8903-3110</a>
                                </li>
                                <li>
                                    <FiMail />
                                    <a href="mailto:info@sunaribeach.com">info@sunaribeach.com</a>
                                </li>
                            </ul>
                        </div>

                        {/* Map Preview */}
                        <div className="footer__map">
                            <h4>Lokasi Kami</h4>
                            <div className="footer__map-frame">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1234567890!2d120.456!3d-6.123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDcnMjIuOCJTIDEyMMKwMjcnMjEuNiJF!5e0!3m2!1sen!2sid!4v1234567890"
                                    width="100%"
                                    height="150"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Sunari Beach Resort Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <p>&copy; {currentYear} Sunari Beach Resort Selayar. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
