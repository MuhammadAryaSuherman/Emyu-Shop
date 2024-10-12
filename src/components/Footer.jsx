import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="bg-dark text-light py-5 mt-4 "
      // style={{ position: "fixed", bottom: "0", width: "100%" }}
    >
      <Container>
        <Row className="mb-4">
          {/* About Us */}
          <Col xs={12} md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              We are a leading tech shop offering the best deals on the latest
              gadgets, electronics, and accessories. Our mission is to provide
              quality products with exceptional customer service.
            </p>
          </Col>

          {/* Customer Service */}
          <Col xs={12} md={4} className="mb-3">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/faq" className="text-light">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/returns" className="text-light">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-light">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="/support" className="text-light">
                  Support
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Information */}
          <Col xs={12} md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>Tembung City, Sei Rotan, Indonesia</p>
            <p>Email: support@emyushop.com</p>
            <p>Phone: +6283423423322</p>
          </Col>
        </Row>

        {/* Social Media Links */}
        <Row className="text-center">
          <Col>
            <h5>Follow Us</h5>
            <a href="https://facebook.com" className="text-light me-3">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" className="text-light me-3">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" className="text-light me-3">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" className="text-light">
              <FaLinkedinIn size={20} />
            </a>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4 text-center">
          <Col>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} EmyuShop. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
