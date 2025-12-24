import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/chu.jpg';
import heroBg2 from '../assets/ch.jpg';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                padding: '8rem 0',
                backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.6)), url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center'
            }}>
                <div className="container animate-in">
                    <span className="animate-in delay-100" style={{
                        color: 'var(--color-accent)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontWeight: '600',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>{t('home.solas_banner')}</span>
                    <h1 className="animate-in delay-200" style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                        {t('home.hero_title')}
                    </h1>
                    <p className="animate-in delay-300" style={{ fontSize: '1.25rem', color: '#e2e8f0', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        {t('home.hero_desc')}
                    </p>
                    <div className="animate-in delay-300" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/about" className="btn btn-accent">{t('home.beliefs_btn')}</Link>
                        <Link to="/contact" className="btn btn-outline">{t('home.visit_btn')}</Link>
                    </div>
                </div>
            </section>

            {/* Service Times */}
            <section className="section" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="grid md:grid-cols-3" style={{ gap: '2rem' }}>
                        <div className="card text-center" style={{ borderTop: '4px solid var(--color-accent)' }}>
                            <Calendar size={40} color="var(--color-primary)" style={{ margin: '0 auto 1rem' }} />
                            <h3 className="mb-2">{t('home.sunday_worship')}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{t('home.sunday_worship_desc')}</p>
                            <p className="mb-4" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>9:00 AM</p>
                        </div>
                        <div className="card text-center" style={{ borderTop: '4px solid var(--color-primary)' }}>
                            <Clock size={40} color="var(--color-primary)" style={{ margin: '0 auto 1rem' }} />
                            <h3 className="mb-2">{t('home.evening_service')}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{t('home.evening_service_desc')}</p>
                            <p className="mb-4" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>4:00 PM</p>
                        </div>
                        <div className="card text-center" style={{ borderTop: '4px solid var(--color-accent)' }}>
                            <div style={{ margin: '0 auto 1rem', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', backgroundColor: '#ecfdf5', color: '#059669' }}>
                                <span style={{ fontWeight: 'bold' }}>W</span>
                            </div>
                            <h3 className="mb-2">{t('home.midweek_study')}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{t('home.midweek_study_desc')}</p>
                            <p className="mb-4" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>5:30 PM</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Welcome/About Preview */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 className="mb-4">{t('home.welcome_title')}</h2>
                            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', marginBottom: '1.5rem' }}></div>
                            <p className="mb-4" style={{ fontSize: '1.1rem' }}>
                                {t('home.welcome_text_1')}
                            </p>
                            <p className="mb-8" style={{ color: 'var(--color-text-muted)' }}>
                                {t('home.welcome_text_2')}
                            </p>
                            <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: '600' }}>
                                {t('home.learn_more')} <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', backgroundColor: 'var(--color-accent)', borderRadius: '4px', zIndex: 0 }}></div>
                            <img
                                src={heroBg2}
                                alt="Bible Study"
                                style={{ position: 'relative', zIndex: 1, borderRadius: '8px', boxShadow: 'var(--shadow-lg)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
