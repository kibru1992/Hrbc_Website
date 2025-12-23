import { Youtube, ExternalLink, PlayCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Sermons = () => {
    const { t } = useTranslation();

    // Placeholder data - in a real app, this might come from the YouTube API
    const recentSermons = [
        { title: "The Sovereignty of God", date: "Dec 17, 2023", preacher: "Pastor [Name]" },
        { title: "Justification by Faith", date: "Dec 10, 2023", preacher: "Pastor [Name]" },
        { title: "The Holiness of God", date: "Dec 03, 2023", preacher: "Pastor [Name]" },
    ];

    return (
        <div>
            {/* Hero */}
            <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container animate-in">
                    <h1 style={{ color: 'white' }}>{t('sermons.title')}</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#cbd5e1' }}>
                        {t('sermons.subtitle')}
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">

                    {/* Featured Sermon */}
                    <div className="animate-in delay-100" style={{ marginBottom: '4rem' }}>
                        <h2 className="mb-4" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <PlayCircle size={28} color="var(--color-accent)" />
                            {t('sermons.featured')}
                        </h2>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', boxShadow: 'var(--shadow-lg)' }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                src="https://www.youtube.com/watch?v=PtCkU-S5zAw&list=PLwIqrzFylL5iIMRCkSZNVtkeZ7nslzpeU" // Using a generic playlist or video ID
                                title="Latest Sermon"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Recent Messages Grid */}
                    <div className="animate-in delay-200">
                        <h2 className="mb-4">{t('sermons.recent')}</h2>
                        <div className="grid md:grid-cols-3" style={{ gap: '2rem' }}>
                            {recentSermons.map((sermon, index) => (
                                <div key={index} className="card" style={{ padding: '0', overflow: 'hidden' }}>
                                    <div style={{ backgroundColor: '#1e293b', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
                                        <Youtube size={48} />
                                    </div>
                                    <div style={{ padding: '1.5rem' }}>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{sermon.title}</h3>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>{sermon.preacher}</p>
                                        <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{sermon.date}</p>
                                        <a href="https://www.youtube.com/watch?v=PtCkU-S5zAw&list=PLwIqrzFylL5iIMRCkSZNVtkeZ7nslzpeU" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.875rem' }}>
                                            {t('sermons.watch_on_youtube')} <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Channel Button */}
                    <div className="text-center animate-in delay-300" style={{ marginTop: '4rem' }}>
                        <a
                            href="https://www.youtube.com/@HawassaReformedBaptistChurch"
                            target="_blank"
                            rel="noreferrer"
                            className="btn"
                            style={{ backgroundColor: '#FF0000', color: 'white', display: 'inline-flex', gap: '0.75rem', fontSize: '1rem' }}
                        >
                            <Youtube size={24} />
                            {t('sermons.visit_channel')}
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Sermons;
