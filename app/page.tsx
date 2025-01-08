import "@flaticon/flaticon-uicons/css/all/all.css";

export default function Home() {
  return (
    <div className="card card-side bg-base-100 shadow-xl w-96 border-2 border-accent">
      <div className="card-body">
        <h2 className="card-title border-b-2 border-b-neutral pb-2">
          Créer un évènement
        </h2>
        <p>
          Cliquer sur le bouton "Créer" pour commencer à créer votre évènement
        </p>

        <div className="card-actions justify-end">
          <button className="btn btn-accent">Créer</button>
        </div>
      </div>
    </div>
  );
}
