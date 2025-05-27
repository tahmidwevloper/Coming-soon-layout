"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Facebook } from "lucide-react";
import { toast } from "react-toastify";
import Script from "next/script";

export default function ComingSoon() {
  const [email, setEmail] = useState("");

  const notify = () => {
    if (email) toast("Thanks for your email");
    else toast.error("Please send me your email first");
  };
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-07-01T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/wevloper",
      label: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/wevloper/posts/?feedView=all",
      label: "LinkedIn",
    },
  ];

  return (
    <>
      <Script id="omnisend-script" strategy="afterInteractive">
        {`
          window.omnisend = window.omnisend || [];
          omnisend.push(["brandID", "68356ff93659873e2fc392fd"]);
          omnisend.push(["track", "$pageViewed"]);
          !function(){
            var e=document.createElement("script");
            e.type="text/javascript";
            e.async=true;
            e.src="https://omnisnippet1.com/inshop/launcher-v2.js";
            var t=document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e,t)
          }();
        `}
      </Script>

      <motion.div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Background Blobs */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <motion.div
            style={{
              position: "absolute",
              top: "25%",
              left: "25%",
              width: "18rem",
              height: "18rem",
              background: "#a855f7",
              borderRadius: "50%",
              mixBlendMode: "multiply",
              filter: "blur(40px)",
              opacity: 0.5,
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -50, 20, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            style={{
              position: "absolute",
              top: "33%",
              right: "25%",
              width: "18rem",
              height: "18rem",
              background: "#eab308",
              borderRadius: "50%",
              mixBlendMode: "multiply",
              filter: "blur(40px)",
              opacity: 0.5,
            }}
            animate={{
              x: [0, -30, 20, 0],
              y: [0, 50, -20, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            style={{
              position: "absolute",
              bottom: "25%",
              left: "33%",
              width: "18rem",
              height: "18rem",
              background: "#ec4899",
              borderRadius: "50%",
              mixBlendMode: "multiply",
              filter: "blur(40px)",
              opacity: 0.5,
            }}
            animate={{
              x: [0, 20, -30, 0],
              y: [0, -20, 30, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </div>

        <motion.div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            maxWidth: "64rem",
            margin: "0 auto",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Main Title */}
          <motion.div style={{ marginBottom: "3rem" }}>
            <motion.h1
              style={{
                fontSize: "clamp(3rem, 8vw, 8rem)",
                fontWeight: "bold",
                color: "white",
                marginBottom: "1rem",
                lineHeight: 1,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.span
                style={{
                  background:
                    "linear-gradient(45deg, #a855f7, #ec4899, #eab308)",
                  backgroundSize: "400% 400%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Coming
              </motion.span>
            </motion.h1>
            <motion.h2
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: "bold",
                color: "white",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              July 1st, 2025
            </motion.h2>
            <motion.p
              style={{
                fontSize: "clamp(1.25rem, 3vw, 2rem)",
                color: "#d1d5db",
                marginTop: "1.5rem",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            >
              Something amazing is on the way
            </motion.p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "1rem",
              marginBottom: "3rem",
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          >
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <motion.div
                key={item.label}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(16px)",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    fontWeight: "bold",
                    color: "white",
                    marginBottom: "0.5rem",
                    fontFamily: "monospace",
                  }}
                  key={item.value}
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.value.toString().padStart(2, "0")}
                </motion.div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#d1d5db",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  style={{
                    padding: "0.75rem",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(16px)",
                    borderRadius: "50%",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "white",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
          >
            <p
              style={{
                color: "#d1d5db",
                marginBottom: "1rem",
                fontSize: "1.125rem",
              }}
            >
              Get notified when we launch
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                maxWidth: "28rem",
                margin: "0 auto",
              }}
            >
              <motion.input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  padding: "0.75rem 1rem",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "0.5rem",
                  color: "white",
                  fontSize: "1rem",
                  outline: "none",
                }}
                whileFocus={{
                  scale: 1.02,
                  borderColor: "rgba(168, 85, 247, 0.5)",
                }}
              />
              <motion.button
                onClick={notify}
                style={{
                  padding: "0.75rem 1.5rem",
                  background: "linear-gradient(45deg, #a855f7, #ec4899)",
                  color: "white",
                  fontWeight: "600",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
                whileHover={{
                  scale: 1.05,
                  background: "linear-gradient(45deg, #9333ea, #db2777)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Notify Me
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
