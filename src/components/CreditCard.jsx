import React from 'react';

const CreditCard = (props) => {
  let cardLogo = {
    'Master Card': './../img/master-card.svg',
    Visa: './../img/visa.png',
  };

  let privateNum = '.... .... .... ' + props.number.substring(12);

  let year = props.expirationYear.toString().substr(-2);

  let monthProp = props.expirationMonth.toString();

  let month;
  if (monthProp.length === 1) {
    month = '0' + monthProp;
  } else {
    month = monthProp;
  }

  return (
    <div
      className="CreditCard"
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
      }}
    >
      <div className="logo">
        <img
          className="bank-Logo"
          alt={`${props.type} logo`}
          src={cardLogo[props.type]}
        />
      </div>

      <div className="account-nb">{privateNum}</div>

      <div className="bank-infos">
        <p className="expiration-date">
          Expires : {month} / {year}
        </p>

        <p className="bank">{props.bank}</p>
      </div>

      <p className="owner">{props.owner}</p>
    </div>
  );
};

export default CreditCard;
