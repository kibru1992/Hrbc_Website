import { BookOpen, Users, History } from 'lucide-react';
import FiveSolas from '../components/FiveSolas';
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div>
            {/* Header */}
            <section style={{ backgroundColor: 'var(--color-secondary)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container animate-in">
                    <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>{t('about.title')}</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#cbd5e1' }}>
                        {t('about.subtitle')}
                    </p>
                </div>
            </section>

            {/* Five Solas Section */}
            <FiveSolas />

            {/* Beliefs Section */}
            <section className="section">
                <div className="container">
                    <div className="grid md:grid-cols-2" style={{ gap: '4rem' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <BookOpen size={32} color="var(--color-primary)" />
                                <h2 style={{ fontSize: '2rem' }}>{t('about.confession_title')}</h2>
                            </div>
                            <p className="mb-4">
                                <Trans i18nKey="about.confession_text">
                                    We fully subscribe to the <strong>1689 London Baptist Confession of Faith</strong>. We believe it is the best summary of what the Bible teaches.
                                </Trans>
                            </p>

                            {/* <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                                <li><strong>{t('about.sola_scriptura')}:</strong> {t('about.sola_scriptura_desc')}</li>
                                <li><strong>{t('about.sovereign_grace')}:</strong> {t('about.sovereign_grace_desc')}</li>
                                <li><strong>{t('about.believers_baptism')}:</strong> {t('about.believers_baptism_desc')}</li>
                            </ul> */}

                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginTop: '2rem', marginBottom: '2rem' }}>{t('about.tulip_title')}</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
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
                                            fontSize: '0.9rem'
                                        }}>
                                            {item.label}
                                        </span>
                                        <div>
                                            <strong>{t(`about.${item.key}`)}:</strong>
                                            <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{t(`about.${item.key}_desc`)}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ backgroundColor: '#f1f5f9', padding: '2rem', borderRadius: '8px' }}>
                            <h3 className="mb-4">{t('about.core_values')}</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.25rem' }}>{t('about.expository_preaching')}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{t('about.expository_preaching_desc')}</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.25rem' }}>{t('about.regulative_principle')}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{t('about.regulative_principle_desc')}</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.25rem' }}>{t('about.local_membership')}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{t('about.local_membership_desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="section" style={{ backgroundColor: '#f8fafc', padding: '80px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <div style={{ display: 'inline-flex', padding: '0.5rem', backgroundColor: '#e0f2fe', borderRadius: '50%', marginBottom: '1rem' }}>
                            <Users size={32} color="var(--color-primary)" />
                        </div>
                        <h2>{t('about.leadership_title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-3" style={{ gap: '2rem' }}>
                        {[1, 2].map((i) => (
                            <div key={i} className="card" style={{ textAlign: 'center' }}>
                                <div style={{ width: '100px', height: '100px', backgroundColor: '#cbd5e1', borderRadius: '50%', margin: '0 auto 1.5rem' }}></div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Elder Name</h3>
                                <p style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.875rem', marginBottom: '1rem' }}>{t('about.elder')}</p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                    {t('about.elder_desc')}
                                </p>
                            </div>
                        ))}
                        <div className="card" style={{ textAlign: 'center' }}>
                            <div style={{ width: '100px', height: '100px', backgroundColor: '#cbd5e1', borderRadius: '50%', margin: '0 auto 1.5rem' }}></div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Deacon Name</h3>
                            <p style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.875rem', marginBottom: '1rem' }}>{t('about.deacon')}</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                {t('about.deacon_desc')}
                            </p>
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
