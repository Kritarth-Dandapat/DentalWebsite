"use client";
import { useState } from "react";

export default function OralScanWebpage() {
  const [faqOpen, setFaqOpen] = useState(Array(5).fill(false));

  const toggleFaq = (index) => {
    setFaqOpen((prev) =>
      prev.map((open, i) => (i === index ? !open : open))
    );
  };

  const faqs = [
    {
      question: "Significance: Describe how your technology addresses unmet needs.",
      answer: `Older adults face challenges in accessing timely dental care, particularly in rural areas. 
               OralScan bridges this gap with a smartphone app that provides affordable, accessible, and effective 
               dental health monitoring. By leveraging AI and image processing, it offers reliable insights, reduces 
               barriers to care, and enhances the quality of life for the elderly.`,
    },
    {
      question: "Innovation: What makes OralScan novel and competitive?",
      answer: `OralScan is innovative because it integrates AI-powered diagnostics into a mobile app, 
               making dental care affordable and convenient. Its technical novelty lies in using advanced 
               AI models for quick and reliable analysis, making dental checkups as simple as taking a photo.`,
    },
    {
      question: "Commercialization: What is the market and strategy?",
      answer: `The target market includes older adults in rural areas and underserved populations. 
               At $2 per scan or $15 per month, OralScan offers a low-cost, high-value solution. 
               Partnerships with insurance companies and health organizations ensure affordability and adoption.`,
    },
    {
      question: "Challenge Impact: How will participation help the innovation?",
      answer: `Participation in this Challenge will provide funding for server costs and user acquisition, mentorship 
               for strategic partnerships, advanced testing facilities, and access to collaborators like Kaleida Health, 
               UBMD, and YMCA for market expansion.`,
    },
    {
      question: "What has the project accomplished? In particular, describe the proof-of-concept system and/or solution the project has developed?",
      answer: `OralScan is an innovative tool that combines AI-driven diagnostics with a user-friendly mobile health platform
               tailored for seniors and underserved populations, enabling oral health self-assessment at home.
               Our AI-driven mobile app leverages smartphone cameras to capture intraoral images, enabling AI-powered detection
               of common oral health issues like cavities, gingivitis, and ulcers. OralScan provides instant diagnostic feedback, with
               tailored self-care recommendations or alerts for professional care based on severity, bridging healthcare gaps and
               promoting preventive care for vulnerable populations.`,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center py-16">
        <h1 className="text-5xl font-extrabold">OralScan</h1>
        <p className="mt-4 text-lg">AI-Powered Accessible Dental Care for Older Adults</p>
      </div>

      {/* Problem Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">The Problem</h2>
        <p className="text-lg mb-4">
          Many older adults in rural and underserved areas face barriers to accessing dental care due to financial, geographic, and systemic challenges.
        </p>
        <ul className="list-disc pl-6 space-y-2 mx-auto text-left max-w-lg">
          <li>96% of seniors experience dental caries (cavities).</li>
          <li>20% suffer from untreated dental decay.</li>
          <li>68% have periodontal disease, a leading cause of tooth loss.</li>
        </ul>
      </section>

      {/* Solution Section */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">The Solution</h2>
        <p className="text-lg mb-4">
          OralScan is a smartphone app designed to make dental care accessible, affordable, and effective for older adults.
        </p>
        <ul className="list-disc pl-6 space-y-2 mx-auto text-left max-w-lg">
          <li>AI-powered diagnostics for accurate and quick results.</li>
          <li>Affordable scans at $2 per scan or $15 per month.</li>
          <li>EHR integration for seamless remote monitoring.</li>
          <li>Fairness-aware AI for unbiased diagnostics.</li>
        </ul>
      </section>

      {/* Key Features Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-12 mx-auto max-w-4xl">
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">User-Focused</h3>
            <ul className="list-disc pl-6 space-y-2 text-left">
              <li>Designed for older adults and underserved populations.</li>
              <li>Simple workflows for easy navigation.</li>
              <li>Low-cost solutions to reduce reliance on in-person visits.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Technology and Innovation</h3>
            <ul className="list-disc pl-6 space-y-2 text-left">
              <li>Advanced image processing and AI analysis.</li>
              <li>GPU-accelerated diagnostics within 5 seconds.</li>
              <li>Encrypted data storage ensuring privacy and security.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">FAQs</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="text-lg font-bold text-blue-700 flex justify-between w-full focus:outline-none"
              >
                {faq.question}
                <span>{faqOpen[index] ? "-" : "+"}</span>
              </button>
              {faqOpen[index] && <p className="mt-2 text-gray-700">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-8">
        <p>Contact us: purusoni@buffalo.edu | kritarth@buffalo.edu</p>
        <p className="mt-4">&copy; 2024 OralScan. All rights reserved.</p>
      </footer>
    </div>
  );
}
