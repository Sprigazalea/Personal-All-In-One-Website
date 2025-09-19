import './App.css'

function App() {
  return (
    <div>
      <div className='flex justify-center items-center min-h-screen min-w-screen text-black'>
        <div id='block' className='flex flex-[0_1_80rem] m-[0px_100px_0px_100px] bg-white min-h-[80vh] rounded-[30px]'>
          <div id='border' className='flex flex-[100%] border border-double border-[15px] m-[12px_12px_12px_12px_] rounded-[30px]'>
            <div className='flex flex-col'>
              <img className='h-[400px] p-[40px_40px_40px_40px]' src='/474F3583-B516-4547-9537-1DEEB0578ABB.png'></img>
            </div>
            <div className='flex flex-col flex-[1_0] text-center'>
              <h1 className='text-4xl font-semibold pt-[40px] pb-[15px]'>&#127800; Sprigazalea &#127800;</h1>
              <text className='text-xl font-light'>persephone / riley, but you can call me percy</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
