type text = string;

[@react.component]
let make = (~handleSubmit) => {
  let (query, setQuery) = React.useState(() => "");
  let handleChange = value => setQuery(value);

  <form className="search-form" onSubmit={e => handleSubmit(query, e)}>
    <input
      type_="text"
      name="search"
      placeholder="Search"
      onChange={e => handleChange(ReactEvent.Form.target(e)##value)}
      value=query
    />
    <button type_="submit" className="search-button">
      <img src="public/img/search.svg" alt="search-icon" />
    </button>
  </form>;
};
