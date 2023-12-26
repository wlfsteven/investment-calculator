export default function InputField({fieldName, fieldKey, inputValue, onInputChange}) {

  function handleInputChange(event) {
    const value = parseFloat(event.target.value);
    onInputChange(fieldKey, value);
  }

  return <>
    <label className="label">{fieldName}</label>
    <input
        type="number"
        className="input"
        value={inputValue}
        onChange={handleInputChange}
    />
  </>
}