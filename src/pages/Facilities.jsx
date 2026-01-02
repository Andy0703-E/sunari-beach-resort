import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiWifi, FiCoffee, FiSun, FiDroplet, FiCamera, FiMusic } from 'react-icons/fi';
import SectionWrapper from '../components/SectionWrapper';
import bungalowImg from '../assets/images/bungalow-room.png';
import sunsetImg from '../assets/images/sunset-beach.png';
import snorkelingImg from '../assets/images/snorkeling-activity.png';
import './Facilities.css';

const rooms = [
    {
        name: 'Bungalow Standar',
        desc: 'Kamar nyaman dengan pemandangan taman dan akses mudah ke pantai.',
        price: 'Rp 350.000',
        features: ['AC', 'Kamar Mandi Dalam', 'TV', 'Wi-Fi'],
        image: bungalowImg,
    },
    {
        name: 'Bungalow Deluxe',
        desc: 'Ruang lebih luas dengan balkon pribadi menghadap laut.',
        price: 'Rp 550.000',
        features: ['AC', 'Balkon', 'View Laut', 'Wi-Fi', 'Sarapan'],
        image: bungalowImg,
    },
    {
        name: 'Villa Premium',
        desc: 'Villa eksklusif dengan ruang tamu, dapur kecil, dan teras luas.',
        price: 'Rp 850.000',
        features: ['2 Kamar', 'Living Room', 'Private Beach', 'All Inclusive'],
        image: bungalowImg,
    },
];

const amenities = [
    { icon: <FiWifi />, name: 'Wi-Fi Gratis' },
    { icon: <FiCoffee />, name: 'Restoran & Bar' },
    { icon: <FiSun />, name: 'Sunset Deck' },
    { icon: <FiDroplet />, name: 'Snorkeling Gear' },
    { icon: <FiCamera />, name: 'Photo Spot' },
    { icon: <FiMusic />, name: 'Live Music' },
];

const activities = [
    { name: 'Snorkeling', desc: 'Jelajahi terumbu karang yang indah', image: snorkelingImg },
    { name: 'Sunset Watching', desc: 'Nikmati momen sunset terbaik', image: sunsetImg },
    { name: 'Beach Activities', desc: 'Berenang, kano, dan berjemur', image: sunsetImg },
];

const Facilities = () => {
    return (
        <main className="facilities-page">
            {/* Hero */}
            <section className="facilities-hero">
                <div className="facilities-hero__bg">
                    <img src={bungalowImg} alt="Bungalow" />
                    <div className="facilities-hero__overlay"></div>
                </div>
                <div className="facilities-hero__content">
                    <SectionWrapper>
                        <h1>Fasilitas & Akomodasi</h1>
                        <p>Kenyamanan dan kemewahan di tepi pantai</p>
                    </SectionWrapper>
                </div>
            </section>

            {/* Rooms Section */}
            <section className="facilities-rooms section">
                <div className="container">
                    <SectionWrapper className="section-header">
                        <span className="section-badge">Akomodasi</span>
                        <h2>Pilihan <span className="text-gradient">Penginapan</span></h2>
                        <p>Temukan kenyamanan sempurna untuk liburan Anda</p>
                    </SectionWrapper>

                    <div className="rooms__grid">
                        {rooms.map((room, index) => (
                            <SectionWrapper key={index} delay={index * 0.15}>
                                <motion.div
                                    className="room-card"
                                    whileHover={{ y: -8 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <div className="room-card__image">
                                        <img src={room.image} alt={room.name} />
                                        <span className="room-card__price">{room.price}<small>/malam</small></span>
                                    </div>
                                    <div className="room-card__content">
                                        <h3>{room.name}</h3>
                                        <p>{room.desc}</p>
                                        <ul className="room-card__features">
                                            {room.features.map((feat, i) => (
                                                <li key={i}>{feat}</li>
                                            ))}
                                        </ul>
                                        <Link to="/contact" className="btn btn-primary room-card__btn">
                                            Pesan Sekarang
                                        </Link>
                                    </div>
                                </motion.div>
                            </SectionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Amenities */}
            <section className="facilities-amenities section">
                <div className="container">
                    <SectionWrapper className="section-header">
                        <h2>Fasilitas Umum</h2>
                        <p>Semua yang Anda butuhkan untuk liburan sempurna</p>
                    </SectionWrapper>

                    <div className="amenities__grid">
                        {amenities.map((item, index) => (
                            <SectionWrapper key={index} delay={index * 0.08}>
                                <div className="amenity-item">
                                    <span className="amenity-item__icon">{item.icon}</span>
                                    <span className="amenity-item__name">{item.name}</span>
                                </div>
                            </SectionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Activities */}
            <section className="facilities-activities section">
                <div className="container">
                    <SectionWrapper className="section-header">
                        <span className="section-badge">Aktivitas</span>
                        <h2>Yang Bisa Anda Lakukan</h2>
                        <p>Petualangan menanti di setiap sudut</p>
                    </SectionWrapper>

                    <div className="activities__grid">
                        {activities.map((item, index) => (
                            <SectionWrapper key={index} delay={index * 0.15}>
                                <div className="activity-card">
                                    <img src={item.image} alt={item.name} />
                                    <div className="activity-card__overlay">
                                        <h3>{item.name}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </SectionWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Facilities;
