[@react.component]
let make = (~state: UseFlickr.state) => {
  <div>
    {switch (state) {
     | Error => <div> {React.string("An Error Has Occured.")} </div>
     | Done(photos) =>
       <div className="photo-container">
         <ul>
           {photos
            ->Belt.Array.mapWithIndex((_i, photo) => {
                let src =
                  "https://farm"
                  ++ string_of_int(photo.farm)
                  ++ ".staticflickr.com/"
                  ++ photo.server
                  ++ "/"
                  ++ photo.id
                  ++ "_"
                  ++ photo.secret
                  ++ ".jpg";

                <li className="photo" key={photo.id}> <img src alt="" /> </li>;
              })
            ->React.array}
         </ul>
       </div>
     | Ready => <div> {React.string("Search for something!")} </div>
     | _ =>
       <div> <img src="public/img/Flickr.svg" alt="Loading Results" /> </div>
     }}
  </div>;
};
