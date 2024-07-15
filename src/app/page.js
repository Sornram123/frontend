import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
     <div className="container-fluid">
       <a className="navbar-brand" href="#">Logo</a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon" />
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="" target="blank">Home</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="" target="blank">About</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="" target="_blank">Servic</a>
           </li>
           <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="" target="blank">Contact </a>
           </li>
         </ul>
         <form className="d-flex" role="search">
           <button className="btn btn-outline-success" type="submit">Sing In</button>
           <button className="btn btn-outline-success" type="submit">Sing</button>
         </form>
       </div>
     </div>
   </nav>
   <div id="carouselExampleIndicators" className="carousel slide">
     <div className="carousel-indicators">
       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
     </div>
     <div className="carousel-inner">
       <div className="carousel-item active">
         <img src="https://tonkit360.com/wp-content/uploads/2021/02/%E0%B8%AD%E0%B8%A7%E0%B8%81%E0%B8%B2%E0%B8%A8.jpg" className="d-block w-100" alt="..." />
       </div>
       <div className="carousel-item">
         <img src="" className="d-block w-100" alt="..." />
       </div>
       <div className="carousel-item">
         <img src="https://konderntang.com/wp-content/uploads/2023/11/alien-02.jpg" className="d-block w-100" alt="..." />
       </div>
     </div>
     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true" />
       <span className="visually-hidden">Previous</span>
     </button>
     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true" />
       <span className="visually-hidden">Next</span>
     </button>
   </div>
   <br></br>
   <div className="row">
         <div className="col-4 text center" >
             <div className="card" style={{width: '34rem'}}>
              <img src="https://konderntang.com/wp-content/uploads/2023/11/alien-02.jpg" className="card-img-top" alt="..." />
                 <div className="card-body">
                   <h5 className="card-title">Alien</h5>
                     <p className="card-text">มนุษย์ต่างดาว (Alien) คือ คำที่เกิดจากจินตนาการในนิยายวิทยาศาสตร์ ที่ใช้เรียก สิ่งมีชีวิตนอกโลกที่อาศัยอยู่บนดาวดวงอื่น คำว่า ‘มนุษย์ต่างดาว’ เขียนเป็นภาษาอังกฤษ ว่า Alien มีรากศัพท์มาจากคำว่า Allus ในภาษาละติน (Latin) แปลว่า อื่นๆ (Other) ซึ่งมนุษย์ต่างดาวนั้นไม่จำเป็นต้องมีรูปร่าง หน้าตา หรือลักษณะท่าทางเคลื่อนไหวคล้ายมนุษย์ จึงสามารถใช้คำว่า ‘สิ่งมีชีวิตต่างดาว’(Extraterrestrial life)แทนได้ และจากการศึกษาของนักวิทยาศาสตร์ในปัจจุบัน ยังไม่พบว่ามีมนุษย์ต่างดาวอาศัยอยู่บนดาวเคราะห์ต่างๆที่โคจรรอบดวงอาทิตย์ในระบบสุริยะจักรวาลนี้ แต่นักวิทยาศาสตร์บางกลุ่มยังคงมีความเชื่อว่า น่าจะมีโอกาสค้นพบมนุษย์ต่างดาวอาศัยอยู่บนดาวดวงใดๆในจักรวาลอื่นๆ โดยคาดว่า มนุษย์ต่างดาวนี้น่าจะมีระดับสติปัญญาที่ใกล้เคียง หรือฉลาดกว่ามนุษย์</p>
                       <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
             </div>
                 </div>
         <div className="col-4 text center" >
             <div className="card" style={{width: '34rem'}}>
               <img src="https://img.lovepik.com//photo/40063/0102.jpg_860.jpg" className="card-img-top" alt="..." />
                 <div className="card-body">
                   <h5 className="card-title">ดาวเทียม</h5>
                     <p className="card-text">ดาวเทียมจัดเป็นยานอวกาศแบบแรก ที่มนุษย์ส่งขึ้นไปโคจรรอบโลกเพื่อสำรวจอวกาศ วงโคจรของดาวเทียมมีอยู่ 3 ชนิด คือ วงโคจรระดับต่ำ วงโคจรระดับกลาง และวงโคจรค้างฟ้า ตัวอย่างดาวเทียม เช่น ดาวเทียมสปุตนิก</p>
                       <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
             </div>
                 </div>
         <div className="col-4 text center" >
             <div className="card" style={{width: '34rem'}}>
               <img src="https://cdn.pixabay.com/photo/2023/10/16/00/00/ufo-8318128_1280.jpg" className="card-img-top" alt="..." />
                 <div className="card-body">
                   <h5 className="card-title">UFO</h5>
                     <p className="card-text">วัตถุบินไม่สามารถระบุได้ หรือมักเรียกว่า ยูเอฟโอ หรือ ยูโฟ (UFO) หรือทางการ ปรากฏการณ์ผิดปกติที่ระบุไม่ได้ หรือ ยูเอพี (UAP) ในความหมายกว้างที่สุด คือ สิ่งผิดปกติประจักษ์ชัดใด ๆ ในท้องฟ้า (หรือใกล้หรืออยู่บนพื้นดิน แต่สังเกตว่าบินร่อน ลงจอดหรือทะยานขึ้นสู่ท้องฟ้า) ซึ่งไม่สามารถระบุได้ในทันทีว่าเป็นวัตถุหรือปรากฏการณ์ใด ๆ ที่ทราบจากการสังเกตด้วยตา หรือ การใช้เครื่องมือช่วย เช่น เรดาร์ สิ่งผิดปกตินี้มักเรียกว่า "จานผี" หรือ "จานบิน" ระหว่างคริสต์ทศวรรษ 1940 และต้นคริสต์ทศวรรษ 1950.</p>
                       <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
             </div>
                 </div>
      <div className="container">
     <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
       <div className="col-md-4 d-flex align-items-center">
         <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
           <svg className="bi" width={30} height={24}><use xlinkHref="#bootstrap" /></svg>
         </a>
         <span className="mb-3 mb-md-0 text-body-secondary">Â© 2024 Company, Inc</span>
       </div>
       <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
         <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
         <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
         <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
       </ul>
     </footer>
   </div>
   
   </div>
      
   </>
     );
   }