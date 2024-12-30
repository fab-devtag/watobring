import Head from "next/head";

export default function Home() {
  return (
    <div className="card card-side bg-base-100 shadow-xl w-96">
      <div className="card-body">
        <h2 className="card-title">Créer un évènement</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
}
