import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            alert(`Thank you, ${formData.name}! We'll get back to you soon.`);
            setFormData({ name: "", email: "", message: "" });
            setIsSubmitting(false);
        }, 1200);
    };

    const styles = {
        section: {
            padding: '120px 8% 80px',
            backgroundColor: '#ffffff',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            maxWidth: '1200px',
            width: '100%',
        },
        infoColumn: {
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
        },
        infoBlock: {
            display: 'flex',
            gap: '20px',
            alignItems: 'flex-start',
        },
        iconWrapper: {
            backgroundColor: '#faf9f6',
            border: '1px solid #e5e5e5',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
        },
        infoTitle: {
            fontSize: '1.1rem',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0 0 5px 0',
        },
        infoText: {
            color: '#666',
            fontSize: '0.95rem',
            margin: 0,
            lineHeight: '1.6',
        },
        form: {
            backgroundColor: '#faf9f6',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        inputGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
        },
        label: {
            fontSize: '0.85rem',
            fontWeight: '600',
            color: '#1a1a1a',
        },
        input: {
            padding: '14px 18px',
            border: '1px solid #e5e5e5',
            borderRadius: '8px',
            fontSize: '0.95rem',
            backgroundColor: '#fff',
            outline: 'none',
            transition: 'border-color 0.3s',
        },
        button: {
            backgroundColor: '#1a1a1a',
            color: '#fff',
            padding: '15px',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '0.95rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            marginTop: '10px',
        }
    };

    return (
        <section id="contact" style={styles.section}>
            <div style={styles.header}>
                <span style={styles.tag}>Get In Touch</span>
                <h1 style={styles.title}>We'd Love To Hear From You</h1>
            </div>

            <div style={styles.grid}>
                {/* Left: Contact Info */}
                <div style={styles.infoColumn}>
                    <div style={styles.infoBlock}>
                        <div style={styles.iconWrapper}>📍</div>
                        <div>
                            <h3 style={styles.infoTitle}>Visit Our Headquarters</h3>
                            <p style={styles.infoText}>Atlaas Plaza near Medicare Hospital, Kharian, Punjab, Pakistan</p>
                        </div>
                    </div>

                    <div style={styles.infoBlock}>
                        <div style={styles.iconWrapper}>📞</div>
                        <div>
                            <h3 style={styles.infoTitle}>Call Support Desk</h3>
                            <p style={styles.infoText}>+92 (342) 5964061</p>
                        </div>
                    </div>

                    <div style={styles.infoBlock}>
                        <div style={styles.iconWrapper}>✉️</div>
                        <div>
                            <h3 style={styles.infoTitle}>Email Inquiries</h3>
                            <p style={styles.infoText}>support@vibewear.com</p>
                        </div>
                    </div>
                </div>

                {/* Right: Modern Secure Form */}
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>FULL NAME</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>EMAIL ADDRESS</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="hello@company.com"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>MESSAGE</label>
                        <textarea
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="How can we help your styling journey?"
                            style={{ ...styles.input, resize: 'none' }}
                        />
                    </div>

                    <button type="submit" disabled={isSubmitting} style={styles.button}>
                        {isSubmitting ? "Sending Inquiries..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
}