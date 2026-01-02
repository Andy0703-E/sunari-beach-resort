import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import heroBanner from '../assets/images/hero-banner.png';
import './Hero.css';

const Hero = () => {
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <section className="hero">
            <div className="hero__bg">
                <img src={heroBanner} alt="Sunari Beach Resort" />
                <div className="hero__overlay"></div>
            </div>

            <div className="hero__content">
                <motion.span
                    className="hero__badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    🌴 Kepulauan Selayar, Sulawesi Selatan
                </motion.span>

                <motion.h1
                    className="hero__title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Selamat Datang di
                    <span className="hero__title-highlight"> Sunari Beach Resort</span>
                </motion.h1>

                <motion.p
                    className="hero__subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Rasakan keindahan pantai berpasir putih, pemandangan sunset memukau,
                    dan kenyamanan bungalow tepi laut di surga tersembunyi Indonesia.
                </motion.p>

                <motion.div
                    className="hero__actions"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Link to="/contact" className="btn btn-accent hero__btn">
                        Reservasi Sekarang
                    </Link>
                    <Link to="/about" className="btn btn-secondary hero__btn hero__btn--outline">
                        Jelajahi Resort
                    </Link>
                </motion.div>

                <motion.div
                    className="hero__stats"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <div className="hero__stat">
                        <span className="hero__stat-number">4.8</span>
                        <span className="hero__stat-label">Rating ⭐</span>
                    </div>
                    <div className="hero__stat-divider"></div>
                    <div className="hero__stat">
                        <span className="hero__stat-number">500+</span>
                        <span className="hero__stat-label">Tamu Puas</span>
                    </div>
                    <div className="hero__stat-divider"></div>
                    <div className="hero__stat">
                        <span className="hero__stat-number">10+</span>
                        <span className="hero__stat-label">Bungalow</span>
                    </div>
                </motion.div>
            </div>

            <motion.button
                className="hero__scroll"
                onClick={scrollToContent}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                aria-label="Scroll down"
            >
                <FiChevronDown size={28} />
            </motion.button>
        </section>
    );
};

export default Hero;
