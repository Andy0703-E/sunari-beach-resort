import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import heroImg from '../assets/images/hero-banner.png';
import bungalowImg from '../assets/images/bungalow-room.png';
import sunsetImg from '../assets/images/sunset-beach.png';
import snorkelingImg from '../assets/images/snorkeling-activity.png';
import './Gallery.css';

const categories = ['Semua', 'Pantai', 'Kamar', 'Aktivitas'];

const galleryItems = [
    { id: 1, src: heroImg, category: 'Pantai', title: 'Panorama Pantai Sunari' },
    { id: 2, src: bungalowImg, category: 'Kamar', title: 'Bungalow Deluxe' },
    { id: 3, src: sunsetImg, category: 'Pantai', title: 'Sunset Memukau' },
    { id: 4, src: snorkelingImg, category: 'Aktivitas', title: 'Snorkeling Adventure' },
    { id: 5, src: sunsetImg, category: 'Pantai', title: 'Golden Hour' },
    { id: 6, src: bungalowImg, category: 'Kamar', title: 'Interior Bungalow' },
    { id: 7, src: heroImg, category: 'Pantai', title: 'Beach View' },
    { id: 8, src: snorkelingImg, category: 'Aktivitas', title: 'Underwater World' },
];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredItems = activeCategory === 'Semua'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <main className="gallery-page">
            {/* Hero */}
            <section className="gallery-hero">
                <div className="gallery-hero__bg">
                    <img src={heroImg} alt="Gallery" />
                    <div className="gallery-hero__overlay"></div>
                </div>
                <div className="gallery-hero__content">
                    <SectionWrapper>
                        <h1>Galeri</h1>
                        <p>Momen-momen indah di Sunari Beach Resort</p>
                    </SectionWrapper>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="gallery-content section">
                <div className="container">
                    <SectionWrapper>
                        <div className="gallery-filters">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`gallery-filter ${activeCategory === cat ? 'gallery-filter--active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </SectionWrapper>

                    <motion.div className="gallery-grid" layout>
                        <AnimatePresence>
                            {filteredItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    className="gallery-item"
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4 }}
                                    onClick={() => setSelectedImage(item)}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <img src={item.src} alt={item.title} />
                                    <div className="gallery-item__overlay">
                                        <span className="gallery-item__category">{item.category}</span>
                                        <h3>{item.title}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="lightbox__content"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedImage.src} alt={selectedImage.title} />
                            <div className="lightbox__info">
                                <h3>{selectedImage.title}</h3>
                                <span>{selectedImage.category}</span>
                            </div>
                            <button className="lightbox__close" onClick={() => setSelectedImage(null)}>
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default Gallery;
