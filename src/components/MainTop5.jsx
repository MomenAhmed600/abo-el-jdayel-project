import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";


export default function MainTop5() {


  return (
    <>
      <Container>

        <div className="meals-container">


         
            <div className="top-meals-left-col">
              <Link >
                <h2>أفكار قيمة</h2>
                <video
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    loop="loop"
                    muted="muted"
                    autoPlay="auto"
                    src="/images/2.mp4"
                ></video>
              </Link>
            </div>
        
  
          

          <div className="top-meals-right-col">
            
         
            <div className="top-meals-left-col">
              <Link >
                <h2>استشارات مهنية</h2>
                <img style={{ width: "100%", height: "100%", objectFit: "cover"  }} src="/images/doctor.jpg" alt="" />
              </Link>
            </div>
        
            
      
           

            
             
            <div className="top-meals-left-col">
              <Link >
                <h2>توقيت ممتاز</h2>
                <img style={{ width: "100%", height: "100%", objectFit: "cover"  }} src="/images/engineer.jpg" alt="" />
              </Link>
            </div>
        
 
            
             
            <div className="top-meals-left-col">
              <Link >
                <h2>بناء السمعة المهنية</h2>
                <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="/images/programmer.jpg" alt="" />
              </Link>
            </div>
        
            

            
            
             
            <div className="top-meals-left-col">
              <Link >
                <h2>ودية الميزانية</h2>
                <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="/images/accountant.jpg" alt="" />
              </Link>
            </div>
        
            
            
            
          </div>
        </div>
      </Container>
    </>
  );
}
