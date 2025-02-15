import Link from "next/link";
import { Button } from "../ui/button";
import { MdOutlineVilla } from "react-icons/md"

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <MdOutlineVilla className="w-6 h-6" />
      </Link>
    </Button>
  )
}

export default Logo
