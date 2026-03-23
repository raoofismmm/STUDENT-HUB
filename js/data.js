// ===== SHARED DATA =====
const OPPORTUNITIES = [
  { id:1, title:"Google STEP Internship", org:"Google", type:"internship", location:"Remote", deadline:"2025-09-01", desc:"Software engineering internship for 1st/2nd year students.", stipend:"₹80,000/month", tags:["tech","coding"] },
  { id:2, title:"National Merit Scholarship", org:"UGC India", type:"scholarship", location:"India", deadline:"2025-08-15", desc:"Merit-based scholarship for undergraduate students.", amount:"₹1,00,000/year", tags:["merit","undergraduate"] },
  { id:3, title:"Campus Brand Ambassador", org:"Swiggy", type:"job", location:"Hybrid", deadline:"2025-07-30", desc:"Represent Swiggy on your campus. Flexible hours.", stipend:"₹15,000/month", tags:["marketing","parttime"] },
  { id:4, title:"NASA Space Apps Challenge", org:"NASA", type:"competition", location:"Online", deadline:"2025-10-05", desc:"Global hackathon solving space & earth challenges.", prize:"Global recognition + prizes", tags:["hackathon","space"] },
  { id:5, title:"UI/UX Design Fundamentals", org:"Coursera × Google", type:"course", location:"Online", deadline:"Open", desc:"Beginner-friendly certified course on design thinking.", fee:"Free (with certificate)", tags:["design","free"] },
  { id:6, title:"Microsoft Engage Program", org:"Microsoft", type:"internship", location:"Hybrid – Bengaluru", deadline:"2025-08-20", desc:"6-week mentorship + internship for engineering students.", stipend:"₹60,000/month", tags:["tech","mentorship"] },
  { id:7, title:"PM Scholarship Scheme", org:"Govt of India", type:"scholarship", location:"India", deadline:"2025-09-10", desc:"For wards of ex-servicemen. 4-year coverage.", amount:"₹36,000/year", tags:["government","defence"] },
  { id:8, title:"Library Assistant – Part Time", org:"City Central Library", type:"job", location:"On-site", deadline:"2025-07-25", desc:"Assist with cataloguing, events & reader queries.", stipend:"₹8,000/month", tags:["parttime","library"] },
  { id:9, title:"Smart India Hackathon 2025", org:"MoE India", type:"competition", location:"Pan India", deadline:"2025-08-01", desc:"National hackathon for tech & non-tech problem statements.", prize:"₹1,00,000 per winning team", tags:["hackathon","national"] },
  { id:10, title:"Python for Data Science", org:"edX × IBM", type:"course", location:"Online", deadline:"Open", desc:"Hands-on Python, pandas, and data viz skills.", fee:"Free to audit", tags:["python","data","free"] },
  { id:11, title:"Amazon Future Engineer", org:"Amazon", type:"internship", location:"Remote", deadline:"2025-10-01", desc:"Paid internship + full-time offer for top performers.", stipend:"₹1,00,000/month", tags:["tech","top"] },
  { id:12, title:"Essay Writing Competition", org:"Times of India", type:"competition", location:"Online", deadline:"2025-07-20", desc:"Write on 'India @ 2047'. Open to all college students.", prize:"₹25,000 + publication", tags:["writing","arts"] },
];

const TYPE_LABELS = {
  internship: "Internship",
  scholarship: "Scholarship",
  job: "Part-Time Job",
  competition: "Competition",
  course: "Course",
};

function getUser() {
  try { return JSON.parse(localStorage.getItem('sh_user')) || null; } catch { return null; }
}
function setUser(u) { localStorage.setItem('sh_user', JSON.stringify(u)); }

function getSaved() {
  try { return JSON.parse(localStorage.getItem('sh_saved')) || []; } catch { return []; }
}
function toggleSave(id) {
  let saved = getSaved();
  if (saved.includes(id)) { saved = saved.filter(x => x !== id); } else { saved.push(id); }
  localStorage.setItem('sh_saved', JSON.stringify(saved));
  return saved.includes(id);
}

function getApplications() {
  try { return JSON.parse(localStorage.getItem('sh_apps')) || []; } catch { return []; }
}
function addApplication(opp) {
  let apps = getApplications();
  if (!apps.find(a => a.id === opp.id)) {
    apps.push({ ...opp, status: "applied", appliedOn: new Date().toLocaleDateString('en-IN') });
    localStorage.setItem('sh_apps', JSON.stringify(apps));
    return true;
  }
  return false;
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function createCard(opp) {
  const saved = getSaved().includes(opp.id);
  return `
    <div class="opp-card" data-id="${opp.id}">
      <span class="opp-type type-${opp.type}">${TYPE_LABELS[opp.type]}</span>
      <h3>${opp.title}</h3>
      <p class="opp-meta">🏢 ${opp.org} &nbsp;·&nbsp; 📍 ${opp.location}</p>
      <p style="font-size:0.85rem;color:var(--muted)">${opp.desc}</p>
      ${opp.stipend ? `<p style="font-size:0.82rem;color:var(--accent3)">💰 ${opp.stipend}</p>` : ''}
      ${opp.amount ? `<p style="font-size:0.82rem;color:var(--accent2)">🎓 ${opp.amount}</p>` : ''}
      ${opp.prize ? `<p style="font-size:0.82rem;color:#ff9f64">🏆 ${opp.prize}</p>` : ''}
      ${opp.fee ? `<p style="font-size:0.82rem;color:var(--accent3)">📘 ${opp.fee}</p>` : ''}
      <p class="opp-deadline">⏳ Deadline: ${opp.deadline}</p>
      <div class="opp-actions">
        <button class="btn-sm btn-apply" onclick="applyNow(${opp.id})">Apply Now</button>
        <button class="btn-sm btn-save" id="save-${opp.id}" onclick="handleSave(${opp.id})">${saved ? '✓ Saved' : 'Save'}</button>
      </div>
    </div>
  `;
}

function applyNow(id) {
  const opp = OPPORTUNITIES.find(o => o.id === id);
  const user = getUser();
  if (!user) { showToast('Please login to apply!'); return; }
  const added = addApplication(opp);
  showToast(added ? `✅ Applied for "${opp.title}"!` : '⚠️ Already applied!');
}

function handleSave(id) {
  const user = getUser();
  if (!user) { showToast('Please login to save!'); return; }
  const isSaved = toggleSave(id);
  const btn = document.getElementById(`save-${id}`);
  if (btn) btn.textContent = isSaved ? '✓ Saved' : 'Save';
  const opp = OPPORTUNITIES.find(o => o.id === id);
  showToast(isSaved ? `🔖 Saved "${opp.title}"` : 'Removed from saved');
}
