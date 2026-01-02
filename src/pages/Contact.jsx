import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';
import SectionWrapper from '../components/SectionWrapper';
import heroImg from '../assets/images/hero-banner.png';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', checkIn: '', checkOut: '', roomType: 'bungalow-standar', guests: '2', message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Halo, saya ingin reservasi di Sunari Beach Resort.\n\nNama: ${formData.name}\nTelepon: ${formData.phone}\nEmail: ${formData.email}\nCheck-in: ${formData.checkIn}\nCheck-out: ${formData.checkOut}\nTipe Kamar: ${formData.roomType}\nJumlah Tamu: ${formData.guests}\n\nPesan: ${formData.message}`;
        const whatsappUrl = `https://wa.me/6282189033110?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <main className="contact-page">
            <section className="contact-hero">
                <div className="contact-hero__bg">
                    <img src={heroImg} alt="Contact" />
                    <div className="contact-hero__overlay"></div>
                </div>
                <div className="contact-hero__content">
                    <SectionWrapper>
                        <h1>Hubungi Kami</h1>
                        <p>Siap membantu merencanakan liburan impian Anda</p>
                    </SectionWrapper>
                </div>
            </section>

            <section className="contact-main section">
                <div className="container">
                    <div className="contact-grid">
                        <SectionWrapper className="contact-info">
                            <h2>Informasi Kontak</h2>
                            <p>Jangan ragu untuk menghubungi kami kapan saja</p>
                            <ul className="contact-info__list">
                                <li><FiMapPin /><div><strong>Alamat</strong><span>Desa Patikarya, Kec. Bontosikuyu, Kepulauan Selayar, Sulawesi Selatan</span></div></li>
                                <li><FiPhone /><div><strong>Telepon</strong><a href="tel:+6282189033110">+62 821-8903-3110</a></div></li>
                                <li><FiMail /><div><strong>Email</strong><a href="mailto:info@sunaribeach.com">info@sunaribeach.com</a></div></li>
                                <li><FiClock /><div><strong>Jam Operasional</strong><span>Setiap hari, 08:00 - 22:00 WITA</span></div></li>
                            </ul>
                            <div className="contact-info__map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.3415!2d120.4459!3d-6.2235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dba36cf90f020a7%3A0x3be8e6dbfd7cdaee!2sSunari%20Beach%20Resort%20Selayar%20-%20Real!5e0!3m2!1sid!2sid!4v1735804500000!5m2!1sid!2sid" width="100%" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Map"></iframe>
                            </div>
                        </SectionWrapper>

                        <SectionWrapper className="contact-form-wrapper" delay={0.2}>
                            <h2>Form Reservasi</h2>
                            <p>Isi form di bawah ini untuk melakukan reservasi via WhatsApp</p>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group"><label>Nama Lengkap *</label><input type="text" name="name" value={formData.name} onChange={handleChange} required /></div>
                                    <div className="form-group"><label>No. Telepon *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required /></div>
                                </div>
                                <div className="form-group"><label>Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} /></div>
                                <div className="form-row">
                                    <div className="form-group"><label>Tanggal Check-in *</label><input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required /></div>
                                    <div className="form-group"><label>Tanggal Check-out *</label><input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required /></div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group"><label>Tipe Kamar</label><select name="roomType" value={formData.roomType} onChange={handleChange}><option value="bungalow-standar">Bungalow Standar</option><option value="bungalow-deluxe">Bungalow Deluxe</option><option value="villa-premium">Villa Premium</option></select></div>
                                    <div className="form-group"><label>Jumlah Tamu</label><select name="guests" value={formData.guests} onChange={handleChange}><option value="1">1 Orang</option><option value="2">2 Orang</option><option value="3">3 Orang</option><option value="4">4 Orang</option><option value="5+">5+ Orang</option></select></div>
                                </div>
                                <div className="form-group"><label>Pesan Tambahan</label><textarea name="message" rows="4" value={formData.message} onChange={handleChange}></textarea></div>
                                <motion.button type="submit" className="btn btn-accent contact-form__btn" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}><FiSend /> Kirim via WhatsApp</motion.button>
                            </form>
                        </SectionWrapper>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
