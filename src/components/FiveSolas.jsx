import { Scroll, Heart, Gift, Cross, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FiveSolas = () => {
    const { t } = useTranslation();

    const solas = [
        {
            key: 'scriptura',
            icon: <Scroll size={32} />
        },
        {
            key: 'fide',
            icon: <Heart size={32} />
        },
        {
            key: 'gratia',
            icon: <Gift size={32} />
        },
        {
            key: 'christus',
            icon: <Cross size={32} />
        },
        {
            key: 'gloria',
            icon: <Globe size={32} />
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: '#f8fafc' }}>
            <div className="container">
                <div className="text-center animate-in" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('solas.title')}</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
                        {t('solas.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 justify-center" style={{ gap: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {solas.map((sola, index) => (
                        <div
                            key={index}
                            className={`card animate-in delay-${(index + 1) * 100}`}
                            style={{
                                flex: '1 1 300px',
                                maxWidth: '350px',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                                e.currentTarget.style.color = 'white';
                                const icon = e.currentTarget.querySelector('.icon');
                                if (icon) icon.style.color = 'var(--color-accent)';
                                const desc = e.currentTarget.querySelector('.desc');
                                if (desc) desc.style.color = '#e2e8f0';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                                e.currentTarget.style.color = 'var(--color-text)';
                                const icon = e.currentTarget.querySelector('.icon');
                                if (icon) icon.style.color = 'var(--color-primary)';
                                const desc = e.currentTarget.querySelector('.desc');
                                if (desc) desc.style.color = 'var(--color-text-muted)';
                            }}
                        >
                            <div className="icon" style={{
                                margin: '0 auto 1.5rem',
                                color: 'var(--color-primary)',
                                transition: 'color 0.3s'
                            }}>
                                {sola.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', fontFamily: 'var(--font-heading)' }}>
                                {t(`solas.${sola.key}`)}
                            </h3>
                            <p className="desc" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }}>
                                {t(`solas.${sola.key}_desc`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FiveSolas;
