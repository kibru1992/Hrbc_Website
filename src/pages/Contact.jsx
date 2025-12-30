import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`New Contact Request from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:kibruabebe14@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div>
            <section style={{ backgroundColor: 'var(--color-surface)', borderBottom: '1px solid #e2e8f0', padding: '4rem 0' }}>
                <div className="container text-center">
                    <h1>{t('contact.header_title')}</h1>
                    <p style={{ color: 'var(--color-text-muted)' }}>{t('contact.header_subtitle')}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid md:grid-cols-2" style={{ gap: '4rem' }}>

                        {/* Contact Info */}
                        <div>
                            <h2 className="mb-4" style={{ fontSize: '1.75rem' }}>{t('contact.get_in_touch')}</h2>
                            <p className="mb-8">
                                {t('contact.contact_intro')}
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ backgroundColor: '#eff6ff', padding: '0.75rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.25rem' }}>{t('contact.visit_us')}</h4>
                                        <p style={{ color: 'var(--color-text-muted)' }}>Hawassa, Ethiopia</p>
                                        <p style={{ color: 'var(--color-text-muted)' }}>Kebele 05, Piassa Near Awash Bank </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ backgroundColor: '#eff6ff', padding: '0.75rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.25rem' }}>{t('contact.call_us')}</h4>
                                        <p style={{ color: 'var(--color-text-muted)' }}>+251 911 000 000</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ backgroundColor: '#eff6ff', padding: '0.75rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.25rem' }}>{t('contact.email_us')}</h4>
                                        <p style={{ color: 'var(--color-text-muted)' }}>info@hawassareformed.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{t('contact.name_label')}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder={t('contact.name_label')}
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '4px' }}
                                    />
                                </div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{t('contact.email_label')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="you@example.com"
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '4px' }}
                                    />
                                </div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{t('contact.message_label')}</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        placeholder={t('contact.message_label')}
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontFamily: 'inherit' }}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', gap: '0.5rem' }}>
                                    {t('contact.send_btn')} <Send size={18} />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
