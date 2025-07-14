# GitHub Upload Inštrukcie pre MB Panónska Dashboard

## 🔧 **Manuálne Nahranie na GitHub**

Keďže nemám prístup k vášmu GitHub účtu, môžete nahrať dashboard manuálne:

### **Metóda 1: GitHub Web Interface**

1. **Vytvorte nový repository na GitHub:**
   - Choďte na https://github.com
   - Kliknite "New repository"
   - Názov: `mb-panonska-intelligence-dashboard`
   - Popis: `Mercedes-Benz Panónska Market Intelligence Dashboard`
   - Nastavte ako Public alebo Private
   - Neklikajte "Initialize with README" (už máme)

2. **Stiahnite súbory z dashboard:**
   - Všetky súbory sú v: `/home/ubuntu/mb-panonska-intelligence-dashboard/`
   - Môžete ich stiahnuť ako ZIP archív

3. **Nahrajte súbory:**
   - V novom GitHub repo kliknite "uploading an existing file"
   - Drag & drop všetky súbory
   - Commit message: "🚀 Initial commit: MB Panónska Intelligence Dashboard"

### **Metóda 2: Git Commands (ak máte Git lokálne)**

```bash
# Klonujte prázdny repository
git clone https://github.com/[YOUR_USERNAME]/mb-panonska-intelligence-dashboard.git
cd mb-panonska-intelligence-dashboard

# Skopírujte všetky súbory z dashboard projektu
# (súbory sú pripravené v /home/ubuntu/mb-panonska-intelligence-dashboard/)

# Pridajte súbory
git add .
git commit -m "🚀 Initial commit: Mercedes-Benz Panónska Intelligence Dashboard"
git push origin main
```

---

## 📁 **Súbory Pripravené na Upload**

### **Hlavné Súbory:**
- ✅ `README.md` - Kompletná dokumentácia
- ✅ `package.json` - Dependencies a scripts
- ✅ `vite.config.js` - Build konfigurácia
- ✅ `.gitignore` - Git ignore rules
- ✅ `LICENSE` - MIT licencia

### **Source Code:**
- ✅ `src/App.jsx` - Hlavná aplikácia
- ✅ `src/App.css` - Všetky štýly
- ✅ `src/main.jsx` - Entry point
- ✅ `index.html` - HTML template

### **Konfiguračné Súbory:**
- ✅ `eslint.config.js` - Linting rules
- ✅ `jsconfig.json` - JavaScript config
- ✅ `components.json` - UI components config

---

## 🎯 **Repository Nastavenia**

### **Odporúčané Nastavenia:**
- **Názov:** `mb-panonska-intelligence-dashboard`
- **Popis:** `Mercedes-Benz Panónska Market Intelligence Dashboard - Real-time KPI monitoring, competitive analysis, and actionable insights`
- **Visibility:** Public (pre demo) alebo Private (pre internal use)
- **Topics:** `mercedes-benz`, `dashboard`, `react`, `market-intelligence`, `automotive`

### **Branch Protection:**
- Nastavte `main` ako default branch
- Povoľte branch protection rules
- Vyžadujte pull request reviews

---

## 📊 **GitHub Features Setup**

### **Issues Templates:**
Vytvorte templates pre:
- 🐛 Bug Report
- ✨ Feature Request  
- 📈 Data Source Request
- 🔧 Technical Issue

### **GitHub Actions (CI/CD):**
```yaml
# .github/workflows/deploy.yml
name: Deploy Dashboard
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install --legacy-peer-deps
      - run: npm run build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### **GitHub Pages:**
- Povoľte GitHub Pages v Settings
- Source: GitHub Actions
- Custom domain (optional): `dashboard.mb-panonska.sk`

---

## 🔐 **Secrets Management**

### **Repository Secrets:**
```
VITE_API_KEY=your_api_key_here
VITE_CRM_ENDPOINT=https://api.mb-panonska.sk
VITE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### **Environment Variables:**
- Development: `.env.development`
- Production: `.env.production`
- Testing: `.env.test`

---

## 👥 **Collaborators Setup**

### **Odporúčané Role:**
- **Admin:** Project Manager, Tech Lead
- **Maintain:** Senior Developers
- **Write:** Developers, Data Analysts
- **Read:** Stakeholders, Management

### **Teams:**
- `@mb-panonska/intelligence-team`
- `@mb-panonska/developers`
- `@mb-panonska/management`

---

## 📈 **GitHub Analytics**

### **Insights Tracking:**
- Code frequency
- Commit activity
- Contributors
- Traffic (views, clones)
- Popular content

### **Project Management:**
- GitHub Projects board
- Milestones pre releases
- Labels pre issue categorization

---

## 🚀 **Release Management**

### **Versioning Strategy:**
- `v1.0.0` - Initial release
- `v1.1.0` - API integrations
- `v1.2.0` - Advanced features
- `v2.0.0` - Major redesign

### **Release Notes Template:**
```markdown
## 🚀 v1.0.0 - Initial Release

### ✨ New Features
- Real-time KPI dashboard
- Competitive intelligence monitoring
- Social media content management

### 📊 Data Sources
- Statista market data integration
- Industry benchmarks
- Automated weekly updates

### 🎯 Ready For
- Live demo presentations
- Stakeholder reviews
- Production deployment
```

---

## 📞 **Support & Maintenance**

### **Documentation:**
- Wiki pages pre advanced topics
- API documentation
- Deployment guides
- Troubleshooting

### **Community:**
- Discussions pre Q&A
- Feature requests
- Best practices sharing

---

## ✅ **Checklist Pre Upload**

- [ ] Všetky súbory skopírované
- [ ] README.md aktualizovaný
- [ ] .gitignore nastavený
- [ ] LICENSE súbor pridaný
- [ ] Package.json kompletný
- [ ] Build testovaný lokálne
- [ ] Environment variables nastavené
- [ ] Repository description pridaný
- [ ] Topics/tags nastavené
- [ ] Branch protection enabled
- [ ] Collaborators pridaní

---

**Po nahratí na GitHub bude dashboard dostupný pre:**
- ✅ Version control a collaboration
- ✅ Automated deployments
- ✅ Issue tracking a project management
- ✅ Code reviews a quality assurance
- ✅ Documentation a knowledge sharing
- ✅ Community contributions

**GitHub URL bude:** `https://github.com/[YOUR_USERNAME]/mb-panonska-intelligence-dashboard`

