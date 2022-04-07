import "./Form.scss";
import { AiFillSave } from "react-icons/ai";

function Form() {
  return (
    <div className="form-container">
      <form>
        <div className="segment">
          <h1>Visus</h1>
        </div>
        <div className="inputs">
          <label>
            <input className="text-input" type="text" placeholder="Name *" />
          </label>
          <label>
            <input
              className="text-input"
              type="text"
              placeholder="Email Address *"
            />
          </label>
          <label>
            <input
              className="text-input"
              type="text"
              placeholder="Phone number"
            />
          </label>
          <label>
            <input className="text-input" type="text" placeholder="Comments" />
          </label>

          <input type="checkbox" className="checkbox-input" />
        </div>
        <div>
          <button className="unit" type="button">
            <AiFillSave />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
