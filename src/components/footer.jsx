import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaRegCopyright } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container" dir="rtl" lang="ar">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>شركة أبو الجدايل</h3>
              <p>
                {" "}
                دعم احترافي وفعّال للشركات من 17 دولة
                <br />
                مع حلول تطوير شاملة وخدمات أونلاين في المملكة. شريكك الأمثل
                للنجاح.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
            <h5>معلومات تهمك</h5>
              <ul>
                <li className="nav-item">
                  <Link as={Link} to="/contact-us">
                    معلومات عنا
                  </Link>
                </li>
                <li className="nav-item">
                  <Link as={Link} to="/services">
                    الخدمات
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="https://ar.wikipedia.org/wiki/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%AD%D9%8A%D8%A7%D8%AA%D9%83"
                    target="blank"
                  >
                    موارد لمعرفه وظيفه احلامك
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>تابعنا</h5>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/abuljadayel.group.1?igsh=MWlnaTN4MTVreWp5dg%3D%3D"
                    target="blank"
                  >
                    <i>
                      <FaInstagram />
                    </i>{" "}
                    abuljadayel.group.1
                  </a>
                </li>

                <li>
                  <a href="mailto:info@abuljadayel.com" target="blank">
                    <i>
                      <CgMail />
                    </i>{" "}
                    info@abuljadayel
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/966920031641" target="blank">
                    <i>
                      <FaWhatsapp />
                    </i>{" "}
                    966920031641
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer" dir="rtl" lang="ar">
        <p>
          <i>
            <FaRegCopyright />
          </i>
          جميع الحقوق محفوظة 2024
        </p>
      </div>
    </>
  );
};

export default Footer;
