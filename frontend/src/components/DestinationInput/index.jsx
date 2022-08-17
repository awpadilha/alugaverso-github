import { MdPlace } from "react-icons/md";
import "./styles.scss";

export function DestinationInput({ onChange = () => {}, options }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="destination-input">
      <MdPlace className="destination-input__icon" />
      <select
        id="metaverse"
        name="metaverse"
        onChange={handleChange}
        defaultValue=""
      >
        <option disabled value="" hidden>
          Para qual multiverso deseja ir?
        </option>
        {options.map((optionValue) => (
          <option key={optionValue.value} value={optionValue.value}>
            {optionValue.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// PENDÊNCIA: aprimorar o input para uma combobox/autocomplete, ou seja, um componente que tanto permita
// a escrita com o teclado quanto que se selecione uma das sugestões da lista que vai aparecendo.
