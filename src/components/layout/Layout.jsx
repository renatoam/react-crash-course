import Default from "./components/default/Default"
 
export default function Layout({ children: content }) {
  return (
    <Default>
      <Default.Header>
        <Default.Menu />
        <Default.Logo />
        <Default.Login />
      </Default.Header>
      {content}
      <Default.Footer />
    </Default>
  )
}
