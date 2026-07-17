import React from 'react';

export default function AboutUsPage() {
    // Pure React Styles Objects - standard, secure, and clean!
    const styles = {
        container: {
            padding: '120px 8% 80px',
            backgroundColor: '#faf9f6',
            fontFamily: '"Manrope", sans-serif',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        header: {
            textAlign: 'center',
            marginBottom: '60px',
        },
        tag: {
            color: '#d4af37',
            fontWeight: '700',
            letterSpacing: '3px',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
        },
        title: {
            fontSize: '2.8rem',
            fontWeight: '800',
            color: '#1a1a1a',
            marginTop: '10px',
            letterSpacing: '-0.5px',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Auto-responsive bina media query ke!
            gap: '60px',
            alignItems: 'center',
            maxWidth: '1200px',
            width: '100%',
        },
        imageWrapper: {
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
        },
        image: {
            width: '100%',
            height: '500px',
            objectFit: 'cover',
            display: 'block',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        subtitle: {
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#1a1a1a',
            lineHeight: '1.3',
        },
        text: {
            color: '#555555',
            fontSize: '1.05rem',
            lineHeight: '1.8',
        },
        statsRow: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginTop: '30px',
            paddingTop: '30px',
            borderTop: '1px solid #e5e5e5',
        },
        statNum: {
            fontSize: '2rem',
            fontWeight: '800',
            color: '#d4af37',
            margin: '0 0 5px 0',
        },
        statLabel: {
            fontSize: '0.85rem',
            color: '#777777',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0',
        }
    };

    return (
        <section id="about-us" style={styles.container}>
            <div style={styles.header}>
                <span style={styles.tag}>Who We Are</span>
                <h1 style={styles.title}>Our Story & Legacy</h1>
            </div>

            <div style={styles.grid}>
                {/* Left Side: Luxury Image */}
                <div style={styles.imageWrapper}>
                    <img
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200"
                        alt="VibeWear Studio"
                        style={styles.image}
                    />
                </div>

                {/* Right Side: Philosophy and Details */}
                <div style={styles.content}>
                    <h2 style={styles.subtitle}>Redefining Modern Minimalist Essentials.</h2>
                    <p style={styles.text}>
                        Founded in 2024, VibeWear emerged from a simple desire: to eliminate the noise of fast fashion and return to what truly matters—exceptional quality, thoughtful silhouettes, and quiet confidence.
                    </p>
                    <p style={styles.text}>
                        Every garment we produce is crafted in limited batches using sustainably sourced materials. We don't design for seasons; we design for lifetimes.
                    </p>

                    {/* Business Stats */}
                    <div style={styles.statsRow}>
                        <div style={styles.statItem}>
                            <h4 style={styles.statNum}>100%</h4>
                            <p style={styles.statLabel}>Organic Cotton</p>
                        </div>
                        <div style={styles.statItem}>
                            <h4 style={styles.statNum}>15k+</h4>
                            <p style={styles.statLabel}>Happy Clients</p>
                        </div>
                        <div style={styles.statItem}>
                            <h4 style={styles.statNum}>Quiet</h4>
                            <p style={styles.statLabel}>Luxury Style</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}