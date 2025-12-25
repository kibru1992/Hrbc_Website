import { useTranslation } from 'react-i18next';

const Ministries = () => {
    const { t } = useTranslation();

    const ministries = [
        {
            title: t('ministries.mens_title'),
            description: t('ministries.mens_desc'),
            time: `${t('ministries.monthly')}`
        },
        {
            title: t('ministries.womens_title'),
            description: t('ministries.womens_desc'),
            time: `${t('ministries.monthly')}`
        },
        {
            title: t('ministries.sunday_school_title'),
            description: t('ministries.sunday_school_desc'),
            time: `${t('ministries.sundays')}`
        },
        {
            title: t('ministries.evangelism_title'),
            description: t('ministries.evangelism_desc'),
            time: `${t('ministries.weekly')}`
        }
    ];

    return (
        <div>
            <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ color: 'white' }}>{t('ministries.title')}</h1>
                    <p>{t('ministries.subtitle')}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid md:grid-cols-2" style={{ gap: '2rem' }}>
                        {ministries.map((m, index) => (
                            <div key={index} className="card" style={{ padding: '2.5rem' }}>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{m.title}</h3>
                                <p style={{ marginBottom: '1.5rem', color: '#475569' }}>{m.description}</p>
                                <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: '#f1f5f9', borderRadius: '4px', fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-secondary)' }}>
                                    {m.time}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ministries;
