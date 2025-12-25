import { ArrowRight, Calendar, Clock, ShieldCheck, BookOpen, Waves, Book, Music, Users, History, Droplets, Link2, Phone, Mail } from 'lucide-react';
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
                padding: '8rem 0 5rem 0',
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.7)), url(${heroBg})`, backgroundSize: 'cover',
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

            {/* Pillars Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
                <div className="container">
                    <div className="grid md:grid-cols-3" style={{ gap: '1.5rem' }}>
                        {[
                            { title: 'reformed', desc: 'reformed_desc', icon: <ShieldCheck size={32} /> },
                            { title: 'confessional', desc: 'confessional_desc', icon: <BookOpen size={32} /> },
                            { title: 'baptist', desc: 'baptist_desc', icon: <Waves size={32} /> }
                        ].map((pillar, index) => (
                            <div key={index} className="card animate-in" style={{
                                delay: `${(index + 1) * 100}ms`,
                                borderTop: `4px solid ${index === 1 ? 'var(--color-primary)' : 'var(--color-accent)'}`,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: '2.5rem 2rem'
                            }}>
                                <div style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>{pillar.icon}</div>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{t(`home.${pillar.title}_title`)}</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>{t(`home.${pillar.desc}`)}</p>
                                <Link to="/about" style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    {t('home.learn_more')} <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
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

            {/* Beliefs & Values Grid */}
            <section className="section" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">{t('home.values_title')}</h2>
                        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
                    </div>
                    <div className="grid md:grid-cols-3" style={{ gap: '2.5rem' }}>
                        {[
                            { icon: <Book size={32} />, title: 'value_1_title', desc: 'value_1_desc' },
                            { icon: <Music size={32} />, title: 'value_2_title', desc: 'value_2_desc' },
                            { icon: <Users size={32} />, title: 'value_3_title', desc: 'value_3_desc' },
                            { icon: <History size={32} />, title: 'value_4_title', desc: 'value_4_desc' },
                            { icon: <Droplets size={32} />, title: 'value_5_title', desc: 'value_5_desc' },
                            { icon: <Link2 size={32} />, title: 'value_6_title', desc: 'value_6_desc' }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div style={{ color: 'var(--color-accent)', flexShrink: 0 }}>{item.icon}</div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{t(`home.${item.title}`)}</h4>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{t(`home.${item.desc}`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hymns & Articles Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2" style={{ gap: '4rem' }}>
                        {/* Hymns */}
                        <div>
                            <h2 className="mb-4">{t('home.hymns_title')}</h2>
                            <p className="mb-8" style={{ color: 'var(--color-text-muted)' }}>{t('home.hymns_desc')}</p>
                            <div className="card" style={{ padding: '1.5rem' }}>
                                <div style={{ direction: 'rtl', textAlign: 'right', fontFamily: 'serif' }}>
                                    <p className="mb-2">(Holy, Holy, Holy)</p>
                                    <p className="mb-2">(Beneath the Cross of Jesus)</p>
                                    <p className="mb-2">(comming soon....)</p>
                                </div>
                                <button className="btn btn-primary mt-6 w-full">{t('home.more_hymns')}</button>
                            </div>
                        </div>

                        {/* Recent Articles */}
                        <div>
                            <h2 className="mb-4">{t('home.articles_title')}</h2>
                            <div className="flex flex-column gap-4">
                                {[1, 2].map((i) => (
                                    <div key={i} className="card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: '600' }}>2026</span>
                                        <h4 style={{ margin: '0.5rem 0' }}>The Importance of Expository Preaching.....coming soon</h4>
                                        <Link to="#" style={{ color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: '600' }}>Read More</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>{t('home.join_title')}</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', color: '#e2e8f0' }}>{t('home.join_desc')}</p>
                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="tel:+251911XXXXXX" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white', fontSize: '1.1rem' }}>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                                <Phone size={24} color="var(--color-accent)" />
                            </div>
                            <span>{t('home.call_us')}</span>
                        </a>
                        <a href="mailto:info@hrbc.et" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white', fontSize: '1.1rem' }}>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                                <Mail size={24} color="var(--color-accent)" />
                            </div>
                            <span>{t('home.email_us')}</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
