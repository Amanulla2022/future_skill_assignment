import React from "react";
import { CgAbstract } from "react-icons/cg";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-gray-100 flex justify-around items-top py-8 rounded-br-2xl rounded-bl-2xl">
      <div>
        <h5 className="footer-heading">Abstract</h5>
        <ul>
          <li>Branches</li>
        </ul>
      </div>
      <div>
        <h5 className="footer-heading">Resources</h5>
        <ul>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Release Notes</li>
          <li>Status</li>
        </ul>
      </div>
      <div>
        <h5 className="footer-heading">Community</h5>
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Dribble</li>
          <li>Podcast</li>
        </ul>
      </div>
      <div>
        <h5 className="footer-heading">Company</h5>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Legal</li>
        </ul>

        <h5 className="footer-heading">Contact Us</h5>
        <ul>
          <li>info@abstract.com </li>
        </ul>
      </div>
      <div className="mt-36">
        <CgAbstract className="bg-white text-black text-4xl rounded-md mb-4" />
        <ul>
          <li className="flex justify-start items-center gap-2">
            <FaRegCopyright /> Copyright 2022
          </li>
          <li>Abstract Studio Design, Inc.</li>
          <li>All rights reserved</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
