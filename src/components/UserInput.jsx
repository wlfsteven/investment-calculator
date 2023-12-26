import InputField from "./InputField.jsx";
import {INPUT_FIELDS} from "../constants.js";

export default function UserInput({inputs, onInputChange}) {

  return (
      <div id="user-input" className="input-group">
        <div>
          <InputField fieldName={INPUT_FIELDS.INITIAL_INVESTMENT.name}
                      fieldKey={INPUT_FIELDS.INITIAL_INVESTMENT.key}
                      inputValue={inputs[INPUT_FIELDS.INITIAL_INVESTMENT.key]}
                      onInputChange={onInputChange}/>
          <InputField fieldName={INPUT_FIELDS.EXPECTED_RETURN.name}
                      fieldKey={INPUT_FIELDS.EXPECTED_RETURN.key}
                      inputValue={inputs[INPUT_FIELDS.EXPECTED_RETURN.key]}
                      onInputChange={onInputChange}/>
        </div>
        <div>
          <InputField fieldName={INPUT_FIELDS.ANNUAL_INVESTMENT.name}
                      fieldKey={INPUT_FIELDS.ANNUAL_INVESTMENT.key}
                      inputValue={inputs[INPUT_FIELDS.ANNUAL_INVESTMENT.key]}
                      onInputChange={onInputChange}/>
          <InputField fieldName={INPUT_FIELDS.DURATION.name}
                      fieldKey={INPUT_FIELDS.DURATION.key}
                      inputValue={inputs[INPUT_FIELDS.DURATION.name]}
                      onInputChange={onInputChange}/>
        </div>

      </div>
  )
}