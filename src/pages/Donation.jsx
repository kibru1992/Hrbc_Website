import { Building, CreditCard, Gift, HeartHandshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Donation = () => {
    const { t } = useTranslation();

    return (
        <div>
            {/* Hero */}
            <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container animate-in">
                    <h1 style={{ color: 'white' }}>{t('donation.title')}</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#cbd5e1' }}>
                        {t('donation.subtitle')}
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <div style={{ display: 'inline-flex', padding: '0.5rem', backgroundColor: '#e0f2fe', borderRadius: '50%', marginBottom: '1rem' }}>
                                <HeartHandshake size={32} color="var(--color-primary)" />
                            </div>
                            <h2 className="mb-2">{t('donation.biblical_basis.title')}</h2>
                            <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>{t('donation.biblical_basis.intro')}</p>

                            <div className="grid md:grid-cols-2" style={{ gap: '2rem', textAlign: 'left' }}>
                                <div className="card" style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>
                                        {t('donation.biblical_basis.stewardship')}
                                    </h3>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: '1.6' }}>
                                        {t('donation.biblical_basis.stewardship_desc')}
                                    </p>
                                </div>
                                <div className="card" style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>
                                        {t('donation.biblical_basis.generosity')}
                                    </h3>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: '1.6' }}>
                                        {t('donation.biblical_basis.generosity_desc')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '4rem' }}>
                            <h2 className="mb-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                                <CreditCard size={32} color="var(--color-accent)" />
                                {t('donation.ways_to_give')}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2" style={{ gap: '2rem' }}>
                            {/* Bank Transfer */}
                            <div className="card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ padding: '0.75rem', backgroundColor: '#e0f2fe', borderRadius: '50%', color: 'var(--color-primary)' }}>
                                        <Building size={24} />
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{t('donation.bank_transfer')}</h3>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                        <p style={{ fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>{t('donation.bank_name')}</p>
                                        <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>{t('donation.account_holder')}</p>
                                        <p style={{ fontFamily: 'monospace', fontSize: '1.1rem', fontWeight: 'bold', color: '#334155' }}>
                                            {t('donation.account_number')}
                                        </p>
                                    </div>

                                    <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                        <p style={{ fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>{t('donation.bank_name_2')}</p>
                                        <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>{t('donation.account_holder')}</p>
                                        <p style={{ fontFamily: 'monospace', fontSize: '1.1rem', fontWeight: 'bold', color: '#334155' }}>
                                            {t('donation.account_number_2')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* In Person */}
                            <div className="card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ padding: '0.75rem', backgroundColor: '#f0fdf4', borderRadius: '50%', color: '#15803d' }}>
                                        <Gift size={24} />
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{t('donation.in_person')}</h3>
                                </div>
                                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                                    {t('donation.in_person_desc')}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donation;
