
function CropDetails({ crop, onBack }) {
  return (
    <div className="agri-page crop-details-page">
      <nav className="agri-navbar">
        <h2>Agri-Tech</h2>
        <button onClick={onBack}>Back to Crops</button>
      </nav>

      <main className="crop-details-container">
        <h1>{crop.name} Details</h1>

        <p className="crop-scientific-name">
          {crop.scientificName}
        </p>

        <img
          className="crop-details-image"
          src={crop.image}
          alt={crop.name}
        />

        <h2>Crop Information</h2>

        <div className="crop-info-grid">
          <div className="crop-info-item">
            <h3>Scientific Name</h3>
            <p>{crop.scientificName}</p>
          </div>

          <div className="crop-info-item">
            <h3>Growing Season</h3>
            <p>{crop.season}</p>
          </div>

          <div className="crop-info-item">
            <h3>Climate</h3>
            <p>{crop.climate}</p>
          </div>

          <div className="crop-info-item">
            <h3>Soil Type</h3>
            <p>{crop.soil}</p>
          </div>

          <div className="crop-info-item">
            <h3>Growth Duration</h3>
            <p>{crop.growth}</p>
          </div>

          <div className="crop-info-item">
            <h3>Sowing Time</h3>
            <p>{crop.sowing}</p>
          </div>

          <div className="crop-info-item">
            <h3>Harvest Time</h3>
            <p>{crop.harvest}</p>
          </div>
        </div>

        <div className="crop-treatment-grid">
          <section className="pesticides-panel">
            <h2>Pesticides & Pest Management</h2>
            <ul>
              {crop.pesticides.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="fertilizers-panel">
            <h2>Recommended Fertilizers</h2>
            <ul>
              {crop.fertilizers.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <button className="crop-back-button" onClick={onBack}>
          ← Back to Crops
        </button>
      </main>
    </div>
  );
}

export default CropDetails;
