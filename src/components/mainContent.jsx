import MainCoverPage from "./MainCoverPage";
import CreateAccount from "../pages/CreateAcountPage";
import DetailsText from "./DetailsText";

export default function MainContent() {

  return (
    <>
      <div className="viedo">
        <video
          loop="loop"
          muted="muted"
          autoPlay="auto"
          src="8176157-hd_1366_720_25fps.mp4"
        ></video>
      </div>

      <div className="container mt-3">
        <div className="row" dir="rtl" lang="ar">
          <div className="col-md-6">
            <img
              src="https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg?tx=w_600,h_400,q_auto"
              alt=""
              className="img-fluid my-5 img-welcome"
            />
          </div>
          <div className="col-md-6 mt-5 ">
            <h1 className="welcome">مرحبا بكم فى شركة أبو الجدايل</h1>
            <p className="p-welcome">
              شركة أبو الجدايل تدعم الشركات من 17 دولة حول العالم، بخدمات
              احترافية وفعالة لتحقيق أهداف عملك. نقدم حلولًا شاملة لدعم وتطوير
              الأعمال، مع خدمات متاحة أونلاين في جميع أنحاء المملكة العربية
              السعودية، لتكون شريكك الأمثل في النجاح والنمو.
            </p>
            <button id="btn-welcome">اقرا المزيد</button>
          </div>
        </div>
      </div>

      <MainCoverPage />

      <DetailsText />

      <CreateAccount />
    </>
  );
}
