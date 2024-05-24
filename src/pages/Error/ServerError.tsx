const ServerError = () => {
  return <>
    <div className="max-w-screen-sm px-5 mx-auto">
      <div className="flex items-center gap-6">
        <div className="text-[100px]  font-bold text-gray-400">500</div>
        <div className="text-[40px]  text-pink-500 font-bold ">Server Eroor</div>
      </div>
      <div className="text-[20px] flex flex-col gap-3 pt-10 text-gray-500">
        <div>Oops, somethiing went wrong</div>
        <div>Try to refresh this page or feel free to contact us if the problem persists</div>
      </div>

    </div>
  </>
}

export default ServerError