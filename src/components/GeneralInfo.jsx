const GeneralInfo = ({ disabled, data, onChange }) => {
  return (
    <section>
      <h3>General Information</h3>
      <div className="form-group">
        <label>
          <p>Name</p>
          <input
            type="text"
            value={data.name}
            onChange={(e) => onChange({ ...data, name: e.target.value })}
            disabled={disabled}
            placeholder="John Doe"
          />
        </label>

        <label>
          <p>Email</p>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            disabled={disabled}
            placeholder="johndoe@example.com"
          />
        </label>

        <label>
          <p>Phone</p>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => onChange({ ...data, phone: e.target.value })}
            disabled={disabled}
            placeholder="+1 234 567 890"
          />
        </label>
      </div>
    </section>
  );
};

export default GeneralInfo;
