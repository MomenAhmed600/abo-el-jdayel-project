import "bootstrap/dist/css/bootstrap.min.css";
import CreateAccount from "./CreateAcountPage";
import CarouselFadeExample from "../components/CarouselFadeExample";
import { useEffect } from "react";


const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="img-cover-contact" dir="rtl" lang="ar">
        <img src="/images/akl 2-cavro.png" alt="" />
        <div className="content-contact">
          <h1>الخدامات</h1>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row" dir="rtl" lang="ar">
          <div className="col-md-6 mt-5 ">
            <h3 className="welcome-services">
              خدمات المنشآت الصغيرة والمتوسطة
            </h3>
            <p className="p-welcome-services">
              نحن على وعي تام باحتياجات الكيانات الصغيرة والمتوسطة فلقد كانت
              مؤسستُنا إحداها من قبل. سوف تعمل مؤسسة أبو الجدايل معك عن قرب
              لتنمية عملك من خلال خدماتنا المتخصصة في مجال تأسيس الأعمال
              والاستشارات الاستراتيجية وتوفير الكوادر الماهرة والمدربة وتخليص
              الشئون التجارية والقانونية والحكومية وخدمات العلاقات العامة وغيرها
              من احتياجاتك اليومية
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/images/chief2.png"
              alt=""
              className="img-fluid my-5 img-welcome"
            />
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div
          className="row row-cols-1 row-cols-md-3 g-4 py-2"
          dir="rtl"
          lang="ar"
        >
          <div className="col">
            <div className="card pdcard">
              <img
                src="/images/chief1.png"
                className="card-img-top"
                alt="pic for the recipe"
              />
              <div className="card-body pdcardbody">
                <h5 className="card-title">خدمات الشركات والمؤسسات</h5>
                <p className="card-text">
                  في ظل المنافسة الشديدة والمتنامية في سوق المملكة العربية
                  السعودية ، يعاني الإداريون والتنفيذيون في الشركات والمؤسسات من
                  العمالة ومن الضغوط الدائمة لتقليل الكلفة ورفع الكفاءة وزيادة
                  الإنتاجية. باختيارك لمؤسسة أبو الجدايل يصبح لديك شريك في مجال
                  إدارة الموارد البشرية ليقف بجانبك في كافة مراحل التوظيف
                  والإدارة. كما نساعدك على رفع تصنيف منشأتك في برنامج نطاقات
                  والحصول على مزايا البرنامج من خلال توظيف سعوديين وسعوديات ذوي
                  كفاءة عالية
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card pdcard">
              <img
                src="/images/chief3.png"
                className="card-img-top"
                alt="pic for the recipe"
              />
              <div className="card-body pdcardbody">
                <h5 className="card-title">
                  العلاقات العامة و الاجراءات الحكومية
                </h5>
                <p className="card-text">
                  توافرت لدينا الإمكانات لسد الفجوة بين سوق العمل وأصحاب
                  الأعمال، وذلك عبر قاعدة بيانات ضخمة من الكوادر البشرية المحلية
                  والأجنبية. تسعى مؤسسة أبو الجدايل بإذن الله لإزالة العقبات
                  أمام تأسيس الأعمال وتشغيلها من خلال منظومة متكاملة من خدمات
                  العلاقات العامة مما يساهم في تمكين روّاد الأعمال من التركيز
                  على نمو مشاريعهم وتحقيق النجاح. نحن نؤمن بأن التميز في تقديم
                  الحلول المبتكرة هو الطريق لتحقيق رؤية عملائنا وتطلعاتهم في سوق
                  تنافسي دائم التغير.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card pdcard">
              <img
                src="/images/wter.png"
                className="card-img-top"
                alt="pic for the recipe"
              />
              <div className="card-body pdcardbody">
                <h5 className="card-title">حلول متكاملة لتسهيل الأعمال</h5>
                <p className="card-text">
                  من خلال معرفتنا العميقة بالسوق السعودي وخبرتنا الممتدة، نعمل
                  على بناء جسور تواصل فعّالة بين أصحاب الأعمال والكوادر البشرية
                  المتميزة. بفضل قاعدة بياناتنا الواسعة وشبكة مكاتبنا العالمية،
                  نقدم حلولاً متكاملة تلبي احتياجات السوق المحلي والدولي. كما
                  نحرص على تسهيل عمليات تأسيس وإدارة الأعمال من خلال تقديم خدمات
                  متكاملة في العلاقات العامة والإجراءات الحكومية، بهدف إزالة
                  التحديات وتقديم الدعم اللازم لتحقيق الأهداف بكفاءة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CarouselFadeExample />

      <br />

      <CreateAccount />
    </>
  );
};

export default ServicesPage;
