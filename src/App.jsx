
function App() {

  return (
    <>

      <header className='bg-[#0D0D0D] w-full h-[8rem] md:h-[12rem] flex justify-center items-center'>
        <img src="./src/assets/Logo.svg" alt="Logo" />

      </header>

      <main className='bg-black h-[80vh]'>
        <section>
          {/*Inputs section */}
          <form>
            <div className='flex md:flex-row  w-full justify-center items-center gap-2 '>
              <input
                className='bg-gray-600 w-[36%] h-10 rounded-md px-2 -mt-4'
                type="text"
                placeholder='Create a task here!'
              />

              <button className=' bg-[#1E6F9F] text-white flex flex-row gap-2 h-10 items-center p-2 rounded-md -mt-4'>
                <span className='font-thin'>Create</span>
                <img src="./src/assets/plus.svg" />
              </button>

            </div>
          </form>
        </section>

        <section className=' flex flex-col items-center w-full'>

          <hr className='md:hidden w-[72%] h-[0.1px] bg-[#ebebeb6b] mt-4' />

          {/* Outputs section */}
          <header className='flex flex-col md:flex-row mt-[1rem] md:mt-[2rem] gap-2 md:w-[44%] items-end ml-[24%] md:ml-0 md:justify-between '>
            <div className='flex flex-row gap-2'>
              <span className='text-[#4EA8DE] font-bold'>Created tasks</span>
              <span className='text-white font-bold bg-[#333333] flex rounded-[44%] w-8 justify-center'>0</span>
            </div>

            <div className='flex flex-row gap-2'>
              <span className='text-[#8284FA] font-bold'>Complete</span>
              <span className='text-white font-bold bg-[#333333] flex rounded-[44%] w-8 justify-center'>0</span>
            </div>

          </header>

          <hr className='md:w-[44%] w-[72%] h-[0.1px] bg-[#ebebeba6] mt-4' />

          <div className='flex flex-col items-center gap-2 mt-12'>
            <img src="./src/assets/Clipboard.svg" alt="image" className='w-14 items-center' />
            <span>
              <p className='text-[#808080] font-bold'>You have no tasks created</p>
              <p className='text-[#808080] '>Create tasks and organize your days</p>
            </span>
          </div>

        </section>

      </main>
    </>
  )
}

export default App
