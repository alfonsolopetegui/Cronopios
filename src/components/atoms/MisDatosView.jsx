import { useSelector } from "react-redux";

const MisDatosView = ({ setViewMenu, setViewMisDatos }) => {
  const user = useSelector((state) => state.user);

  const handleClose = () => {
    setViewMisDatos(false);
    setViewMenu(true);
  };
  return (
    <div className="mt-20">
      <nav className="flex justify-center">
        <h1 className="text-2xl font-bold text-rose-500">Mis Datos</h1>
      </nav>
      <section className="p-4 flex flex-col gap-2">
        <div className="border-b">
          <h2 className="text-xl -mb-1">{user.name}</h2>
          <p>name</p>
        </div>
        <div className="border-b">
          <h2 className="text-xl -mb-1">{user.username}</h2>
          <p>username</p>
        </div>
        <div className="border-b">
          <h2 className="text-xl -mb-1">{user.email}</h2>
          <p>email</p>
        </div>
        <div className="border-b">
          <h2 className="text-xl -mb-1">{user.address}</h2>
          <p>address</p>
        </div>
        <div className="border-b">
          <h2 className="text-xl -mb-1">{user.city}</h2>
          <p>city</p>
        </div>
        <div className="border-b">
          <h2 className="text-xl -mb-1">{user.country}</h2>
          <p>country</p>
        </div>
        <div className="border-b">
          <h2 className="text-xl -mb-1">{user.phone}</h2>
          <p>phone</p>
        </div>
      </section>
      <div className="flex justify-around mt-8">
        <button className="text-xl text-white w-24 p-2 bg-rose-500 rounded-lg mr-3">
          Editar
        </button>
        <button onClick={handleClose} className="text-xl text-white w-24 p-2 bg-rose-500 rounded-lg">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default MisDatosView;
