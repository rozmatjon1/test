const Card = ({ children }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '20px' }}>
      <h1>card title</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      {children}
      <button>read more...</button>
    </div>
  )
}
export default Card
