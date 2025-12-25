import { BookOpen, Users, History } from 'lucide-react';
import FiveSolas from '../components/FiveSolas';
import { useTranslation, Trans } from 'react-i18next';
import heroBg from '../assets/about/hero.jpg';
import reformerImg from '../assets/about/reformer.jpg';
import confessionImg from '../assets/about/confession.webp';

const About = () => {
    const { t } = useTranslation();

    return (
        <div>
            {/* Hero */}
            <section style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                padding: '8rem 0',
                textAlign: 'center'
            }}>
                <div className="container animate-in">
                    <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>{t('about.statement_of_faith.title')}</h1>
                    <div style={{ fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '1.5rem', color: '#e2e8f0' }}>
                        {t('about.statement_of_faith.intro')}
                    </div>
                    <div style={{ fontSize: '1.25rem', color: 'var(--color-accent)', fontWeight: 'bold' }}>
                        {t('about.statement_of_faith.verse')}
                    </div>
                </div>
            </section>

            {/* As a Reformed Baptist Church */}
            <section className="section">
                <div className="container">
                    <div className="grid md:grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>{t('about.statement_of_faith.reformed_title')}</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                                {t('about.statement_of_faith.reformed_text')}
                            </p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img src={reformerImg} alt="Reformer" style={{ borderRadius: '8px', boxShadow: 'var(--shadow-lg)', maxHeight: '400px', margin: '0 auto' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Five Solas Section - Keeping this but maybe styled differently? Let's keep existing component for now */}
            <FiveSolas />

            {/* Statement of Faith Section - Numbered Cards */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            'scriptures',
                            'trinity',
                            'god_father',
                            'jesus_christ',
                            'holy_spirit',
                            'humanity'
                        ].map((key, index) => (
                            <div key={key} className="card" style={{
                                padding: '2rem',
                                display: 'flex',
                                gap: '2rem',
                                alignItems: 'flex-start',
                                borderLeft: '6px solid #8B4513', /* Brownish-gold similar to GRBC */
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    fontSize: '5rem',
                                    fontWeight: '900',
                                    color: 'rgba(139, 69, 19, 0.1)',
                                    lineHeight: 1,
                                    position: 'absolute',
                                    left: '1rem',
                                    top: '-0.5rem',
                                    userSelect: 'none'
                                }}>

                                </div>
                                <div style={{ position: 'relative', zIndex: 1, paddingLeft: '3rem' }}>
                                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                                        {t(`about.statement_of_faith.${key}`)}
                                    </h3>
                                    <p style={{ fontSize: '1.05rem', color: 'var(--color-text)', lineHeight: '1.7' }}>
                                        {t(`about.statement_of_faith.${key}_desc`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Confession Section */}
            <section className="section">
                <div className="container">
                    <div className="grid md:grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        <div style={{ order: 2 }}> {/* Image on right usually looks good, or left if alternating */}
                            <img src={confessionImg} alt="1689 Confession" style={{ borderRadius: '8px', boxShadow: 'var(--shadow-lg)', maxHeight: '500px', margin: '0 auto' }} />
                        </div>
                        <div style={{ order: 1 }}>
                            {/* <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <BookOpen size={32} color="var(--color-primary)" />
                                <h2 style={{ fontSize: '2rem' }}>{t('about.confession_title')}</h2>
                            </div> */}
                            {/* <p className="mb-6" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                <Trans i18nKey="about.confession_text">
                                    We fully subscribe to the <strong>1689 London Baptist Confession of Faith</strong>. We believe it is the best summary of what the Bible teaches.
                                </Trans>
                            </p> */}

                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginTop: '2rem', marginBottom: '1.5rem' }}>{t('about.tulip_title')}</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    { key: 'total_depravity', label: 'T' },
                                    { key: 'unconditional_election', label: 'U' },
                                    { key: 'limited_atonement', label: 'L' },
                                    { key: 'irresistible_grace', label: 'I' },
                                    { key: 'perseverance_saints', label: 'P' }
                                ].map((item) => (
                                    <li key={item.key} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <span style={{
                                            backgroundColor: 'var(--color-accent)',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            minWidth: '32px',
                                            height: '32px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '50%',
                                            fontSize: '0.9rem',
                                            marginTop: '0.25rem'
                                        }}>
                                            {item.label}
                                        </span>
                                        <div>
                                            <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--color-primary)' }}>{t(`about.${item.key}`)}</strong>
                                            <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{t(`about.${item.key}_desc`)}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">{t('about.leadership_title')}</h2>
                        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
                    </div>
                    <div className="grid md:grid-cols-3" style={{ gap: '2rem' }}>
                        {/* Placeholder Leadership Cards - Keeping original logic */}
                        {[1, 2].map((i) => (
                            <div key={i} className="card" style={{ textAlign: 'center' }}>
                                <div style={{ width: '100px', height: '100px', backgroundColor: '#cbd5e1', borderRadius: '50%', margin: '0 auto 1.5rem' }}></div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Elder Name</h3>
                                <p style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.875rem', marginBottom: '1rem' }}>{t('about.elder')}</p>
                            </div>
                        ))}
                        <div className="card" style={{ textAlign: 'center' }}>
                            <div style={{ width: '100px', height: '100px', backgroundColor: '#cbd5e1', borderRadius: '50%', margin: '0 auto 1.5rem' }}></div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Deacon Name</h3>
                            <p style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.875rem', marginBottom: '1rem' }}>{t('about.deacon')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* History */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <History size={40} color="var(--color-accent)" style={{ margin: '0 auto 1.5rem' }} />
                    <h2 className="mb-4">{t('about.history_title')}</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        {t('about.history_text')}
                    </p>
                </div>
            </section>
        </div>
    );
};


export default About;
