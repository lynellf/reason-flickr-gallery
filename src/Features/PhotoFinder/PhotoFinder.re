[@react.component]
let make = (~apiKey: string) => {
  let (state, handleSubmit) = UseFlickr.make(~apiKey = apiKey);

  <div>
    <Search handleSubmit />
    <Gallery state />
  </div>
}