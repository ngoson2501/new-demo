function Header(){
    return(<>

                <div className="bg-red-600 w-full h-[70px] px-[15%] flex">
                    <div className="bg-green-800 w-[40%] h-full flex items-center justify-between  pr-[1%] ">
                        <p className="text-3xl font-medium font-sans bg-slate-100 mr-6 ">HappyFood</p>
                        <div className="flex bg-red-400 w-[80%] h-[50%] ">
                            <p className="bg-white w-[13%] h-[100%] py-[1.5%] rounded-l-[5px] flex justify-center items-center">
                                <img className="object-contain w-full h-full" src="public/img/icon-search.png" alt="" />
                            </p>
                            <input className="border-none outline-none focus:ring-0 w-[80%] h-[100%] rounded-r-[5px] text-base px-4" type="text" placeholder="Tìm công thức hoặc sản phẩm" />
                        </div>
                    </div>
                    <div className="bg-green-700 w-[50%] h-full"></div>
                </div>

           </>)
}


export default Header