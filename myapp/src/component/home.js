import './home.css';
function Home() {
    return (
        <>
        <div>
        <div className="wrap">
          <div className="card">
            <div className="card-content">
              <h1>A Title</h1>
              <hr />
              <p>And some good descriptive content here telling us what this is about and why we should care.</p>
              <div className="tab">Night sky</div>
            </div> {/* end card content */}
          </div> {/* end card */}
        </div> {/* end wrap */}
        <div className="wrap">
          <div className="card">
            <div className="card-content">
              <h1>A Title</h1>
              <hr />
              <p>And some good descriptive content here telling us what this is about and why we should care.</p>
              <div className="tab">Sublime scenery</div>
            </div> {/* end card content */}
          </div> {/* end card */}
        </div> {/* end wrap */}
        <div className="wrap">
          <div className="card">
            <div className="image three" />
            <div className="card-content">
              <h1>A Title</h1>
              <p>And some good descriptive content here telling us what this is about and why we should care.</p>
              <div className="tab">Colour galore</div>
            </div> {/* end card content */}
          </div> {/* end card */}
        </div> {/* end wrap */}
        <div className="wrap">
          <div className="card">
            <div className="image four" />
            <div className="card-content">
              <h1>A Title</h1>
              <p>And some good descriptive content here telling us what this is about and why we should care.</p>
              <div className="tab">Spray paint</div>
            </div> {/* end card content */}
          </div> {/* end card */}
        </div> {/* end wrap */}
      </div>
        
        </>
    )
}
export default Home