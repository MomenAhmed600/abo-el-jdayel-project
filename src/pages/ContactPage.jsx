import React, { useState, useEffect } from "react";
import CreateAccount from "./CreateAcountPage";
import MainTop5 from "../components/MainTop5";

function ContactPage() {
  const Counter = ({ targetNumber, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 4000;
      const increment = Math.ceil(targetNumber / (duration / 50));

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          start = targetNumber;
          clearInterval(timer);
        }
        setCount(start);
      }, 50);

      return () => clearInterval(timer);
    }, [targetNumber]);

    return (
      <div className="counter-item">
        <h1 className="counter-number">{count.toLocaleString()}</h1>
        <p className="counter-label">{label}</p>
      </div>
    );
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="img-cover-contact" dir="rtl" lang="ar">
        <img src="/images/akl 2-cavro.png" alt="" />
        <div className="content-contact">
          <h1>معلومات عنا</h1>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <img
              src="/images/bta3 ward.png"
              alt=""
              className=" img-poster-contact"
            />
          </div>
          <div className="col-md-6 colm-poster" dir="rtl" lang="ar">
            <div className="row">
              <h1 className="contact-text">مهمتنا</h1>
              <p className="p-contact">
                تسعى الشركة الى تقديم خدمات التوظيف و ادارة المشاريع باعلى
                مستويات الجودة الجودة و الكفاءة مع الالتزام باستخدام احدث
                الوسائل و تقديم حلول تتجاوز توقعات عملائنا مع مراعاة السلامة و
                الاستدام.
              </p>
            </div>

            <div className="row">
              <h1 className="contact-text">رؤيتنا</h1>
              <p className="p-contact">
                تهدف الشركة الى المساهمة فى التطوير الواسع للمملكة العربية
                السعودية حاليا و الشرق الاوسط قريبا من خلال تقديم حلول و خدمات
                عالية الجودة فى دعم الشركات تسعى الشركة دائما لتحقيق التميز فى
                تقديم خدماتها و لايجاد شراكات و موثوقية طويلة الامد مع عملائه.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="counter-section">
        <Counter targetNumber={83000} label="الزائرين" />
        <Counter targetNumber={13000} label="عملاء" />
        <p className="counter-main-label">ارقامنا تتزايد اغتنم الفرصه</p>
      </div>

      <br />

      <MainTop5 />

      <CreateAccount />
    </>
  );
}

export default ContactPage;
