"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Menu,
  FileText,
} from "lucide-react";

export default function TermsAndConditionsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800 overflow-x-clip relative font-sans">
      
      {/* Dynamic Background Blurs */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-slate-100 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-[40%] right-[-100px] w-[600px] h-[600px] bg-[#429CE4]/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center">
                <div className="flex h-12 w-auto items-center justify-center rounded-lg bg-white p-1.5 shadow-md border border-[#285E89]/10 group-hover:scale-105 transition-transform duration-300">
                  <img src="/logo.png" alt="VidyaSanchalan Logo" className="h-8 w-auto max-w-[140px] object-contain" />
                </div>
                <div className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#FFA600] ring-2 ring-white"></div>
              </div>
              <div>
                <span className="text-lg font-black tracking-tight">
                  <span className="text-[#285E89]">Vidya</span><span className="text-[#FFA600]">Sanchalan</span>
                </span>
                <p className="text-[9px] text-[#285E89]/60 font-bold uppercase tracking-wider mt-0.5">Policy Center</p>
              </div>
            </Link>

            {/* Nav Menu Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-slate-600 transition-colors hover:text-[#FFA600]">Home</Link>
              <Link href="/features" className="text-sm font-medium text-slate-600 transition-colors hover:text-[#FFA600]">Features</Link>
              <Link href="/modules" className="text-sm font-medium text-slate-600 transition-colors hover:text-[#FFA600]">Modules</Link>
              <Link href="/contact" className="text-sm font-medium text-slate-600 transition-colors hover:text-[#FFA600]">Contact Us</Link>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:inline-flex rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                asChild
              >
                <Link href="/login">Sign in</Link>
              </Button>
              <Button
                size="sm"
                className="rounded-lg bg-[#FFA600] text-white shadow-md hover:bg-[#ED6708] hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/signup">
                  Get Started
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden rounded-lg border-slate-200 text-slate-600 hover:bg-slate-50 bg-transparent"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3 shadow-md"
          >
            <Link href="/" className="block text-sm font-medium text-slate-600 py-2 hover:text-[#FFA600]" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/features" className="block text-sm font-medium text-slate-600 py-2 hover:text-[#FFA600]" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link href="/modules" className="block text-sm font-medium text-slate-600 py-2 hover:text-[#FFA600]" onClick={() => setIsMenuOpen(false)}>Modules</Link>
            <Link href="/contact" className="block text-sm font-medium text-slate-600 py-2 hover:text-[#FFA600]" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            <div className="border-t border-slate-100 pt-3 flex flex-col gap-2">
              <Button variant="outline" className="w-full text-slate-600 border-slate-200 hover:bg-slate-50 bg-transparent" asChild>
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
              </Button>
              <Button className="w-full bg-[#FFA600] text-white hover:bg-[#ED6708]" asChild>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-4 mb-12 text-center">
            <Badge
              variant="outline"
              className="rounded-full px-4 py-1.5 border-[#1D496C]/30 bg-[#1D496C]/10 text-[#1D496C] font-bold tracking-wider uppercase text-xs flex items-center justify-center gap-1.5 w-fit mx-auto"
            >
              <FileText className="h-3.5 w-3.5 text-[#1D496C]" />
              Legal & Agreements
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D496C] tracking-tight leading-tight">
              Terms and Conditions
            </h1>
            <p className="text-slate-500 font-semibold text-sm sm:text-base">
              Effective Date: June 2026 | Last Updated: June 2026
            </p>
          </div>

          {/* Premium Glassmorphic Document Card */}
          <div className="bg-[#F8FAFC]/80 border border-slate-100 p-8 sm:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden space-y-10 text-slate-600 leading-relaxed text-sm sm:text-base">
            
            {/* Decorative accent element */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#429CE4]/5 rounded-full blur-2xl pointer-events-none"></div>

            <section className="space-y-3">
              <p>
                Welcome to <strong>VidyaSanchalan</strong>. By accessing or using our platform, you agree to comply with and be bound by these Terms and Conditions.
              </p>
            </section>

            <hr className="border-slate-200/60" />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D496C]">
                <span className="text-[#FFA600]">1.</span> ACCEPTANCE OF TERMS
              </h2>
              <p>
                By accessing, registering, or using VidyaSanchalan, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
              </p>
            </section>

            <hr className="border-slate-200/60" />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D496C]">
                <span className="text-[#FFA600]">2.</span> ELIGIBILITY
              </h2>
              <p>VidyaSanchalan may be used by:</p>
              <ul className="list-disc list-inside pl-4 sm:pl-6 space-y-1">
                <li>Schools</li>
                <li>Educational Institutions</li>
                <li>School Administrators</li>
                <li>Teachers</li>
                <li>Parents</li>
                <li>Authorized Students</li>
              </ul>
            </section>

            <hr className="border-slate-200/60" />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D496C]">
                <span className="text-[#FFA600]">3.</span> USER ACCOUNTS
              </h2>
              <p>Users are responsible for:</p>
              <ul className="list-disc list-inside pl-4 sm:pl-6 space-y-1">
                <li>Maintaining account confidentiality</li>
                <li>Protecting login credentials</li>
                <li>Providing accurate information</li>
                <li>Updating account information when necessary</li>
              </ul>
              <p className="font-semibold text-slate-700">
                Users are responsible for all activities performed through their accounts.
              </p>
            </section>

            <hr className="border-slate-200/60" />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D496C]">
                <span className="text-[#FFA600]">4.</span> ACCEPTABLE USE
              </h2>
              <p>The platform may only be used for:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc list-inside pl-4 sm:pl-6">
                <li>Student Management</li>
                <li>Attendance Management</li>
                <li>Examination Management</li>
                <li>Fee Management</li>
                <li>Timetable Management</li>
                <li>School Administration</li>
                <li>Parent Communication</li>
                <li>Educational Activities</li>
              </ul>
            </section>

            <hr className="border-slate-200/60" />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D496C]">
                <span className="text-[#FFA600]">5.</span> PROHIBITED ACTIVITIES
              </h2>
              <p>Users must not:</p>
              <ul className="list-disc list-inside pl-4 sm:pl-6 space-y-1">
                <li>Attempt unauthorized access</li>
                <li>Distribute malware or harmful software</li>
                <li>Reverse engineer the platform</li>
                <li>Copy or redistribute source code</li>
                <li>Misuse educational records</li>
                <li>Interfere with platform operations</li>
                <li>Violate applicable laws</li>
              </ul>
            </section>

            <hr className="border-slate-200/60" />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D496C]">
                <span className="text-[#FFA600]">6.</span> INTELLECTUAL PROPERTY
              </h2>
              <p>
                All software, source code, designs, logos, trademarks, graphics, content, and documentation are the exclusive property of VidyaSanchalan and are protected by applicable intellectual property laws.
              </p>
              <p>
                Unauthorized use, copying, or distribution is strictly prohibited.
              </p>
            </section>

            <hr className="border-slate-200/60" />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D496C]">
                <span className="text-[#FFA600]">7.</span> SUBSCRIPTION AND PAYMENTS
              </h2>
              <p>Schools using paid plans agree to:</p>
              <ul className="list-disc list-inside pl-4 sm:pl-6 space-y-1">
                <li>Pay subscription fees on time</li>
                <li>Maintain valid billing information</li>
                <li>Follow subscription renewal policies</li>
              </ul>
              <p className="text-xs text-slate-400 italic">
                Failure to make payment may result in suspension or termination of services.
              </p>
            </section>

            <hr className="border-slate-200/60" />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D496C]">
                <span className="text-[#FFA600]">8.</span> SERVICE AVAILABILITY
              </h2>
              <p>
                While VidyaSanchalan strives to maintain continuous service availability, we do not guarantee uninterrupted access. Service interruptions may occur due to:
              </p>
              <ul className="list-disc list-inside pl-4 sm:pl-6 space-y-1">
                <li>Scheduled Maintenance</li>
                <li>System Upgrades</li>
                <li>Technical Failures</li>
                <li>Internet Connectivity Issues</li>
                <li>Third-Party Service Disruptions</li>
              </ul>
            </section>

            <hr className="border-slate-200/60" />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D496C]">
                <span className="text-[#FFA600]">9.</span> DATA OWNERSHIP
              </h2>
              <p>
                Schools retain ownership of all educational data stored within the platform. VidyaSanchalan acts solely as a service provider and data processor.
              </p>
            </section>

            <hr className="border-slate-200/60" />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D496C]">
                <span className="text-[#FFA600]">10.</span> ACCOUNT SUSPENSION AND TERMINATION
              </h2>
              <p>Accounts may be suspended or terminated if users:</p>
              <ul className="list-disc list-inside pl-4 sm:pl-6 space-y-1">
                <li>Violate these Terms</li>
                <li>Engage in fraudulent activities</li>
                <li>Threaten platform security</li>
                <li>Misuse educational information</li>
              </ul>
            </section>

            <hr className="border-slate-200/60" />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D496C]">
                <span className="text-[#FFA600]">11.</span> DISCLAIMER OF WARRANTIES
              </h2>
              <p className="italic">
                The platform is provided on an “As Is” and “As Available” basis. VidyaSanchalan makes no warranties regarding uninterrupted operation, availability, accuracy, or fitness for a particular purpose.
              </p>
            </section>

            <hr className="border-slate-200/60" />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D496C]">
                <span className="text-[#FFA600]">12.</span> LIMITATION OF LIABILITY
              </h2>
              <p>VidyaSanchalan shall not be liable for:</p>
              <ul className="list-disc list-inside pl-4 sm:pl-6 space-y-1">
                <li>Indirect or Consequential Damages</li>
                <li>Loss of Profits or Business Interruptions</li>
                <li>Data Loss resulting from user negligence</li>
                <li>Third-Party Service Failures</li>
              </ul>
            </section>

            <hr className="border-slate-200/60" />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D496C]">
                <span className="text-[#FFA600]">13.</span> INDEMNIFICATION
              </h2>
              <p>
                Users agree to indemnify and hold VidyaSanchalan harmless from claims, liabilities, damages, losses, and expenses arising from misuse of the platform.
              </p>
            </section>

            <hr className="border-slate-200/60" />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D496C]">
                <span className="text-[#FFA600]">14.</span> MODIFICATION OF TERMS
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Updated versions will be posted on this page with a revised effective date.
              </p>
            </section>

            <hr className="border-slate-200/60" />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D496C]">
                <span className="text-[#FFA600]">15.</span> GOVERNING LAW
              </h2>
              <p>
                These Terms shall be governed by and interpreted under the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Ahmedabad, Gujarat, India.
              </p>
            </section>

            <hr className="border-slate-200/60" />

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D496C]">
                <span className="text-[#FFA600]">16.</span> CONTACT INFORMATION
              </h2>
              <p><strong>VidyaSanchalan School Management Platform</strong></p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 pl-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#FFA600]">✉️</span>
                  <span>Email: <a href="mailto:support@h-techsolutions.in" className="text-[#285E89] hover:underline">support@h-techsolutions.in</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FFA600]">📞</span>
                  <span>Phone: <a href="tel:+919876543210" className="text-[#285E89] hover:underline">+91 98765 43210</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FFA600]">🌐</span>
                  <span>Website: <a href="https://h-techsolutions.in" target="_blank" rel="noopener noreferrer" className="text-[#285E89] hover:underline">www.h-techsolutions.in</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FFA600]">📍</span>
                  <span>Address: Naroda, Ahmedabad, Gujarat, India</span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white text-slate-600">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 text-left">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-16 w-auto flex items-center justify-center rounded-xl bg-white p-2 shadow-sm border border-[#285E89]/10">
                  <img src="/logo.png" alt="VidyaSanchalan Logo" className="h-12 w-auto max-w-[160px] object-contain" />
                </div>
                <div>
                  <span className="text-xl font-black tracking-tight"><span className="text-[#285E89]">Vidya</span><span className="text-[#FFA600]">Sanchalan</span></span>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">School Management</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                Complete school management solution based on comprehensive SRS documentation.
                Automating administrative, academic, and operational tasks.
              </p>
              <div className="flex gap-3 mt-6">
                {[
                  { icon: <Twitter />, color: "from-[#285E89] to-[#1D496C]", href: "#" },
                  { icon: <Github />, color: "from-[#6A7626] to-[#4F581D]", href: "#" },
                  { icon: <Linkedin />, color: "from-[#429CE4] to-[#285E89]", href: "#" },
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="icon"
                      className={`rounded-lg bg-gradient-to-br ${social.color} text-white hover:shadow-md transition-all duration-300 hover:scale-110`}
                    >
                      {social.icon}
                    </Button>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Product</h3>
              <ul className="space-y-3">
                {[
                  { label: "Features", href: "/features" },
                  { label: "Modules", href: "/modules" },
                  { label: "Contact Us", href: "/contact" },
                  { label: "Get Started", href: "/login" },
                ].map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-sm text-slate-500 hover:text-[#285E89] transition-colors font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                {[
                  { label: "Why Choose Us", href: "/#why-choose-us" },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Terms of Service", href: "/terms-and-conditions" },
                  { label: "Cookie Policy", href: "#" },
                ].map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-sm text-slate-500 hover:text-[#285E89] transition-colors font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFA600] mt-0.5">📍</span>
                  <span className="text-sm text-slate-500 leading-snug">Naroda, Gujarat, India</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFA600]">📞</span>
                  <a href="tel:+919876543210" className="text-sm text-slate-500 hover:text-[#285E89] transition-colors font-medium">+91 98765 43210</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFA600]">✉️</span>
                  <a href="mailto:support@h-techsolutions.in" className="text-sm text-slate-500 hover:text-[#285E89] transition-colors font-medium">support@h-techsolutions.in</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FFA600]">🌐</span>
                  <a href="https://h-techsolutions.in" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-[#285E89] transition-colors font-medium">h-techsolutions.in</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200/80 my-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-slate-500">© 2026 VidyaSanchalan. All rights reserved. Built by H-Tech Solutions.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

// Social icons helpers for footer
function Twitter() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  );
}

function Github() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function Linkedin() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z" />
    </svg>
  );
}
