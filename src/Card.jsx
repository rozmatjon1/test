const Card = ({ product }) => {
  return (
    <div className='border border-gray-500'>
      <img src={product.img} alt='rasm' />
      <p>{product.title}</p>
      <b>{Number(product.price).toLocaleString('ru')} so'm</b>
    </div>
  )
}

export default Card
