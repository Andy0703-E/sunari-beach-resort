import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import SectionWrapper from '../components/SectionWrapper';
import heroImg from '../assets/images/hero-banner.png';
import './Packages.css';

const packages = [
    {
        name: 'Basic Stay',
        price: 'Rp 350.000',
        period: '/malam',
        description: 'Sempurna untuk perjalanan singkat',
        features: [
            'Bungalow Standar',
            'Sarapan untuk 2 orang',
            'Akses pantai gratis',
            'Wi-Fi gratis',
        ],
        popular: false,
    },
    {
        name: 'Romantic Getaway',
        price: 'Rp 750.000',
        period: '/malam',
        description: 'Paket ideal untuk pasangan',
        features: [
            'Bungalow Deluxe View Laut',
            'Sarapan & Makan Malam',
            'Welcome Drink Couple',
            'Late Check-out',
            'Photo Session Gratis',
        ],
        popular: true,
    },
    {
        name: 'Family Fun',
        price: 'Rp 1.200.000',
        period: '/malam',
        description: 'Liburan keluarga yang berkesan',
        features: [
            'Villa 2 Kamar',
            'All Meals Included',
            'Snorkeling untuk 4 orang',
            'Kids Activities',
            'Airport Transfer',
        ],
        popular: false,
    },
];

const addons = [
    { name: 'Tiket Masuk Pantai', price: 'Rp 10.000 / orang' },
    { name: 'Snorkeling Gear', price: 'Rp 50.000 / set' },
    { name: 'Kano / Kayak', price: 'Rp 75.000 / jam' },
    { name: 'Private Dinner', price: 'Rp 500.000 / couple' },
];

const Packages = () => {
    return (
        <main className="packages-page">
            {/* Hero */}
            <section className="packages-hero">
                <div className="packages-hero__bg">
                    <img src={heroImg} alt="Packages" />
                    <div className="packages-hero__overlay"></div>
                </div>
                <div className="packages-hero__content">
                    <SectionWrapper>
                        <h1>Paket & Harga</h1>
                        <p>Pilih paket terbaik untuk liburan impian Anda</p>
                    </SectionWrapper>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="packages-grid section">
                <div className="container">
                    <SectionWrapper className="section-header">
                        <span className="section-badge">Penawaran Spesial</span>
                        <h2>Pilihan <span className="text-gradient">Paket Menginap</span></h2>
                        <p>Harga transparan, pengalaman tak terlupakan</p>
                    </SectionWrapper>

                    <div className="packages__cards">
                        {packages.map((pkg, index) => (
                            <SectionWrapper key={index} delay={index * 0.15}>
                                <motion.div
                                    className={`package-card ${pkg.popular ? 'package-card--popular' : ''}`}
                                    whileHover={{ y: -10 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {pkg.popular && <span className="package-card__badge">Paling Populer</span>}
                                    <div className="package-card__header">
                                        <h3>{pkg.name}</h3>
                                        <p className="package-card__desc">{pkg.description}</p>
                                        <div className="package-card__price">
                                            <span className="package-card__amount">{pkg.price}</span>
                                            <span className="package-card__period">{pkg.period}</span>
                                        </div>
                                    </div>
                                    <ul className="package-card__features">
                                        {pkg.features.map((feat, i) => (
                                            <li key={i}>
                                                <FiCheck className="package-card__check" />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        to="/contact"
                                        className={`btn ${pkg.popular ? 'btn-accent' : 'btn-primary'} package-card__btn`}
                                    >
                                        Pesan Sekarang
                                    </Link>
                                </motion.div>
                            </SectionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Add-ons */}
            <section className="packages-addons section">
                <div className="container">
                    <SectionWrapper className="section-header">
                        <h2>Layanan Tambahan</h2>
                        <p>Tambahkan pengalaman ekstra ke liburan Anda</p>
                    </SectionWrapper>

                    <div className="addons__grid">
                        {addons.map((item, index) => (
                            <SectionWrapper key={index} delay={index * 0.1}>
                                <div className="addon-item">
                                    <span className="addon-item__name">{item.name}</span>
                                    <span className="addon-item__price">{item.price}</span>
                                </div>
                            </SectionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="packages-cta section">
                <div className="container">
                    <SectionWrapper className="packages-cta__content">
                        <h2>Butuh Paket Khusus?</h2>
                        <p>Hubungi kami untuk paket custom sesuai kebutuhan Anda: honeymoon, gathering, corporate event, dan lainnya.</p>
                        <a href="https://wa.me/6282189033110" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                            Hubungi via WhatsApp
                        </a>
                    </SectionWrapper>
                </div>
            </section>
        </main>
    );
};

export default Packages;
