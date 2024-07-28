


function Form({Close}){
    return <div className=" bg-black bg-opacity-85 h-screen absolute w-full top-0 ">
     <div className=" sm:ml-[400px] pt-20">
        {/* <h1 className="pb-5 text-3xl"> Form</h1> */}
        <form className="bg-white p-3 w-[400px] h-[400px]">

        <i onClick={Close} class="fa-solid fa-x text-3xl"></i>


        <input className="w-[360px] h-[40px] my-3 border-2 border-black " type="text" placeholder="Enter title" />
        <textarea className="border-2 border-black" rows={8} cols={46}></textarea>
        <button className="bg-black text-white px-[150px] my-5 py-2 text-3xl rounded ">save</button>


        </form>
    </div>
    </div>
}

export default Form