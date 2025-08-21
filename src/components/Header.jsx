export default function Header() {
  return (
    <header className='flex justify-between items-center bg-black py-[10px] px-[20px]'>
      <h2 className='text-[#fff]'>OZ코딩스쿨</h2>
      <ul className='flex justify-center items-center gap-[20px] menu-container'>
        <li className='list-none font-normal text-[13px] text-[#fff]'>로그인</li>
        <li className='list-none font-normal text-[13px] text-[#fff]'>회원가입</li>
        <li className='list-none font-normal text-[13px] text-[#fff]'>내클래스</li>
      </ul>
    </header>
  );
}
