import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/about', label: 'Tentang' },
    { path: '/facilities', label: 'Fasilitas' },
    { path: '/gallery', label: 'Galeri' },
    { path: '/packages', label: 'Paket' },
    { path: '/contact', label: 'Kontak' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="navbar__container">
                <Link to="/" className="navbar__logo">
                    <span className="navbar__logo-icon">🏝️</span>
                    <span className="navbar__logo-text">Sunari Beach</span>
                </Link>

                {/* Desktop Nav */}
                <ul className="navbar__links">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="navbar__actions">
                    <a href="tel:+6282189033110" className="navbar__phone">
                        <FiPhone />
                        <span>+62 821-8903-3110</span>
                    </a>
                    <Link to="/contact" className="btn btn-accent navbar__cta">
                        Reservasi
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="navbar__toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="navbar__mobile"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="navbar__mobile-links">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                        <Link to="/contact" className="btn btn-accent navbar__mobile-cta">
                            Reservasi Sekarang
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
