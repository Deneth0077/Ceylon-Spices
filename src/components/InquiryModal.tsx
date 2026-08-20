'use client';

import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle?: string;
}

export default function InquiryModal({ isOpen, onClose, productTitle }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    contactNumber: "",
    email: "",
    inquiry: ""
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Also send via WhatsApp
    let text = `🌿 *TRUE CINNAMON CARE* | Export Quality Ceylon Spices\n`;
    text += `──────────────────────────────\n`;
    text += `✨ *OFFICIAL INQUIRY FORM SUBMISSION*\n\n`;
    text += `👤 *Customer Details:*\n`;
    text += `• *Full Name:* ${formData.fullName}\n`;
    text += `• *Country:* ${formData.country}\n`;
    text += `• *Contact Number:* ${formData.contactNumber}\n`;
    text += `• *Email Address:* ${formData.email}\n`;
    if (productTitle) {
      text += `\n📦 *Product:* ${productTitle}\n`;
    }
    text += `\n📝 *Customer Inquiry / Message:*\n`;
    text += `"${formData.inquiry}"\n`;
    text += `──────────────────────────────\n`;
    text += `Please confirm availability and dispatch terms.\n\n`;
    text += `Thank you!\n`;
    text += `──────────────────────────────\n`;
    text += `🌐 *True Cinnamon Care* | Single-Origin Ceylon Spices\n`;
    text += `📞 *24/7 Hotline:* +94 77 289 3030`;

    const whatsappUrl = `https://wa.me/94772893030?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ fullName: "", country: "", contactNumber: "", email: "", inquiry: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card matching Image 3 */}
      <div className="relative w-full max-w-lg bg-white border-2 border-[#81b752] rounded-[32px] p-6 sm:p-8 shadow-2xl z-10 overflow-hidden my-8">

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#52443f] hover:bg-[#f2efe9] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#6ba343]/10 text-[#6ba343] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif font-black text-3xl text-[#6ba343]">
              THANK YOU
            </h3>
            <p className="text-sm font-bold text-[#2b1810]">
              Trust Us - Genuine Ceylon Quality Guaranteed in every product.
            </p>
            <p className="text-xs text-[#52443f]">
              Your inquiry has been dispatched. Our team will get back to you shortly.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-[#6ba343] text-white rounded-xl text-xs font-extrabold uppercase tracking-wider hover:bg-[#598c36] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Header Bar matching Image 3 */}
            <div className="bg-[#141b25] text-white px-4 py-2.5 rounded-lg">
              <h3 className="font-serif font-bold text-base tracking-wide italic">
                Inquire Now {productTitle ? `— ${productTitle}` : ""}
              </h3>
            </div>

            {/* Form Fields matching Image 3 */}
            <div className="space-y-3 pt-2 text-left">

              <div>
                <label className="block text-xs font-bold text-[#2b1810] mb-1">First name & Last name</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs font-semibold bg-white border border-[#81b752] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#81b752] text-[#1b1c1c]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2b1810] mb-1">Country</label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs font-semibold bg-white border border-[#81b752] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#81b752] text-[#1b1c1c]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2b1810] mb-1">Contact number (with country code e.g. +94)</label>
                <input
                  type="tel"
                  required
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs font-semibold bg-white border border-[#81b752] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#81b752] text-[#1b1c1c]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2b1810] mb-1">Email address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs font-semibold bg-white border border-[#81b752] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#81b752] text-[#1b1c1c]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2b1810] mb-1">Your Inquiry</label>
                <textarea
                  rows={3}
                  required
                  value={formData.inquiry}
                  onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs font-semibold bg-white border border-[#81b752] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#81b752] text-[#1b1c1c] resize-none"
                />
              </div>

            </div>

            {/* Send button matching Image 3 */}
            <div className="pt-2">
              <button
                type="submit"
                className="py-3 px-8 bg-gradient-to-b from-[#888888] to-[#666666] hover:from-[#666666] hover:to-[#444444] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
              >
                Send Inquiry
              </button>
            </div>

            {/* Footer Trust Guarantee text */}
            <div className="pt-4 border-t border-[#eae7e7] text-center space-y-1">
              <p className="text-xs font-bold text-[#2b1810]">
                Trust Us - Genuine Ceylon Quality Guaranteed in every product.
              </p>
              <h4 className="font-serif font-black text-xl text-[#6ba343]">
                THANK YOU
              </h4>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
