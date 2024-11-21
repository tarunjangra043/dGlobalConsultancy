import React, { useState, useEffect } from "react";
import "./Card.css";
import { toast } from "react-toastify";

const Card = ({ product, onPurchase, onRenew }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [days, setDays] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDays, setSelectedDays] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);

  const {
    _id,
    image,
    title,
    description,
    basePrice,
    isPurchased,
    expirationDate,
  } = product;

  const daysLeft = expirationDate
    ? Math.ceil((new Date(expirationDate) - Date.now()) / (24 * 60 * 60 * 1000))
    : 0;

  useEffect(() => {
    if (isPurchased && expirationDate && daysLeft <= 3) {
      const countdown = setInterval(() => {
        const now = new Date();
        const expiration = new Date(expirationDate);
        const timeDiff = expiration - now;

        if (timeDiff <= 0) {
          clearInterval(countdown);
          setTimeLeft("00:00:00");
        } else {
          const hours = Math.floor(timeDiff / (1000 * 60 * 60));
          const minutes = Math.floor(
            (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

          setTimeLeft(
            `${hours.toString().padStart(2, "0")}:${minutes
              .toString()
              .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
          );
        }
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [isPurchased, expirationDate, daysLeft]);

  const handlePurchaseClick = () => {
    setIsPopupOpen(true);
    setSelectedDays(days);
  };

  const handleSubmit = () => {
    if (!email || !days) {
      alert("Please fill in all required fields.");
      return;
    }
    toast.success("Congrats🎉 Thanks for Purchasing!");
    setIsLoading(true);
    onPurchase(_id, email, days);
    setIsPopupOpen(false);
    setIsLoading(false);
  };

  const handleRenew = () => {
    toast.success("Service Renewed for 7 days!");
    setIsLoading(true);
    onRenew(_id, 7);
    setIsLoading(false);
  };

  const calculateExpirationDate = (daysToAdd) => {
    const expiration = new Date();
    expiration.setDate(expiration.getDate() + daysToAdd);
    return expiration.toLocaleDateString();
  };

  return (
    <>
      <div className="card">
        <img src={image} alt={title} className="card-img" />
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Price: ${basePrice}</p>

          {isPurchased ? (
            expirationDate && (
              <>
                {daysLeft <= 3 ? (
                  <p>
                    Service will expire in :-
                    <span style={{ color: "red" }}> {timeLeft}</span>
                  </p>
                ) : (
                  <p>
                    Service expires on :-
                    <span style={{ color: "red" }}>
                      {" "}
                      {new Date(expirationDate).toLocaleDateString()}
                    </span>
                  </p>
                )}
                <button onClick={handleRenew}>Renew for 7 days</button>
              </>
            )
          ) : (
            <button onClick={handlePurchaseClick}>Buy Now</button>
          )}

          {isPurchased === false && expirationDate === null && (
            <p>This service is not purchased yet.</p>
          )}
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h3>Purchase Service</h3>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Days:</label>
            <select
              value={days}
              onChange={(e) => {
                setDays(Number(e.target.value));
                setSelectedDays(Number(e.target.value));
              }}
            >
              <option value={1}>1 day</option>
              <option value={7}>7 days</option>
              <option value={30}>30 days</option>
              <option value={90}>90 days</option>
            </select>

            <p>
              You are purchasing for {selectedDays} day(s). The service will
              expire on:{" "}
              {selectedDays ? calculateExpirationDate(selectedDays) : "N/A"}.
            </p>

            {isLoading ? (
              <p>Processing...</p>
            ) : (
              <>
                <button onClick={handleSubmit}>Buy</button>
                <button onClick={() => setIsPopupOpen(false)}>Cancel</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
