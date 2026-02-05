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

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={styles.page}>
      {/* NAV */}
      <div style={styles.nav}>
        <div
          style={styles.brand}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
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

        <div style={styles.navBtns}>
          <button style={styles.navBtn} onClick={() => scrollToId("pricing")}>
            Pricing
          </button>
          <button style={styles.navBtn} onClick={() => scrollToId("contact")}>
            Contact
          </button>
          <button
            style={styles.navBtnPrimary}
            onClick={() => scrollToId("applyForm")}
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <div>
          <div style={styles.badge}>⚡ Fast • Premium • Affordable</div>

          <h1 style={styles.h1}>
            SRTech Innovations <br /> Build your Website / App 🚀
          </h1>

          <p style={styles.p}>
            We build modern websites, apps, dashboards and tech tools for
            businesses. Apply now and get started today.
          </p>

          <div style={styles.heroBtns}>
            <button
              style={styles.bigPrimary}
              onClick={() => scrollToId("applyForm")}
            >
              Apply for Project
            </button>
            <button
              style={styles.bigSecondary}
              onClick={() => scrollToId("pricing")}
            >
              View Pricing
            </button>
          </div>
        </div>

        <div style={styles.heroCard}>
          <div style={styles.heroCardTitle}>Quick Contact</div>
          <div style={styles.heroCardText}>
            👤 Simran Roy <br />
            📞 8287156332 <br />
            📧 simranroy370@gmail.com
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" style={styles.section}>
        <h2 style={styles.h2}>Pricing</h2>
        <p style={styles.sub}>Fixed fees (basic).</p>

        <div style={styles.pricingGrid}>
          <div style={styles.priceCard}>
            <div style={styles.tag}>Website</div>
            <div style={styles.priceName}>Website Making</div>
            <div style={styles.price}>₹2000</div>
          </div>

          <div style={{ ...styles.priceCard, ...styles.priceCardDark }}>
            <div style={styles.tagDark}>App</div>
            <div style={styles.priceName}>App Development</div>
            <div style={styles.price}>₹3000</div>
          </div>

          <div style={styles.priceCard}>
            <div style={styles.tag}>Tool</div>
            <div style={styles.priceName}>Tech Tool</div>
            <div style={styles.price}>₹2500</div>
          </div>
        </div>
      </div>

      {/* APPLY FORM */}
      <div id="applyForm" style={styles.section}>
        <h2 style={styles.h2}>Apply Form 📝</h2>
        <p style={styles.sub}>
          Fill this form and submit. Your details will be sent directly to SRTech
          Innovations email.
        </p>

        <div style={styles.formCard}>
          {/* ✅ FORM SUBMIT TO EMAIL (FormSubmit) */}
          <form
            action="https://formsubmit.co/simranroy370@gmail.com"
            method="POST"
            style={{ maxWidth: "760px" }}
          >
            {/* IMPORTANT hidden inputs */}
            <input type="hidden" name="_subject" value="New SRTech Application" />
            <input type="hidden" name="_captcha" value="false" />

            {/* After submit, redirect back to your website */}
            <input
              type="hidden"
              name="_next"
              value="https://simranroy99.github.io/srtech-innovations/"
            />

            {/* Form fields */}
            <div style={styles.formGrid}>
              <input
                style={styles.input}
                placeholder="Your Name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                style={styles.input}
                placeholder="WhatsApp Number"
                name="whatsapp"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <select
                style={styles.input}
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Website</option>
                <option>App Development</option>
                <option>Tech Tool</option>
              </select>

              {category === "Website" && (
                <>
                  <select
                    style={styles.input}
                    name="website_type"
                    value={siteType}
                    onChange={(e) => setSiteType(e.target.value)}
                  >
                    <option>Business Website</option>
                    <option>Portfolio Website</option>
                    <option>E-Commerce Website</option>
                    <option>Landing Page</option>
                  </select>

                  <select
                    style={styles.input}
                    name="pages"
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                  >
                    <option>1-3 Pages</option>
                    <option>3-5 Pages</option>
                    <option>5-10 Pages</option>
                  </select>

                  <select
                    style={styles.input}
                    name="need_domain"
                    value={needDomain}
                    onChange={(e) => setNeedDomain(e.target.value)}
                  >
                    <option value="No">Need Domain? (No)</option>
                    <option value="Yes">Need Domain? (Yes)</option>
                  </select>

                  <select
                    style={styles.input}
                    name="need_hosting"
                    value={needHosting}
                    onChange={(e) => setNeedHosting(e.target.value)}
                  >
                    <option value="No">Need Hosting? (No)</option>
                    <option value="Yes">Need Hosting? (Yes)</option>
                  </select>
                </>
              )}

              <textarea
                style={{ ...styles.input, minHeight: "120px" }}
                placeholder="Describe your project requirements..."
                name="requirements"
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />

              {/* Fee send to email */}
              <input type="hidden" name="fees" value={`₹${fee}`} />
            </div>

            {/* Fee display */}
            <div style={styles.feeBox}>
              <div style={styles.feeTitle}>Total Fees</div>
              <div style={styles.feePrice}>₹{fee}</div>
              <div style={styles.feeSub}>
                Website ₹2000 | App ₹3000 | Tool ₹2500
              </div>
            </div>

            {/* QR */}
            <div style={styles.qrBox}>
              <div style={styles.qrTitle}>Pay Using QR</div>
              <img
                src="/srtech-innovations/qr.png"
                alt="Payment QR"
                style={styles.qrImg}
              />
              <div style={styles.qrSub}>
                After payment send screenshot on WhatsApp: <b>8287156332</b>
              </div>
            </div>

            <button type="submit" style={styles.submitBtn}>
              Submit Application
            </button>
          </form>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" style={styles.footer}>
        <div style={styles.footerTitle}>Contact</div>
        <div style={styles.footerText}>
          👤 Simran Roy <br />
          📞 8287156332 <br />
          📧 simranroy370@gmail.com
        </div>
        <div style={styles.footerCopy}>
          © {new Date().getFullYear()} SRTech Innovations
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    padding: "16px",
    background:
      "radial-gradient(circle at top, #eef2ff 0%, #ffffff 40%, #ffffff 100%)",
    minHeight: "100vh",
  },

  nav: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "14px",
    borderRadius: "18px",
    border: "1px solid #e5e7eb",
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: "10px",
    zIndex: 10,
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    alignItems: "center",
  },

  brand: { display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" },

  logo: {
    height: "44px",
    width: "44px",
    borderRadius: "14px",
    border: "1px solid #e5e7eb",
    padding: "6px",
    background: "white",
    objectFit: "contain",
  },

  brandName: { fontWeight: 900 },
  brandTag: { fontSize: "12px", color: "#64748b" },

  navBtns: { display: "flex", gap: "10px", flexWrap: "wrap" },

  navBtn: {
    padding: "10px 14px",
    borderRadius: "14px",
    border: "1px solid #e5e7eb",
    background: "white",
    fontWeight: 800,
    cursor: "pointer",
  },

  navBtnPrimary: {
    padding: "10px 14px",
    borderRadius: "14px",
    border: "none",
    background: "#111827",
    color: "white",
    fontWeight: 900,
    cursor: "pointer",
  },

  hero: {
    maxWidth: "1100px",
    margin: "18px auto 0",
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "14px",
    padding: "10px",
  },

  badge: {
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: "999px",
    background: "#eef2ff",
    border: "1px solid #e5e7eb",
    fontWeight: 900,
    fontSize: "12px",
  },

  h1: { marginTop: "12px", fontSize: "40px", fontWeight: 900, lineHeight: 1.05 },
  p: { marginTop: "10px", color: "#475569", lineHeight: 1.7 },

  heroBtns: { marginTop: "14px", display: "flex", gap: "10px", flexWrap: "wrap" },

  bigPrimary: {
    padding: "12px 18px",
    borderRadius: "16px",
    border: "none",
    background: "#111827",
    color: "white",
    fontWeight: 900,
    cursor: "pointer",
  },

  bigSecondary: {
    padding: "12px 18px",
    borderRadius: "16px",
    border: "1px solid #e5e7eb",
    background: "white",
    fontWeight: 900,
    cursor: "pointer",
  },

  heroCard: {
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    padding: "16px",
    background: "white",
  },

  heroCardTitle: { fontWeight: 900, fontSize: "16px" },
  heroCardText: { marginTop: "8px", color: "#475569", lineHeight: 1.6 },

  section: { maxWidth: "1100px", margin: "0 auto", padding: "38px 10px 0" },
  h2: { fontSize: "28px", fontWeight: 900 },
  sub: { marginTop: "6px", color: "#64748b" },

  pricingGrid: {
    marginTop: "14px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
  },

  priceCard: {
    border: "1px solid #e5e7eb",
    borderRadius: "18px",
    padding: "16px",
    background: "white",
  },

  priceCardDark: { background: "#111827", color: "white" },

  tag: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: "999px",
    background: "#eef2ff",
    border: "1px solid #e5e7eb",
    fontWeight: 900,
    fontSize: "12px",
  },

  tagDark: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.2)",
    fontWeight: 900,
    fontSize: "12px",
  },

  priceName: { marginTop: "10px", fontWeight: 900, fontSize: "16px" },
  price: { marginTop: "6px", fontSize: "30px", fontWeight: 900 },

  formCard: {
    marginTop: "14px",
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    padding: "16px",
    background: "white",
  },

  formGrid: { display: "grid", gap: "10px", maxWidth: "760px" },

  input: {
    padding: "12px",
    borderRadius: "14px",
    border: "1px solid #e5e7eb",
    fontSize: "15px",
    outline: "none",
  },

  feeBox: {
    marginTop: "14px",
    padding: "14px",
    borderRadius: "18px",
    border: "1px solid #e5e7eb",
    background: "#f8fafc",
  },

  feeTitle: { fontWeight: 900 },
  feePrice: { marginTop: "6px", fontWeight: 900, fontSize: "26px" },
  feeSub: { marginTop: "6px", color: "#64748b", fontSize: "13px" },

  qrBox: {
    marginTop: "12px",
    padding: "14px",
    borderRadius: "18px",
    border: "1px solid #e5e7eb",
    textAlign: "center",
  },

  qrTitle: { fontWeight: 900 },
  qrImg: { marginTop: "10px", width: "220px", maxWidth: "100%" },
  qrSub: { marginTop: "10px", color: "#64748b", fontSize: "13px" },

  submitBtn: {
    marginTop: "12px",
    width: "100%",
    padding: "13px",
    borderRadius: "16px",
    border: "none",
    background: "#111827",
    color: "white",
    fontWeight: 900,
    cursor: "pointer",
  },

  footer: {
    maxWidth: "1100px",
    margin: "60px auto 0",
    borderTop: "1px solid #e5e7eb",
    padding: "22px 10px",
  },

  footerTitle: { fontWeight: 900, fontSize: "16px" },
  footerText: { marginTop: "8px", color: "#475569", lineHeight: 1.7 },
  footerCopy: { marginTop: "12px", color: "#64748b", fontSize: "13px" },
};
