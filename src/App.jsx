import { useMemo, useState } from "react";
import "./App.css";

export default function App() {
  const [category, setCategory] = useState("Website");
  const [siteType, setSiteType] = useState("Business Website");
  const [pages, setPages] = useState("1-3 Pages");
  const [needDomain, setNeedDomain] = useState("No");
  const [needHosting, setNeedHosting] = useState("No");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  const fee = useMemo(() => {
    if (category === "Website") return 2000;
    if (category === "App Development") return 3000;
    return 2500;
  }, [category]);

  // ✅ Smooth scroll function
  function goToApply() {
    const el = document.getElementById("applyForm");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div style={styles.page}>
      {/* TOP BAR */}
      <div style={styles.topBar}>
        <div style={styles.brand} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img
            src="/srtech-innovations/logo.png"
            alt="SRTech"
            style={styles.logo}
          />
          <div>
            <div style={styles.brandName}>SRTech Innovations</div>
            <div style={styles.brandTag}>Websites • Apps • Tech Tools</div>
          </div>
        </div>

        <div style={styles.topBtns}>
          <button style={styles.linkBtn} onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}>
            Contact
          </button>

          <button style={styles.primaryBtn} onClick={goToApply}>
            Apply Now
          </button>
        </div>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <div style={styles.heroLeft}>
          <div style={styles.badge}>⚡ Fast • Premium • Affordable</div>

          <h1 style={styles.h1}>
            Build your Website / App <br /> with SRTech Innovations 🚀
          </h1>

          <p style={styles.p}>
            We create modern, fast and mobile-friendly websites, Android apps and
            custom tech tools for businesses & startups.
          </p>

          <div style={styles.heroActions}>
            <button style={styles.primaryBtnBig} onClick={goToApply}>
              Apply for Project
            </button>

            <button
              style={styles.secondaryBtnBig}
              onClick={() => {
                const el = document.getElementById("pricing");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Pricing
            </button>
          </div>

          <div style={styles.statsRow}>
            <div style={styles.statCard}>
              <div style={styles.statTitle}>Premium UI</div>
              <div style={styles.statSub}>Modern clean design</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statTitle}>Fast Delivery</div>
              <div style={styles.statSub}>Quick project setup</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statTitle}>Support</div>
              <div style={styles.statSub}>After delivery help</div>
            </div>
          </div>
        </div>

        <div style={styles.heroRight}>
          <div style={styles.coolCard}>
            <div style={styles.coolCardTitle}>What we build 🔥</div>
            <div style={styles.coolList}>
              <div style={styles.coolItem}>✅ Business Websites</div>
              <div style={styles.coolItem}>✅ E-Commerce Stores</div>
              <div style={styles.coolItem}>✅ Android / Web Apps</div>
              <div style={styles.coolItem}>✅ Admin Panels</div>
              <div style={styles.coolItem}>✅ Tools & Automation</div>
            </div>
          </div>

          <div style={styles.contactMini}>
            <div style={styles.contactMiniTitle}>Need help?</div>
            <div style={styles.contactMiniText}>
              📞 8287156332 <br />
              📧 simranroy370@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" style={styles.section}>
        <h2 style={styles.h2}>Pricing</h2>
        <p style={styles.subText}>
          Simple fixed pricing (custom projects also available).
        </p>

        <div style={styles.grid3}>
          <div style={styles.priceCard}>
            <div style={styles.planTag}>Website</div>
            <div style={styles.planName}>Website Making</div>
            <div style={styles.price}>₹2000</div>
            <div style={styles.planDesc}>
              Business / Portfolio / Landing page
            </div>
          </div>

          <div style={{ ...styles.priceCard, ...styles.priceCardMain }}>
            <div style={styles.planTagDark}>App</div>
            <div style={styles.planName}>App Development</div>
            <div style={styles.price}>₹3000</div>
            <div style={{ ...styles.planDesc, color: "rgba(255,255,255,0.8)" }}>
              Android / Web App (basic version)
            </div>
          </div>

          <div style={styles.priceCard}>
            <div style={styles.planTag}>Tools</div>
            <div style={styles.planName}>Tech Tools</div>
            <div style={styles.price}>₹2500</div>
            <div style={styles.planDesc}>Invoice / CRM / Automation</div>
          </div>
        </div>
      </div>

      {/* APPLY FORM */}
      <div id="applyForm" style={styles.section}>
        <h2 style={styles.h2}>Apply for Project 📝</h2>
        <p style={styles.subText}>
          Fill the form. Fees will be calculated automatically.
        </p>

        <div style={styles.formWrap}>
          <div style={styles.formCard}>
            <div style={styles.formTitle}>Project Application</div>

            <div style={styles.formGrid}>
              <input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
              />

              <input
                placeholder="WhatsApp Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={styles.input}
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={styles.input}
              >
                <option>Website</option>
                <option>App Development</option>
                <option>Tech Tool</option>
              </select>

              {/* Website fields */}
              {category === "Website" && (
                <>
                  <select
                    value={siteType}
                    onChange={(e) => setSiteType(e.target.value)}
                    style={styles.input}
                  >
                    <option>Business Website</option>
                    <option>Portfolio Website</option>
                    <option>E-Commerce Website</option>
                    <option>Landing Page</option>
                  </select>

                  <select
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                    style={styles.input}
                  >
                    <option>1-3 Pages</option>
                    <option>3-5 Pages</option>
                    <option>5-10 Pages</option>
                  </select>

                  <select
                    value={needDomain}
                    onChange={(e) => setNeedDomain(e.target.value)}
                    style={styles.input}
                  >
                    <option value="No">Need Domain? (No)</option>
                    <option value="Yes">Need Domain? (Yes)</option>
                  </select>

                  <select
                    value={needHosting}
                    onChange={(e) => setNeedHosting(e.target.value)}
                    style={styles.input}
                  >
                    <option value="No">Need Hosting? (No)</option>
                    <option value="Yes">Need Hosting? (Yes)</option>
                  </select>
                </>
              )}

              {/* App fields */}
              {category === "App Development" && (
                <>
                  <select style={styles.input}>
                    <option>Android App</option>
                    <option>Web App</option>
                    <option>Android + Admin Panel</option>
                  </select>

                  <select style={styles.input}>
                    <option>Login Required</option>
                    <option>No Login</option>
                  </select>
                </>
              )}

              {/* Tech Tool fields */}
              {category === "Tech Tool" && (
                <>
                  <select style={styles.input}>
                    <option>Invoice Tool</option>
                    <option>QR Tool</option>
                    <option>CRM Tool</option>
                    <option>Custom Automation Tool</option>
                  </select>
                </>
              )}

              <textarea
                placeholder="Describe your project requirements..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                style={{ ...styles.input, minHeight: "120px" }}
              />
            </div>

            {/* FEES */}
            <div style={styles.feeBox}>
              <div style={styles.feeTitle}>Total Fees</div>
              <div style={styles.feePrice}>₹{fee}</div>
              <div style={styles.feeSub}>
                Website = ₹2000 | App Development = ₹3000 | Tools = ₹2500
              </div>
            </div>

            {/* PAYMENT QR */}
            <div style={styles.qrBox}>
              <div style={styles.qrTitle}>Pay Using QR</div>

              {/* QR image must be: public/qr.png */}
              <img
                src="/srtech-innovations/qr.png"
                alt="Payment QR"
                style={styles.qrImg}
              />

              <div style={styles.qrSub}>
                After payment, send screenshot on WhatsApp: <b>8287156332</b>
              </div>
            </div>

            <button
              onClick={() => {
                alert(
                  "Application submitted! (Demo)\n\nNext: I can connect this form to WhatsApp + Google Sheet."
                );
              }}
              style={styles.submitBtn}
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" style={styles.footer}>
        <div style={styles.footerInner}>
          <div>
            <div style={styles.footerTitle}>SRTech Innovations</div>
            <div style={styles.footerText}>
              Owner: <b>Simran Roy</b>
              <br />
              📞 8287156332
              <br />
              📧 simranroy370@gmail.com
            </div>
          </div>

          <div style={styles.footerText}>
            © {new Date().getFullYear()} SRTech Innovations. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    padding: "20px",
    background:
      "radial-gradient(circle at top, #f1f5ff 0%, #ffffff 40%, #ffffff 100%)",
    minHeight: "100vh",
  },

  topBar: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 10px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.75)",
    border: "1px solid #e5e7eb",
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: "12px",
    zIndex: 10,
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
  },

  logo: {
    height: "44px",
    width: "44px",
    borderRadius: "14px",
    border: "1px solid #e5e7eb",
    objectFit: "contain",
    background: "#fff",
    padding: "6px",
  },

  brandName: { fontWeight: 900, fontSize: "16px" },
  brandTag: { fontSize: "12px", color: "#6b7280" },

  topBtns: { display: "flex", gap: "10px", alignItems: "center" },

  linkBtn: {
    padding: "10px 14px",
    borderRadius: "14px",
    border: "1px solid #e5e7eb",
    color: "#111827",
    fontWeight: 800,
    background: "white",
    cursor: "pointer",
  },

  primaryBtn: {
    padding: "10px 14px",
    borderRadius: "14px",
    background: "#111827",
    color: "white",
    fontWeight: 900,
    border: "none",
    cursor: "pointer",
  },

  hero: {
    maxWidth: "1100px",
    margin: "22px auto 0",
    padding: "26px 10px",
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "16px",
  },

  heroLeft: {},
  heroRight: { display: "grid", gap: "12px" },

  badge: {
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: "999px",
    background: "#eef2ff",
    border: "1px solid #e5e7eb",
    fontWeight: 900,
    fontSize: "12px",
    color: "#111827",
  },

  h1: {
    marginTop: "14px",
    fontSize: "40px",
    lineHeight: 1.05,
    letterSpacing: "-0.8px",
    fontWeight: 900,
    color: "#0f172a",
  },

  p: {
    marginTop: "12px",
    fontSize: "15px",
    lineHeight: 1.7,
    color: "#475569",
    maxWidth: "560px",
  },

  heroActions: { display: "flex", gap: "10px", marginTop: "18px" },

  primaryBtnBig: {
    padding: "12px 18px",
    borderRadius: "16px",
    background: "#111827",
    color: "white",
    fontWeight: 900,
    border: "none",
    cursor: "pointer",
  },

  secondaryBtnBig: {
    padding: "12px 18px",
    borderRadius: "16px",
    border: "1px solid #e5e7eb",
    color: "#111827",
    fontWeight: 900,
    background: "white",
    cursor: "pointer",
  },

  statsRow: {
    marginTop: "18px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  },

  statCard: {
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "12px",
    background: "white",
  },

  statTitle: { fontWeight: 900, fontSize: "14px" },
  statSub: { color: "#64748b", fontSize: "12px", marginTop: "4px" },

  coolCard: {
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    padding: "16px",
    background: "white",
  },

  coolCardTitle: { fontWeight: 900, fontSize: "16px" },

  coolList: { marginTop: "10px", display: "grid", gap: "8px" },

  coolItem: {
    padding: "10px 12px",
    borderRadius: "14px",
    background: "#f8fafc",
    border: "1px solid #e5e7eb",
    fontWeight: 800,
    color: "#0f172a",
  },

  contactMini: {
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    padding: "16px",
    background: "#111827",
    color: "white",
  },

  contactMiniTitle: { fontWeight: 900 },

  contactMiniText: { marginTop: "6px", opacity: 0.9, lineHeight: 1.5 },

  section: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "40px 10px 0",
  },

  h2: { fontSize: "28px", fontWeight: 900, color: "#0f172a" },

  subText: { marginTop: "8px", color: "#64748b" },

  grid3: {
    marginTop: "18px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
  },

  priceCard: {
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    padding: "16px",
    background: "white",
  },

  priceCardMain: {
    background: "#111827",
    color: "white",
  },

  planTag: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: "999px",
    background: "#eef2ff",
    border: "1px solid #e5e7eb",
    fontWeight: 900,
    fontSize: "12px",
  },

  planTagDark: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.18)",
    fontWeight: 900,
    fontSize: "12px",
  },

  planName: { marginTop: "10px", fontWeight: 900, fontSize: "18px" },

  price: { marginTop: "8px", fontWeight: 900, fontSize: "30px" },

  planDesc: { marginTop: "6px", color: "#64748b", fontWeight: 700 },

  formWrap: { marginTop: "18px" },

  formCard: {
    border: "1px solid #e5e7eb",
    borderRadius: "22px",
    padding: "18px",
    background: "white",
  },

  formTitle: { fontWeight: 900, fontSize: "18px" },

  formGrid: {
    marginTop: "14px",
    display: "grid",
    gap: "10px",
    maxWidth: "720px",
  },

  input: {
    padding: "12px",
    borderRadius: "14px",
    border: "1px solid #e5e7eb",
    fontSize: "15px",
    outline: "none",
  },

  feeBox: {
    marginTop: "14px",
    padding: "16px",
    borderRadius: "18px",
    border: "1px solid #e5e7eb",
    background: "#f8fafc",
  },

  feeTitle: { fontWeight: 900 },

  feePrice: { marginTop: "6px", fontWeight: 900, fontSize: "26px" },

  feeSub: { marginTop: "6px", color: "#64748b", fontSize: "13px" },

  qrBox: {
    marginTop: "12px",
    padding: "16px",
    borderRadius: "18px",
    border: "1px solid #e5e7eb",
    textAlign: "center",
  },

  qrTitle: { fontWeight: 900, fontSize: "16px" },

  qrImg: { marginTop: "10px", width: "220px", maxWidth: "100%" },

  qrSub: { marginTop: "10px", color: "#64748b", fontSize: "13px" },

  submitBtn: {
    marginTop: "14px",
    width: "100%",
    padding: "13px",
    background: "#111827",
    color: "white",
    borderRadius: "16px",
    border: "none",
    fontSize: "16px",
    fontWeight: 900,
    cursor: "pointer",
  },

  footer: {
    marginTop: "60px",
    borderTop: "1px solid #e5e7eb",
    padding: "22px 10px",
  },

  footerInner: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    flexWrap: "wrap",
  },

  footerTitle: { fontWeight: 900, fontSize: "16px" },

  footerText: { marginTop: "8px", color: "#64748b", lineHeight: 1.6 },
};
