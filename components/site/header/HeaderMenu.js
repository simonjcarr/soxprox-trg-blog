import { Button } from 'antd'
import { useRouter } from 'next/router'

export default function HeaderMenu() {
  let router = useRouter()
  let newPostClick = () => {
    router.push("/posts/create")
  }
  return (
    <ul className="header-menu">
      <li>
        <Button onClick={newPostClick} type="primary">New Post text</Button>
      </li>
    </ul>
  )
}
