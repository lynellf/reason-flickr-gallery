[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";
type photo = {
  id: string,
  owner: string,
  secret: string,
  server: string,
  farm: int,
  title: string,
  ispublic: int,
  isfriend: int,
  isfamily: int,
};

type photos = array(photo);

type payload = {
  page: int,
  pages: int,
  perpage: int,
  total: string,
  photo: photos,
};

type responseData = {
  photos: payload,
  stat: string,
};

type state =
  | Ready
  | Loading(string)
  | Error
  | Done(photos);

type events =
  | GetData(string)
  | ResolveData(photos)
  | HandleErr
  | Submit(string);

let updateState = (event, state) => {
  switch (event, state) {
  | (GetData(url), _) => Loading(url)
  | (ResolveData(photos), _) => Done(photos)
  | (HandleErr, _) => Error
  | (Submit(_), Loading(url)) => Loading(url)
  | (Submit(url), _) => Loading(url)
  };
};

exception Err(string);

let parsePhotos = payload => payload.photo;
let handleData = (responseData, dispatch) => {
  let payload = responseData.photos;
  let photos = payload.photo;
  Js.log(photos);
  dispatch(ResolveData(photos));
  Js.Promise.resolve(payload);
};

let handleErr = dispatch => {
  dispatch(HandleErr);
  Js.Promise.reject(Err("Something went wrong!"));
};

let get = (url, dispatch) => {
  Js.Promise.(
    fetch(url)
    |> then_(response => response##json())
    |> then_(d => handleData(d, dispatch))
    |> catch(_err => handleErr(dispatch))
    |> ignore
  );
};

let make = (~apiKey: string) => {
  let (state, dispatch) =
    React.useReducer((state, event) => updateState(event, state), Ready);

  let handleSubmit = (query: string, event: ReactEvent.Form.t) => {
    let url =
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="
      ++ apiKey
      ++ "&tags="
      ++ query
      ++ "&per_page=16&format=json&nojsoncallback=1";
    ReactEvent.Form.preventDefault(event);
    dispatch(Submit(url));
    ();
  };

  React.useEffect1(
    () => {
      switch (state) {
      | Loading(url) => get(url, dispatch)
      | _ => ()
      };
      None;
    },
    [|state|],
  );

  (state, handleSubmit);
};
