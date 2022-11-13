import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt="dentist chair"
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            <p>Selected Date: {format(selectedDate, "PP")}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
