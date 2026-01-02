import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSun, FiDroplet, FiHome, FiArrowRight } from 'react-icons/fi';
import Hero from '../components/Hero';
import SectionWrapper from '../components/SectionWrapper';
import sunsetImg from '../assets/images/sunset-beach.png';
import snorkelingImg from '../assets/images/snorkeling-activity.png';
import bungalowImg from '../assets/images/bungalow-room.png';
import './Home.css';

const highlights = [
    {
        icon: <FiSun />,
        title: 'Sunset Memukau',
        description: 'Nikmati pemandangan matahari terbenam yang spektakuler dari pantai Sunari.',
        image: sunsetImg,
    },
    {
        icon: <FiDroplet />,
        title: 'Snorkeling',
        description: 'Jelajahi keindahan bawah laut Selayar dengan terumbu karang yang masih alami.',
        image: snorkelingImg,
    },
    {
        icon: <FiHome />,
        title: 'Bungalow Nyaman',
        description: 'Penginapan tepi pantai dengan fasilitas lengkap dan pemandangan laut langsung.',
        image: bungalowImg,
    },
];

const Home = () => {
    return (
        <main className="home">
            <Hero />

            {/* Highlights Section */}
            <section className="home__highlights section">
                <div className="container">
                    <SectionWrapper>
                        <div className="section-header">
                            <span className="section-badge">Mengapa Sunari Beach?</span>
                            <h2>Pengalaman Liburan <span className="text-gradient">Tak Terlupakan</span></h2>
                            <p>Temukan keajaiban alam Kepulauan Selayar di resort tepi pantai yang menawarkan ketenangan dan petualangan sekaligus.</p>
                        </div>
                    </SectionWrapper>

                    <div className="highlights__grid">
                        {highlights.map((item, index) => (
                            <SectionWrapper key={index} delay={index * 0.15}>
                                <motion.div
                                    className="highlight-card"
                                    whileHover={{ y: -10 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <div className="highlight-card__image">
                                        <img src={item.image} alt={item.title} />
                                        <div className="highlight-card__icon">{item.icon}</div>
                                    </div>
                                    <div className="highlight-card__content">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </motion.div>
                            </SectionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="home__about section">
                <div className="container">
                    <div className="about-preview">
                        <SectionWrapper className="about-preview__content">
                            <span className="section-badge">Tentang Kami</span>
                            <h2>Surga Tersembunyi di <span className="text-gradient">Kepulauan Selayar</span></h2>
                            <p>
                                Sunari Beach Resort Selayar adalah destinasi liburan di pesisir pantai Sunari,
                                Kabupaten Kepulauan Selayar. Terletak di Desa Patikarya, Kecamatan Bontosikuyu,
                                kami menawarkan fasilitas penginapan tepi pantai dengan panorama alam yang asri.
                            </p>
                            <p>
                                Dengan hamparan pasir putih, air laut jernih, dan sunset yang memukau,
                                Sunari Beach menjadi favorit wisatawan lokal dan internasional.
                            </p>
                            <Link to="/about" className="btn btn-primary">
                                Selengkapnya <FiArrowRight />
                            </Link>
                        </SectionWrapper>
                        <SectionWrapper className="about-preview__image" delay={0.2}>
                            <div className="about-preview__img-wrapper">
                                <img src={sunsetImg} alt="Sunset di Pantai Sunari" />
                                <div className="about-preview__badge">
                                    <span className="about-preview__badge-number">10+</span>
                                    <span className="about-preview__badge-text">Tahun Melayani</span>
                                </div>
                            </div>
                        </SectionWrapper>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="home__cta">
                <div className="container">
                    <SectionWrapper className="cta-box">
                        <h2>Siap untuk Liburan Impian?</h2>
                        <p>Hubungi kami sekarang untuk reservasi dan dapatkan penawaran spesial!</p>
                        <div className="cta-box__actions">
                            <Link to="/contact" className="btn btn-accent">
                                Reservasi Sekarang
                            </Link>
                            <a href="https://wa.me/6282189033110" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                Chat WhatsApp
                            </a>
                        </div>
                    </SectionWrapper>
                </div>
            </section>
        </main>
    );
};

export default Home;
