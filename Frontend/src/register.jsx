import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>ลงทะเบียน</h1>
      <button onClick={handleGoHome}>กลับหน้าหลัก</button>
    </div>
  );
}

export default Register;



