import static_logo from "../assets/static.png";
import "../static/watch_now.css";

function Latest() {
  var element = (
    <div id="carouselExample" class="carousel slide">
      <h5>WATCH NOW</h5>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={static_logo} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={static_logo} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={static_logo} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={static_logo} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={static_logo} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={static_logo} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={static_logo} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={static_logo} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={static_logo} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={static_logo} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={static_logo} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={static_logo} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={static_logo} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={static_logo} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={static_logo} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={static_logo} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
  return element;
}
export default Latest;
