
export default function CreateAccount() {


  return (
    <>
      <div className="login">
        <div className="logform" dir="rtl" lang="ar">
          <form action="">
            <input
              type="text"
              name="firstName"
              id="first"
              placeholder="الاسم*"
              required
            />
            <input
              type="text"
              name="lastName"
              id="last"
              placeholder="اسم الشركة*"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="البريد الكتروني*"
              required
            />
            <input
              type="text"
              name="password"
              id="password"
              placeholder="الهاتف*"
              minLength={6}
              required
            />

            <input
              type="text"
              name="password"
              id="password"
              placeholder="رسالة*"
              minLength={6}
              required
              className="form-massage"
            />
            <button className="btn-submit" >ارسال</button>
          </form>
        </div>

 
      </div>
    </>
  );
}
