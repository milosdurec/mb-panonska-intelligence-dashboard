import React, { useState, useEffect } from 'react';
import './App.css';

// Mock data based on our analysis
const mockData = {
  marketData: {
    totalMarketSize: "2.76 mld. EUR",
    expectedSales: "103,790 vozidiel",
    averagePrice: "26,570 EUR",
    luxurySegmentGrowth: "+8.5%",
    mercedesMarketShare: "13.2%",
    lastUpdated: "14. júl 2025"
  },
  kpiMetrics: [
    { name: "Conversion Rate", current: "18.5%", target: "24.8%", trend: "+3.2%", status: "warning" },
    { name: "Customer Satisfaction", current: "4.4/5", target: "4.7/5", trend: "+0.3", status: "good" },
    { name: "Brand Sentiment", current: "0.72", target: "0.78", trend: "+0.05", status: "good" },
    { name: "Service Revenue", current: "285 EUR", target: "340 EUR", trend: "+19%", status: "excellent" },
    { name: "Market Share", current: "2.8%", target: "3.5%", trend: "+0.4%", status: "warning" },
    { name: "Lead Response Time", current: "4.2 hod", target: "<2 hod", trend: "-1.1h", status: "good" }
  ],
  competitors: [
    { name: "Hedin Automotive", priceChanges: false, newCampaigns: 0, socialActivity: 0.5, inventory: 70, status: "stable" },
    { name: "BMW Slovakia", priceChanges: false, newCampaigns: 1, socialActivity: 0.3, inventory: 164, status: "stable" },
    { name: "Porsche Slovakia", priceChanges: true, newCampaigns: 2, socialActivity: 0.4, inventory: 199, status: "active" }
  ],
  alerts: [
    { level: "WARNING", message: "Porsche Slovakia: Detekované cenové zmeny", timestamp: "14.7.2025 06:30" },
    { level: "INFO", message: "Service queries +22% rast - príležitosť", timestamp: "14.7.2025 06:15" },
    { level: "INFO", message: "Luxury segment +8.5% rast", timestamp: "14.7.2025 06:10" }
  ],
  socialMediaContent: [
    {
      platform: "Facebook",
      time: "Zajtra 16:00",
      content: "🔧 MERCEDES-BENZ SERVIS PANÓNSKA - VAŠA SPOKOJNOSŤ JE NAŠA PRIORITA\n\n✨ Prečo si zákazníci vyberajú náš servis?\n🎯 Originálne náhradné diely Mercedes-Benz\n⚡ Express servis do 2 hodín\n🏆 Certifikovaní technici s 15+ rokmi skúseností\n📱 Online rezervácia termínov 24/7",
      hashtags: "#MercedesBenzServis #BratislavaServis #QualityService"
    },
    {
      platform: "Instagram",
      time: "Streda 11:00",
      content: "Behind the scenes Reel - 60 sekúnd\n0-15s: Technik kontroluje Mercedes\n15-30s: Originálne diely\n30-45s: Spokojný zákazník\n45-60s: Logo a kontakt",
      hashtags: "#MercedesBenz #BehindTheScenes #QualityCare #Bratislava"
    },
    {
      platform: "LinkedIn",
      time: "Utorok 9:00",
      content: "FLEET SERVICES MERCEDES-BENZ PANÓNSKA 🚗💼\n\nSpravujete firemnú flotilu? Ponúkame komplexné riešenia:\n✅ Skupinové zľavy až 15%\n✅ Prioritný servis pre firemné vozidlá\n✅ Flexibilné financovanie a leasing",
      hashtags: "#FleetServices #B2B #MercedesBenz #BusinessSolutions"
    }
  ]
};

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'excellent': return '#10B981';
      case 'good': return '#3B82F6';
      case 'warning': return '#F59E0B';
      case 'critical': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getAlertIcon = (level) => {
    switch(level) {
      case 'CRITICAL': return '🔴';
      case 'WARNING': return '🟡';
      case 'INFO': return '🔵';
      default: return '⚪';
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <h1>Mercedes-Benz Panónska</h1>
            <p>Market Intelligence Dashboard</p>
          </div>
          <div className="time-section">
            <div className="current-time">{currentTime.toLocaleString('sk-SK')}</div>
            <div className="last-update">Posledná aktualizácia: {mockData.marketData.lastUpdated}</div>
          </div>
        </div>
      </header>

      <nav className="navigation">
        <button 
          className={activeTab === 'dashboard' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Dashboard
        </button>
        <button 
          className={activeTab === 'market' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setActiveTab('market')}
        >
          📈 Trhové Údaje
        </button>
        <button 
          className={activeTab === 'competitors' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setActiveTab('competitors')}
        >
          🔍 Konkurencia
        </button>
        <button 
          className={activeTab === 'actions' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setActiveTab('actions')}
        >
          🎯 Akčné Kroky
        </button>
        <button 
          className={activeTab === 'social' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setActiveTab('social')}
        >
          📱 Social Media
        </button>
      </nav>

      <main className="main-content">
        {activeTab === 'dashboard' && (
          <div className="dashboard">
            <div className="alerts-section">
              <h2>🚨 Aktuálne Alerty</h2>
              <div className="alerts-grid">
                {mockData.alerts.map((alert, index) => (
                  <div key={index} className={`alert alert-${alert.level.toLowerCase()}`}>
                    <span className="alert-icon">{getAlertIcon(alert.level)}</span>
                    <div className="alert-content">
                      <div className="alert-message">{alert.message}</div>
                      <div className="alert-time">{alert.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="kpi-section">
              <h2>📊 Kľúčové KPI Metriky</h2>
              <div className="kpi-grid">
                {mockData.kpiMetrics.map((kpi, index) => (
                  <div key={index} className="kpi-card">
                    <div className="kpi-header">
                      <h3>{kpi.name}</h3>
                      <div 
                        className="kpi-status" 
                        style={{ backgroundColor: getStatusColor(kpi.status) }}
                      ></div>
                    </div>
                    <div className="kpi-values">
                      <div className="kpi-current">{kpi.current}</div>
                      <div className="kpi-target">Cieľ: {kpi.target}</div>
                      <div className="kpi-trend">{kpi.trend}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'market' && (
          <div className="market-data">
            <h2>📈 Slovenský Automotive Trh 2025</h2>
            <div className="market-grid">
              <div className="market-card">
                <h3>Celkový Market Size</h3>
                <div className="market-value">{mockData.marketData.totalMarketSize}</div>
                <p>Passenger cars trh na Slovensku</p>
              </div>
              <div className="market-card">
                <h3>Očakávané Predaje</h3>
                <div className="market-value">{mockData.marketData.expectedSales}</div>
                <p>Celkový počet vozidiel v roku 2025</p>
              </div>
              <div className="market-card">
                <h3>Priemerná Cena</h3>
                <div className="market-value">{mockData.marketData.averagePrice}</div>
                <p>Na jedno vozidlo</p>
              </div>
              <div className="market-card">
                <h3>Luxury Segment</h3>
                <div className="market-value">{mockData.marketData.luxurySegmentGrowth}</div>
                <p>Ročný rast segmentu</p>
              </div>
              <div className="market-card">
                <h3>Mercedes Market Share</h3>
                <div className="market-value">{mockData.marketData.mercedesMarketShare}</div>
                <p>Podiel na slovenskom trhu</p>
              </div>
              <div className="market-card">
                <h3>CAGR 2025-2029</h3>
                <div className="market-value">0.43%</div>
                <p>Stabilný rast trhu</p>
              </div>
            </div>

            <div className="market-insights">
              <h3>💡 Kľúčové Insights</h3>
              <ul>
                <li>SUV segment dominuje s 53% podielom trhu (1.47 mld. EUR)</li>
                <li>Škoda má najväčší market share (21.2%)</li>
                <li>Luxury segment rastie najrýchlejšie (+8.5% ročne)</li>
                <li>Service queries rastú o +22% (najväčšia príležitosť)</li>
                <li>Mercedes má silnú brand recognition (1,200 searches/mesiac)</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'competitors' && (
          <div className="competitors">
            <h2>🔍 Competitive Intelligence</h2>
            <div className="competitors-grid">
              {mockData.competitors.map((competitor, index) => (
                <div key={index} className="competitor-card">
                  <div className="competitor-header">
                    <h3>{competitor.name}</h3>
                    <div className={`competitor-status status-${competitor.status}`}>
                      {competitor.status}
                    </div>
                  </div>
                  <div className="competitor-metrics">
                    <div className="metric">
                      <span>Cenové zmeny:</span>
                      <span className={competitor.priceChanges ? 'alert-yes' : 'alert-no'}>
                        {competitor.priceChanges ? '✅ Detekované' : '❌ Žiadne'}
                      </span>
                    </div>
                    <div className="metric">
                      <span>Nové kampane:</span>
                      <span>{competitor.newCampaigns}</span>
                    </div>
                    <div className="metric">
                      <span>Social aktivita:</span>
                      <span>{competitor.socialActivity}/1.0</span>
                    </div>
                    <div className="metric">
                      <span>Inventory:</span>
                      <span>{competitor.inventory} vozidiel</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="competitive-summary">
              <h3>⚠️ Competitive Alerts</h3>
              <div className="alert-item">
                <strong>Porsche Slovakia:</strong> Vysoká aktivita - 2 nové kampane + cenové zmeny. Vyžaduje monitoring.
              </div>
              <div className="alert-item">
                <strong>BMW Slovakia:</strong> Stabilná pozícia, 1 aktívna kampaň.
              </div>
              <div className="alert-item">
                <strong>Hedin Automotive:</strong> Konzervatívny prístup, žiadne významné zmeny.
              </div>
            </div>
          </div>
        )}

        {activeTab === 'actions' && (
          <div className="actions">
            <h2>🎯 Akčné Kroky a Odporúčania</h2>
            
            <div className="action-section">
              <h3>🚀 Okamžité Akcie (0-7 dní)</h3>
              <div className="action-grid">
                <div className="action-card priority-high">
                  <h4>Service Expansion</h4>
                  <p><strong>Investícia:</strong> 46,000 EUR</p>
                  <p><strong>Očakávaný ROI:</strong> 260% (165,600 EUR/rok)</p>
                  <p><strong>Payback:</strong> 3.3 mesiaca</p>
                  <ul>
                    <li>Rozšíriť otváracie hodiny servisu</li>
                    <li>Express service lane implementácia</li>
                    <li>Online rezervačný systém</li>
                  </ul>
                </div>
                
                <div className="action-card priority-medium">
                  <h4>SEO Optimalizácia</h4>
                  <p><strong>Investícia:</strong> 13,800 EUR</p>
                  <p><strong>Očakávaný ROI:</strong> 333% (59,800 EUR/rok)</p>
                  <p><strong>Payback:</strong> 2.8 mesiaca</p>
                  <ul>
                    <li>Landing page: /servis-bratislava</li>
                    <li>Target: "mercedes servis bratislava" (+22%)</li>
                    <li>Google Ads kampane setup</li>
                  </ul>
                </div>

                <div className="action-card priority-medium">
                  <h4>Competitive Response</h4>
                  <p><strong>Investícia:</strong> 23,000 EUR</p>
                  <p><strong>Očakávaný ROI:</strong> 280% (87,400 EUR/rok)</p>
                  <p><strong>Payback:</strong> 3.2 mesiaca</p>
                  <ul>
                    <li>Monitoring Porsche aktivít</li>
                    <li>Cenová stratégia adjustment</li>
                    <li>Counter-campaign development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="action-section">
              <h3>📅 Weekly Timeline</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date">Pondelok 15.7</div>
                  <div className="timeline-content">
                    <p>✅ Google Alerts setup pre Porsche monitoring</p>
                    <p>✅ Google My Business profil update</p>
                    <p>✅ Social media content kalendár</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">Utorok 16.7</div>
                  <div className="timeline-content">
                    <p>✅ Facebook Service post (16:00)</p>
                    <p>✅ Google Ads Service kampaň launch</p>
                    <p>✅ Email kampaň: Service Reminder</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">Streda 17.7</div>
                  <div className="timeline-content">
                    <p>✅ Instagram Reel: Behind the Scenes (11:00)</p>
                    <p>✅ Landing page /servis-bratislava development</p>
                    <p>✅ Competitive monitoring setup</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="roi-summary">
              <h3>💰 ROI Súhrn (3 mesiace)</h3>
              <div className="roi-grid">
                <div className="roi-card">
                  <h4>Celková Investícia</h4>
                  <div className="roi-value">82,800 EUR</div>
                </div>
                <div className="roi-card">
                  <h4>Očakávaný Výnos</h4>
                  <div className="roi-value">312,800 EUR</div>
                </div>
                <div className="roi-card">
                  <h4>ROI</h4>
                  <div className="roi-value">278%</div>
                </div>
                <div className="roi-card">
                  <h4>Payback Period</h4>
                  <div className="roi-value">3.1 mesiaca</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'social' && (
          <div className="social-media">
            <h2>📱 Social Media Content Plán</h2>
            <div className="social-grid">
              {mockData.socialMediaContent.map((post, index) => (
                <div key={index} className="social-card">
                  <div className="social-header">
                    <h3>{post.platform}</h3>
                    <div className="social-time">{post.time}</div>
                  </div>
                  <div className="social-content">
                    <pre>{post.content}</pre>
                  </div>
                  <div className="social-hashtags">
                    {post.hashtags}
                  </div>
                  <button className="copy-btn" onClick={() => navigator.clipboard.writeText(post.content + '\n\n' + post.hashtags)}>
                    📋 Kopírovať
                  </button>
                </div>
              ))}
            </div>

            <div className="social-strategy">
              <h3>📊 Social Media Stratégia</h3>
              <div className="strategy-grid">
                <div className="strategy-card">
                  <h4>Facebook</h4>
                  <ul>
                    <li>Service excellence focus</li>
                    <li>Luxury lifestyle content</li>
                    <li>Customer testimonials</li>
                    <li>Budget: 350 EUR/týždeň</li>
                  </ul>
                </div>
                <div className="strategy-card">
                  <h4>Instagram</h4>
                  <ul>
                    <li>Behind the scenes Reels</li>
                    <li>Visual storytelling</li>
                    <li>Hashtag optimization</li>
                    <li>Influencer partnerships</li>
                  </ul>
                </div>
                <div className="strategy-card">
                  <h4>LinkedIn</h4>
                  <ul>
                    <li>B2B fleet services</li>
                    <li>Professional content</li>
                    <li>Industry insights</li>
                    <li>Budget: 100 EUR/mesiac</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content-calendar">
              <h3>📅 Content Kalendár</h3>
              <div className="calendar-grid">
                <div className="calendar-day">
                  <div className="day-header">Pondelok</div>
                  <div className="day-content">Market Intelligence Report</div>
                </div>
                <div className="calendar-day">
                  <div className="day-header">Utorok</div>
                  <div className="day-content">Facebook Service Post + LinkedIn B2B</div>
                </div>
                <div className="calendar-day">
                  <div className="day-header">Streda</div>
                  <div className="day-content">Instagram Reel</div>
                </div>
                <div className="calendar-day">
                  <div className="day-header">Štvrtok</div>
                  <div className="day-content">Customer Stories</div>
                </div>
                <div className="calendar-day">
                  <div className="day-header">Piatok</div>
                  <div className="day-content">Facebook Luxury Lifestyle</div>
                </div>
                <div className="calendar-day">
                  <div className="day-header">Víkend</div>
                  <div className="day-content">Instagram Testimonials</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Mercedes-Benz Panónska Market Intelligence Dashboard</p>
          <p>Automatizovaná úloha: Každý pondelok 6:00 | Ďalšia aktualizácia: 21. júl 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

