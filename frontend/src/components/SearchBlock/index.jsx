import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { MetaversesAPI } from "../../services/metaverses";
import { DatePicker } from "../DatePicker";
import { DestinationInput } from "../DestinationInput";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { useDateRange } from "../../context/DateRangeProvider";
import { toast } from "react-toastify";

export function                          SearchBlock() {
  const [metaversesOptions, setMetaversesOptions] = useState([]);
  const navigate = useNavigate();
  const { startDate, endDate, setStartDate, setEndDate } = useDateRange();

  useEffect(() => {
    MetaversesAPI.getMetaverses().then((response) => {
      const options = response.data.content.map((metaverse) => ({
        label: metaverse.name,
        value: metaverse.id,
      }));
      setMetaversesOptions(options);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const metaverseId = event.target?.metaverse?.value;
    const metaverseName = metaversesOptions?.find(opt => String(opt.value) === metaverseId)?.label;
    const start = dayjs(startDate).format("YYYY-MM-DD");
    const end = dayjs(endDate).format("YYYY-MM-DD");

    if (metaverseId && startDate && endDate) {
      navigate(`/lands?metaverseName=${metaverseName}&initialDate=${start}&endDate=${end}`);
    }
    else if (startDate && endDate) {
      toast("Ops! Em qual metaverso você deseja alugar?", {
        type: "warning",
        theme: "dark",
      });
    }
    else if (metaverseId) {
      navigate(`/lands?metaverseId=${metaverseId}`);
    }
  };

  const clearInputs = () => {
    setStartDate(null);
    setEndDate(null);
  }

  return (
    <section className="search">
      <div className="search__form-container">
        <h1>Reserve o seu terreno no Metaverso</h1>
        <p>
          A alternativa para usufruir um terreno no tempo que precisar a nível mundial.
        </p>
        <form onSubmit={handleSubmit} onReset={clearInputs}>
          <DestinationInput options={metaversesOptions} />
          <DatePicker
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
          <button type="submit">Pesquisar</button>
        </form>
      </div>
    </section>
  );
}
