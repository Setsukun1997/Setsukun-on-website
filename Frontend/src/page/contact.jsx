function Contact() {
  return (
    <div>
      <h1>ติดต่อเรา</h1>
      <form>
        <input type="text" placeholder="ชื่อ" />
        <input type="email" placeholder="อีเมล" />
        <textarea placeholder="ข้อความ"></textarea>
        <button type="submit">ส่งข้อความ</button>
      </form>
    </div>
  );
}

export default Contact;
