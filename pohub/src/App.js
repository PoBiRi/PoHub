import './App.css';
import Logo from './logo.png';

function App() {
  return (
    <div className="box">
      <aside className="sidebar">
        <div className="logo-box">
          <img src={Logo} alt='Nothing Here' />
        </div>
        <div className="thread-container">
          <div className="thread-box">
            <div className="threadx" />
            <div className="threadx" />
            <div className="threadx" />
            <div className="threadx" />
            <div className="threadx" />
            <div className="threadx" />
            <div className="threadx" />
            <div className="threadx" />
            <div className="threadx" />
          </div>
        </div>
        <div className="footer" />
      </aside>
      <div className='void' />
      <main className="main">
        <header className="header-container">
          <div className="search-bar" />
          <UserIcon className="user-icon" />
        </header>
        <section className="section-container">
          <div className="boardx" />
          <div className="boardx" />
          <div className="boardx" />
          <div className="boardx" />
          <div className="boardx" />
          <div className="boardx" />
          <div className="boardx" />
          <div className="boardx" />
          <div className="boardx" />
          <div className="boardx" />
          <div className="boardx" />
        </section>
      </main>
    </div>
  )
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export default App;
