export default function Contact() {
    return(
        <>
        <div className="row mb-3 mt-5">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                
                <h2 className="pb-2">Contact</h2>
                <form>
                <fieldset>
                <div className="form-group">
                    <label for="inputName" className="form-label mt-4">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Enter name" />
                  </div>
                  <div className="form-group">
                    <label for="inputEmail1" className="form-label mt-4">Email address</label>
                    <input type="email" className="form-control" id="inputEmail1" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label for="exampleTextarea" className="form-label mt-4">Message</label>
                    <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </fieldset>
              </form>
                
                </div>
            <div className="col-md-3"></div>
        </div>
        </>
    )
}