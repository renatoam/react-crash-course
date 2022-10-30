import './Header.scss'
 
export default function Header({ children }) {
  return (
    <header className="header">
      {children}
    </header>
  )
}
