import React from "react";
import './Journey.css';
const Journey = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">เส้นทางของ Setsukun</h1>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-2">จุดเริ่มต้น</h2>
            <p className="text-gray-300">
              เริ่มต้นจากมือถือเครื่องเดียว ใช้ Acode, Termux และ GitHub Mobile ในการเขียนโค้ดและ deploy เว็บจริง
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">เทคโนโลยีที่เรียนรู้</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>HTML, CSS, JavaScript</li>
              <li>React + Vite, Node.js, Express.js</li>
              <li>MongoDB, MySQL, REST API</li>
              <li>GitHub, Netlify, Vercel, Render</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">ความสำเร็จล่าสุด</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Deploy เว็บจริงบน Render แบบ static และ full-stack</li>
              <li>แก้ทุก error ที่เจอด้วยความเข้าใจและความอดทน</li>
              <li>สร้าง Resume หน้าเว็บที่บริษัทต้องจำชื่อ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">เป้าหมายต่อไป</h2>
            <p className="text-gray-300">
              สร้างเว็บไซต์ที่เล่าเรื่องของนักพัฒนาที่เริ่มจากศูนย์ และกลายเป็นแรงบันดาลใจให้คนอื่นได้เริ่มต้นเหมือนกัน
            </p>
          </section>
        </div>

        <div className="text-center mt-12">
            <footer className="footer">
        <button onClick={() => window.location.href = '/'} className="back-btn">
          ← กลับหน้าแรก
        </button>
      </footer>
        </div>
      </div>
    </div>
  );
};

export default Journey;
