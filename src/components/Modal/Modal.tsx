import { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import crossImg from "../../img/cross.svg";
import cityValue from "../../data/mockData.json";
import { nanoid } from "nanoid";
import {
  currentDate,
  maxDate,
  getAvailableDates,
  formatDate,
} from "../../servises/formatTimeForChoose";

interface ModalProps {
  handleToggleModal: () => void;
  createTrip: any;
}

function Modal({ handleToggleModal, createTrip }: ModalProps) {
  const [selectedCity, setSelectedCity] = useState<{
    name: string;
    imageUrl: string;
  } | null>(null);
  const [selectedStartDate, setSelectedStartDate] = useState<string | null>(
    null
  );
  const [selectedEndDate, setSelectedEndDate] = useState<string | null>(null);

  useEffect(() => {
    const handleOnClose = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        handleToggleModal();
      }
    };

    window.addEventListener("keydown", handleOnClose);

    return () => {
      window.removeEventListener("keydown", handleOnClose);
    };
  }, [handleToggleModal]);

  const handleOverlyClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget === e.target) {
      handleToggleModal();
    }
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCityName = e.target.value;
    const selectedCity = cityValue.find(
      (city) => city.name === selectedCityName
    );
    if (selectedCity) {
      setSelectedCity(selectedCity);
    }
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStartDate = e.target.value;
    setSelectedStartDate(selectedStartDate);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedEndDate = e.target.value;
    setSelectedEndDate(selectedEndDate);
  };

  const handleCreateTrip = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const startDate = selectedStartDate ? new Date(selectedStartDate) : null;
    const endDate = selectedEndDate ? new Date(selectedEndDate) : null;
    createTrip({
      index: nanoid(),
      city: selectedCity?.name,
      imageUrl: selectedCity?.imageUrl,
      startData: startDate,
      endData: endDate,
    });
    handleToggleModal();
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlyClick}>
      <div className={styles.modalContainer}>
        <button className={styles.modalCloseBtn} onClick={handleToggleModal}>
          <img src={crossImg} alt="cancel" width={16} />
        </button>
        <h1 className={styles.modalTitle}>Create trip</h1>
        <form onSubmit={handleCreateTrip}>
          <div className={styles.modalSelects}>
            <label className={styles.modalFormLabel} htmlFor="selectCity">
              <sup>*</sup>City
            </label>
            <select
              className={styles.modalFormSelect}
              id="selectCity"
              defaultValue=""
              onChange={handleCityChange}
            >
              <option value="" disabled hidden>
                Please select a city
              </option>
              {cityValue.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
            <label className={styles.modalFormLabel} htmlFor="selectStartDate">
              <sup>*</sup>Start date
            </label>
            <select
              className={styles.modalFormSelect}
              id="selectStartDate"
              defaultValue=""
              onChange={handleStartDateChange}
            >
              <option value="" disabled hidden>
                Please select a start date
              </option>
              {getAvailableDates(currentDate, maxDate).map((date) => (
                <option key={date.getTime()} value={date.toISOString()}>
                  {formatDate(date)}
                </option>
              ))}
            </select>
            <label className={styles.modalFormLabel} htmlFor="selectEndDate">
              <sup>*</sup>End date
            </label>
            <select
              className={styles.modalFormSelect}
              id="selectEndDate"
              defaultValue=""
              onChange={handleEndDateChange}
            >
              <option value="" disabled hidden>
                Please select an end date
              </option>
              {getAvailableDates(
                selectedStartDate ? new Date(selectedStartDate) : currentDate,
                maxDate
              ).map((date) => (
                <option key={date.getTime()} value={date.toISOString()}>
                  {formatDate(date)}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.modalControlBtn}>
            <button className={styles.modalControlReset} type="reset">
              Cancel
            </button>
            <button className={styles.modalControlSubmit} type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
