import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';

function App() {
  // const sendEmial = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="App">
      <div className="container">
        <form>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="text" className="form-control" placeholder="Name" />
            </div>

            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="password"
                className="form-control"
                placeholder="password"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <Button variant="primary"> submit</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
