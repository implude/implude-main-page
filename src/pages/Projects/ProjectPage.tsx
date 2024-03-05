import { useParams } from 'react-router-dom'

export default function ProjectPage() {
  const { id } = useParams()
  return (
    <div>
      <h2>OwO {id}</h2>
    </div>
  )
}
