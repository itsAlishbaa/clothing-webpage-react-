import React from 'react';

export default function Policy() {
    const styles = {
        section: {
            padding: '100px 8%',
            backgroundColor: '#faf9f6',
            fontFamily: '"Manrope", sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#1a1a1a',
            marginTop: '10px',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            width: '100%',
        },
        card: {
            backgroundColor: '#ffffff',
            padding: '40px 30px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
            border: '1px solid #f0efeb',
            textAlign: 'center',
        },
        icon: {
            fontSize: '2.5rem',
            marginBottom: '20px',
            display: 'inline-block',
        },
        cardTitle: {
            fontSize: '1.25rem',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: '15px',
        },
        cardText: {
            color: '#666',
            fontSize: '0.95rem',
            lineHeight: '1.7',
            margin: 0,
        }
    };

    const policyData = [
        {
            icon: "📦",
            title: "Complementary Shipping",
            text: "We offer secure, fully tracked shipping on all orders nationwide. Every shipment is handled with utmost care to maintain fabric integrity."
        },
        {
            icon: "🔄",
            title: "7-Day Signature Return",
            text: "Not fully satisfied with your fit? We accept return shipments of unworn items in original packaging with brand security tags intact."
        },
        {
            icon: "✨",
            title: "Heritage Quality Guarantee",
            text: "We inspect every stitch, button, and hem in-house. If your garment experiences a production defect, we will exchange it immediately."
        }
    ];

    return (
        <section id="policy" style={styles.section}>
            <div style={styles.header}>
                <span style={styles.tag}>VibeWear Standard</span>
                <h1 style={styles.title}>Our Core Policies</h1>
            </div>

            <div style={styles.grid}>
                {policyData.map((item, idx) => (
                    <div key={idx} style={styles.card}>
                        <span style={styles.icon}>{item.icon}</span>
                        <h3 style={styles.cardTitle}>{item.title}</h3>
                        <p style={styles.cardText}>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}