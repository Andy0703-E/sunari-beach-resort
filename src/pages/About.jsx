import { FiMapPin, FiAward, FiUsers, FiStar } from 'react-icons/fi';
import SectionWrapper from '../components/SectionWrapper';
import sunsetImg from '../assets/images/sunset-beach.png';
import './About.css';

const features = [
    { icon: <FiMapPin />, title: 'Lokasi Strategis', desc: 'Terletak di pesisir pantai Sunari yang indah' },
    { icon: <FiAward />, title: 'Pelayanan Premium', desc: 'Layanan ramah dan profesional 24 jam' },
    { icon: <FiUsers />, title: 'Ramah Keluarga', desc: 'Cocok untuk liburan keluarga dan pasangan' },
    { icon: <FiStar />, title: 'Rating Tinggi', desc: 'Dipercaya ratusan wisatawan setiap tahun' },
];

const About = () => {
    return (
        <main className="about-page">
            {/* Hero Banner */}
            <section className="about-hero">
                <div className="about-hero__bg">
                    <img src={sunsetImg} alt="Pantai Sunari" />
                    <div className="about-hero__overlay"></div>
                </div>
                <div className="about-hero__content">
                    <SectionWrapper>
                        <h1>Tentang Kami</h1>
                        <p>Mengenal lebih dekat Sunari Beach Resort Selayar</p>
                    </SectionWrapper>
                </div>
            </section>

            {/* Story Section */}
            <section className="about-story section">
                <div className="container">
                    <div className="about-story__grid">
                        <SectionWrapper className="about-story__content">
                            <span className="section-badge">Cerita Kami</span>
                            <h2>Surga Tersembunyi di <span className="text-gradient">Kepulauan Selayar</span></h2>
                            <p>
                                Sunari Beach Resort Selayar adalah destinasi liburan premium yang terletak di pesisir
                                pantai Sunari, Desa Patikarya, Kecamatan Bontosikuyu, Kabupaten Kepulauan Selayar,
                                Sulawesi Selatan, Indonesia.
                            </p>
                            <p>
                                Kami menawarkan pengalaman menginap yang tak terlupakan dengan bungalow tepi pantai,
                                pemandangan sunset memukau, dan berbagai aktivitas wisata seperti snorkeling,
                                berenang, dan eksplorasi alam.
                            </p>
                            <p>
                                Dengan komitmen terhadap kenyamanan tamu dan pelestarian alam, Sunari Beach Resort
                                menjadi pilihan favorit wisatawan lokal maupun internasional terutama pada musim
                                liburan dan akhir pekan.
                            </p>
                        </SectionWrapper>
                        <SectionWrapper className="about-story__image" delay={0.2}>
                            <img src={sunsetImg} alt="Resort View" />
                        </SectionWrapper>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="about-features section">
                <div className="container">
                    <SectionWrapper className="section-header">
                        <h2>Mengapa Memilih Kami?</h2>
                        <p>Keunggulan yang membuat Sunari Beach Resort istimewa</p>
                    </SectionWrapper>
                    <div className="features__grid">
                        {features.map((item, index) => (
                            <SectionWrapper key={index} delay={index * 0.1}>
                                <div className="feature-card">
                                    <div className="feature-card__icon">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </SectionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="about-map section">
                <div className="container">
                    <SectionWrapper className="section-header">
                        <span className="section-badge">Lokasi</span>
                        <h2>Temukan Kami</h2>
                        <p>Desa Patikarya, Kec. Bontosikuyu, Kepulauan Selayar, Sulawesi Selatan</p>
                    </SectionWrapper>
                    <SectionWrapper delay={0.2}>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15894.123456789!2d120.45!3d-6.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zU3VuYXJpIEJlYWNoIFJlc29ydA!5e0!3m2!1sen!2sid!4v1234567890"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Sunari Beach Resort"
                            ></iframe>
                        </div>
                    </SectionWrapper>
                </div>
            </section>
        </main>
    );
};

export default About;
