import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB] text-[#111827] py-10 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-[#9CA3AF]">Email: support@taskmaster.com</p>
          <p className="text-[#9CA3AF]">Phone: +880 1234 567 890</p>
          <p className="text-[#9CA3AF]">Address: Dhaka, Bangladesh</p>
        </div>

        {/* Terms & Conditions */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/terms"
                className="text-[#10B981] hover:underline transition-colors"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="text-[#10B981] hover:underline transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/help/668969529866328/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10B981] hover:text-[#111827] transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10B981] hover:text-[#111827] transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10B981] hover:text-[#111827] transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-[#10B981] hover:text-[#111827] transition-colors"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-8 text-[#9CA3AF] text-sm">
        &copy; {new Date().getFullYear()} TaskMaster. All rights reserved.
      </div>
    </footer>
  );
}
