import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const difference = [
  {
    id: 1,
    name: "الابتكار و التخصص",
    img: "/images/Innovation.jpg",
    description: "حن نخصص الدعم الكامل الذى يحتاجة عملائنا",
  },
  {
    id: 2,
    name: "التخصص و الخدمات",
    img: "/images/5yat.png",
    description:
      "نركز بشكل خاص على تقديم خدمات التوظيف فى قطاعات عديدة مثلا مجالات الاغذية و المشروبات و الصناعة و الزراعة",
  },
  {
    id: 3,
    name: "السمعة و العلاقات",
    img: "/images/communication.jpg",
    description:
      "ابو الجدائل جروب لديها سمعة قوية فى السوق المحلى و علاقات متينة مع الشركات",
  },
  {
    id: 4,
    name: "الاسعار و الشروط",
    img: "/images/money.jpg",
    description: "نقدم لكم اسعار تنافسية لتلبى جميع احتياجاتك",
  },
];
const defaultText = {
  name: "ما الفرق؟",
  description:
    "شركة ابو الجدائل تتميز بتخصصها فى قطاعات متنوعة مما يمنحها ميزة تنافسية فى تقديم خدماتها",
};

const DetailsText = () => {
  const [activeText, setActiveText] = useState(defaultText);

  const handleHover = (details) => {
    setActiveText(details);
  };

  const handleMouseLeave = () => {
    setActiveText(defaultText);
  };

  return (
    <Container className="mainContainer">
      <Row xs={2} md={2}>
        <Col className="imageContainer">
          <Row xs={1} md={2} className="g-4">
            {difference.map((details) => (
              <Col key={details.id} className="meal-image-col" xs={12}>
                <Image
                  src={details.img}
                  className="meal-image"
                  onMouseEnter={() => handleHover(details)}
                  onMouseLeave={handleMouseLeave}
                />
              </Col>
            ))}
          </Row>
        </Col>
        {/* Details Container */}
        <Col md={6} className="detailsContainer" dir="rtl" lang="ar">
          <h3>{activeText.name}</h3>
          <p>{activeText.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailsText;
