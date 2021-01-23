function StepsHeader() {
  return (
    <header className="orders-steps-container">
      <div className="orders-steps-content">
        <h1 className="steps-title">
          FOLLOW <br/>
          THE STEPS
        </h1>
        <ul className="steps-items">
          <li>
            <span className="steps-number">1</span>
            Select product and address.
          </li>
          <li>
            <span className="steps-number">2</span>
            Then click <strong>"SEND ORDER"</strong>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default StepsHeader;
