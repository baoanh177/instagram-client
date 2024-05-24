import { Link } from "react-router-dom"

const NotFound = () => {
  return <>
    <div className="max-w-screen-md mx-auto text-center ">
      <div className="text-[24px] font-medium py-7">Sorry, this page isn't available.</div>
      <p>The link you followed may be broken, or the page may have been removed. <Link className="text-[#00376b]" to="/" >Go back to Instagram.</Link></p>
    </div>
  </>
}

export default NotFound