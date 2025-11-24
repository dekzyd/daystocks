import Link from "next/link";
import React from "react";

const FooterLinks = ({ href, linkText, text }: FooterLinkProps) => {
  return (
    <div className="text-center p-4">
      <p className="text-sm text-gray-500">
        {text}
        {` `}
        <Link className="footer-link" href={href}>
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default FooterLinks;
