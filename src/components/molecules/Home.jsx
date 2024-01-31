import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div
        className="w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "URL('https://firebasestorage.googleapis.com/v0/b/proyecto-libreria-22941.appspot.com/o/pexels-pixabay-433333.jpg?alt=media&token=076edd07-af5c-4645-b60d-47b6ed2bc416')",
        }}
      >
        <div className="absolute bg-red-700 w-full h-full opacity-50"></div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-7">
          <p className="text-black text-7xl z-10">
            Crono <span className="text-white -ml-4">pios</span>
          </p>
          <button className="w-36 h-36 shadow-lg py-3 border-2 rounded-full text-2xl text-white z-10">
          <Link to={'/bookFinder'}>
            Comenzar
          </Link>
          </button>
        </div>
      </div>
  )
}

export default Home