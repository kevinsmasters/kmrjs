import Image from 'next/image';
export default function Projects() {
    return(
        <>
        <a name="projects"></a>
        <div className="row mt-5 mb-3">
            <div className="col-md-12"><h2 className="pb-2">Projects</h2></div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <a href="https://github.com/kevinsmasters/ng-financial-chart" target="_blank">
          <Image
            src="/images/GitHub-Mark-120px.png" // Route of the image file
            height={120} // Desired size with correct aspect ratio
            width={120} // Desired size with correct aspect ratio
            alt="Github Project"
           />
           </a>
            <div className="card-body">
              <p className="card-text">Using JSON data to display chart of revenue vs. cancellations.</p>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <a href="https://rivertidejamaicaretreats.org/home" target="_blank">
          <Image
            src="/images/rivertide-jamaica.png" // Route of the image file
            height={120} // Desired size with correct aspect ratio
            width={170} // Desired size with correct aspect ratio
            alt="Rivertide Retreats"
           />
           </a>
            <div className="card-body">
              <p className="card-text">Angular app. Features customized form components connecting to their Paypal ecommerce widgets.</p>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <a href="https://github.com/kevinsmasters/asana-project-status" target="_blank">
          <Image
            src="/images/GitHub-Mark-120px.png" // Route of the image file
            height={120} // Desired size with correct aspect ratio
            width={120} // Desired size with correct aspect ratio
            alt="Github Project"
           />
           </a>
            <div className="card-body">
              <p className="card-text">Python script to query Asana projects and save to CSV.</p>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <a href="https://www.taconic.com/quality/animal-health/health-standards/health-standard-selector/" target="_blank">
          <Image
            src="/images/taconic-health-standard-selector.png" // Route of the image file
            height={120} // Desired size with correct aspect ratio
            width={193} // Desired size with correct aspect ratio
            alt="Taconic Biosciences Health Standard Selector"
           />
           </a>
            <div className="card-body">
              <p className="card-text">JavaScript/CSS/HTML widget to help a researcher select the best animal model health standard assuming pathogen exclusion criteria.</p>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <a href="https://research.amnh.org/paleontology/perissodactyl/" target="_blank">
          <Image
            src="/images/amnh-perissodactyls.png" // Route of the image file
            height={120} // Desired size with correct aspect ratio
            width={193} // Desired size with correct aspect ratio
            alt="AMNH Perissodactyls"
           />
           </a>
            <div className="card-body">
              <p className="card-text">American Museum of Natural History Perissodactyls Research Site<br/>Drupal custom template and site architecture.</p>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <a href="https://ulstercountyny.gov/" target="_blank">
          <Image
            src="/images/ulstercounty-ny.png" // Route of the image file
            height={120} // Desired size with correct aspect ratio
            width={192} // Desired size with correct aspect ratio
            alt="Ulster County NY"
           />
           </a>
            <div className="card-body">
              <p className="card-text">Ulster County Government Website<br/>Drupal custom template, site architecture, custom views and interactive features.</p>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <a href="https://www.taconic.com/resources/" target="_blank">
          <Image
            src="/images/taconic-resources.png" // Route of the image file
            height={120} // Desired size with correct aspect ratio
            width={207} // Desired size with correct aspect ratio
            alt="Taconic Biosciences Resources"
           />
           </a>
            <div className="card-body">
              <p className="card-text">Searchable library of Taconic Biosciences marketing materials.<br/>Angular app utilizing Node API connected to MySQL database.</p>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          align-content: center;
          text-align: center;
          padding-top: 1rem;
        }
        .card img {
          text-align: center;
        }
        `}</style>
      </>
    )
}