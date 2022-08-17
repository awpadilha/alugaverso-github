import { Drawer } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDateRange } from "../../context/DateRangeProvider";
import { MetaversesAPI } from "../../services/metaverses";
import { DatePicker } from "../DatePicker";
import { DestinationInput } from "../DestinationInput";
import "./styles.scss";

export function SearchDrawer({
  open = false,
  onClose = () => {},
  toggle = () => {},
}) {
  const [metaversesOptions, setMetaversesOptions] = useState([]);
  const { startDate, endDate, setStartDate, setEndDate } = useDateRange();
  const navigate = useNavigate();

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
    const metaverseName = metaversesOptions?.find(
      (opt) => String(opt.value) === metaverseId
    )?.label;
    const start = dayjs(startDate).format("YYYY-MM-DD");
    const end = dayjs(endDate).format("YYYY-MM-DD");

    if (metaverseId && startDate && endDate) {
      navigate(
        `/lands?metaverseName=${metaverseName}&initialDate=${start}&endDate=${end}`
      );
    } else if (startDate && endDate) {
      toast("Ops! Em qual metaverso você deseja alugar?", {
        type: "warning",
        theme: "dark",
      });
    } else if (metaverseId) {
      navigate(`/metaverses/${metaverseId}`);
    }
    toggle();
  };

  return (
    <Drawer anchor="top" open={open} onClose={onClose}>
      <form onSubmit={handleSubmit} className="search-drawer">
        <button type="button" className="search-drawer__close-btn" onClick={toggle}>
          <MdClose />
        </button>
        <DestinationInput options={metaversesOptions} />
        <DatePicker
          monthsShown={1}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          withPortal={true}
        />
        <button type="submit" className="search-drawer__submit-btn">
          Pesquisar
        </button>
      </form>
    </Drawer>
  );
}
