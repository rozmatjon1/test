import Card from './Card'
import { data } from './data/product'

const App = () => {
  return (
    <div className='max-w-[1280px] mx-auto my-5'>
      <ul className='grid grid-cols-4 gap-3'>
        {data.map((value) => {
          return <Card key={value.id} product={value} />
        })}
      </ul>
    </div>
  )
}
export { App }
